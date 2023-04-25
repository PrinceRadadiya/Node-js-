const path = require("path");
console.log(path.dirname("D:/Node js/path/index.js"));


console.log(path.parse("D:/Node js/path/index.js"))


const filename = path.parse("D:/Node js/path/index.js");

console.log(filename.root)