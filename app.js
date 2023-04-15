const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.worldometers.info/coronavirus/country/india/";

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    extractHTML(html);
  }
}

function extractHTML(html) {
  let $ = cheerio.load(html);
  let arr = $("#maincounter-wrap span");
  let cases = $(arr[0]).text();
  let death = $(arr[1]).text();
  let recovery = $(arr[2]).text();


  console.log(cases)
  console.log(death)
  console.log(recovery)
}
