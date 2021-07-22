const request = require("request");
const cheerio = require("cheerio");
const dataED = require('./data.json');

const headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "cookie": "readArticle=%7B%22new%22%3A%5B%7B%22id%22%3A2039%2C%22date%22%3A1615272906%7D%5D%2C%22update%22%3A%5B%5D%7D",
    "dnt": "1",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
}
const url = {
    "method": "GET",
    "url": dataED.url,
    "headers": headers
}

function doRequest() {
    // 取得網頁資料
    request(url, function(error, response, body) {
        if (!error) {
            // 用 cheerio 解析 html 資料
            //關閉編碼轉換
            //let $ = cheerio.load(body, { decodeEntities: false });
            let $ = cheerio.load(body, { decodeEntities: false });
            console.log($("section").html())

            //   // 篩選有興趣的資料
            //   var temperature = $("[data-variable='temperature'] .wx-value").html();
            //   var humidity = $("[data-variable='humidity'] .wx-value").html();

            //   // 輸出
            //   console.log("氣溫：攝氏 " + temperature + " 度");
            //   console.log("濕度：" + humidity + "%");

        } else {
            console.log("擷取錯誤：" + error);
        }
    });
}