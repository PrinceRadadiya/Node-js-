const { write } = require("fs");
const http = require("http");

const server = http.createServer((cur, res) => {
  if (cur.url == "/") {
    res.end("home page");
  } else if (cur.url == "/about") {
    res.end("this is about page");
  } else if (cur.url == "/contact") {
    res.write("hello sundry");
    res.end("");
  } else {
    res.end("404 page is note found");
  }
  // res.end("hello my name is prince");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("8000 port is ready");
});




// object to json and json to object convtor


const data = [
  { name: "prince", id: "01", surname: "radadiya" },
  { name: "prfnce", id: "02", surname: "rdadiya" },
];

const alldata = JSON.stringify(data);

console.log(alldata);

const parse = JSON.parse(alldata);

console.log(parse);
