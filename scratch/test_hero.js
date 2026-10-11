const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('file:///' + path.resolve('index.html').replace(/\\/g, '/'));
  
  await new Promise(r => setTimeout(r, 1200));
  await page.evaluate(() => {
    const l = document.getElementById('page-loader');
    if (l) l.style.display = 'none';
  });
  const hero = await page.$('.rz-hero');
  if (hero) await hero.screenshot({ path: 'scratch/slide_0.png' });
  
  const checkSlide = async (name) => {
    const textInfo = await page.evaluate(() => {
      const rotating = document.getElementById('rz-rotating-text');
      const staticTitle = document.querySelector('.rz-title-static');
      const subtext = document.getElementById('rz-subtext');
      
      const rRect = rotating.getBoundingClientRect();
      const sRect = staticTitle.getBoundingClientRect();
      const subRect = subtext.getBoundingClientRect();
      
      return {
        upperGap: sRect.top - rRect.bottom,
        lowerGap: subRect.top - sRect.bottom
      };
    });
    console.log(`[${name}]`, JSON.stringify(textInfo));
  };

  await checkSlide('Slide 0');
  if (hero) await hero.screenshot({ path: 'scratch/slide_0.png' });
  
  // Transition to Slide 1
  await page.evaluate(() => window.nextRzSlide ? window.nextRzSlide() : document.getElementById('rz-nav-next').click());
  await new Promise(r => setTimeout(r, 1200));
  await checkSlide('Slide 1');
  if (hero) await hero.screenshot({ path: 'scratch/slide_1.png' });
  
  // Transition to Slide 2
  await page.evaluate(() => window.nextRzSlide ? window.nextRzSlide() : document.getElementById('rz-nav-next').click());
  await new Promise(r => setTimeout(r, 1200));
  await checkSlide('Slide 2');
  if (hero) await hero.screenshot({ path: 'scratch/slide_2.png' });
  
  // Mobile test
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 600));
  if (hero) await hero.screenshot({ path: 'scratch/slide_mobile.png' });
  
  console.log('Done capturing all slides including mobile!');
  await browser.close();
})();
