const puppeteer = require('puppeteer');
const dataED = require('./data.json');
let browser;
let page;

async function o() {
    //启动浏览器
    browser = await puppeteer.launch({ "headless": false });
    //启动新页面
    page = await browser.newPage();
}

async function s() {
    await o();
    //链接网址
    await page.goto(dataED.url);

    console.log(await page.content());

    // await page.setViewport({
    //     "width": 900,
    //     "height": 3573,
    //     "deviceScaleFactor": 1
    // })

    await page.screenshot({
        path: 'screenshot.png',
        "clip": {
            "x": 150,
            "y": 277,
            "width": 900,
            "height": 3573
        }
    });

    await page.close();
}
s();