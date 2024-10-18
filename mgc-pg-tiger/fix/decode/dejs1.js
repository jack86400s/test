const fs = require("fs");
const path = require("path");
const words = require("./wojs");

const reg = new RegExp("[a-zA-Z]{2,3}\\(0x[0-9a-fA-F]{2,4}\\)", "g");

let htmPath = "./in/1.js";
let htm = fs.readFileSync(path.resolve(__dirname, htmPath), "utf-8");

let results = htm.match(reg);

let map = {};
for (let i = 0; i < results.length; i++) {
  let result = results[i];
  let wordsIdx = result.match(/\(([^)]+)\)/)[1];
  let int = parseInt(wordsIdx) - 0xa3;
  map[result] = words[int];
}

let newHtm = htm;
newHtm = newHtm.replace(/"/g, "'");

for (let i = 0; i < results.length; i++) {
  let key = results[i];
  let replacement = "'" + map[key] + "'";
  // console.log(key, replacement);
  newHtm = newHtm.split(key).join(replacement);
  console.log(results.length, "      ", i);
}

newHtm = newHtm.replace(/\+\s*'/g, "+ '");
newHtm = newHtm.replace(new RegExp("' \\+ '", "g"), "");
newHtm = newHtm.replace(new RegExp("' \\+ " + '"', "g"), "");

fs.writeFileSync(path.resolve(__dirname, "./out/1.js"), newHtm);