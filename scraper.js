const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataFilePath = path.join(__dirname, 'js', 'data.js');

async function scrapeComen() {
    console.log('Starting scraper...');
    
    let dataCode = fs.readFileSync(dataFilePath, 'utf8');
    
    // Convert const to var so they attach to the vm sandbox
    let execCode = dataCode.replace(/const products/g, 'var products')
                           .replace(/const solutions/g, 'var solutions')
                           .replace(/const categories/g, 'var categories')
                           .replace(/const WHATSAPP_NUMBER/g, 'var WHATSAPP_NUMBER')
                           .replace(/const PHONE_NUMBER/g, 'var PHONE_NUMBER');
    
    const sandbox = {};
    vm.createContext(sandbox);
    try {
        vm.runInContext(execCode, sandbox);
    } catch (e) {
        console.error("Error evaluating data.js:", e);
        return;
    }
    
    let products = sandbox.products;
    if (!products || !Array.isArray(products)) {
        console.error("Could not find products array in data.js");
        return;
    }
    
    console.log(`Found ${products.length} products to potentially scrape.`);

    let scrapedCount = 0;

    for (let i = 0; i < products.length; i++) {
        let p = products[i];
        
        let urlName = p.name.replace(/ /g, '');
        urlName = urlName.replace(/\//g, '&');
        
        let url = `https://en.comen.com/products/${encodeURIComponent(urlName)}`;
        console.log(`Scraping [${p.name}] -> ${url}`);
        
        try {
            const res = await axios.get(url, { timeout: 10000 });
            const $ = cheerio.load(res.data);
            
            // Extract images
            let images = [];
            $('img').each((idx, el) => {
                let src = $(el).attr('src');
                if(src && (src.includes('cms-v2') || src.includes('product'))) {
                    if(src.startsWith('http')) images.push(src);
                    else images.push('https://en.comen.com' + src);
                }
            });
            images = [...new Set(images)].filter(img => !img.includes('logo') && !img.includes('icon'));
            if(images.length > 0) {
                p.images = images.slice(0, 4); 
            }
            
            // Extract text features
            let textBlocks = [];
            $('h2, h3, p, li').each((idx, el) => {
                let text = $(el).text().trim().replace(/\s+/g, ' '); 
                if(text.length > 30 && text.length < 500) {
                    textBlocks.push(text);
                }
            });
            
            textBlocks = [...new Set(textBlocks)].filter(t => !t.includes('COMEN') && !t.includes('About Us') && !t.includes('Contact Us'));
            
            if (textBlocks.length > 0) {
                p.features_extended = textBlocks.slice(0, 6);
                p.rich_description = `<p>${textBlocks[0]}</p>`;
            }
            
            scrapedCount++;
        } catch (err) {
            console.log(`Failed to scrape ${p.name}: ${err.message}`);
        }
        
        await new Promise(r => setTimeout(r, 200)); 
    }
    
    const newCode = `// Contact Configuration\nconst WHATSAPP_NUMBER = "${sandbox.WHATSAPP_NUMBER}";\nconst PHONE_NUMBER = "${sandbox.PHONE_NUMBER}";\n\n// Data Structures\nconst products = ${JSON.stringify(products, null, 4)};\n\nconst solutions = ${JSON.stringify(sandbox.solutions, null, 4)};\n\nconst categories = ${JSON.stringify(sandbox.categories, null, 4)};\n`;
    
    fs.writeFileSync(dataFilePath, newCode, 'utf8');
    console.log(`Scraping complete. Updated ${scrapedCount} products in data.js`);
}

scrapeComen();
