const jsdom = require('jsdom'); 
const { JSDOM } = jsdom; 
const dom = new JSDOM(`<!DOCTYPE html><html><body><div class="nav-item-dropdown"><div id="mega-menu-content"></div></div><div id="mobile-mega-menu-content"></div></body></html>`); 
global.document = dom.window.document; 
global.window = dom.window; 
global.MouseEvent = dom.window.MouseEvent;

const fs = require('fs'); 
const data = fs.readFileSync('js/data.js', 'utf8'); 
const script = fs.readFileSync('js/script.js', 'utf8').replace(/document\.addEventListener\('DOMContentLoaded'.*?\{/, 'function init() {').replace(/\}\);\s*$/, '}'); 

try { 
    eval(data + ';' + script + '; initMegaMenu(); console.log("Success: " + document.getElementById("mega-menu-content").innerHTML.length);'); 
} catch(e) { 
    console.error('ERROR OCCURRED:', e); 
}
