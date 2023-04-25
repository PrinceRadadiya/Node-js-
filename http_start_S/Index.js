const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/Api/Api.json`, "utf-8");
    
  const object = JSON.parse(data);
  const rel = JSON.stringify(object);
  if (req.url == "/") {
    res.end("this is home page");
  } else if (req.url == "/about") {
    res.end("this is about page");
  } else if (req.url == "/contact") {
    res.end("this is contact page");
  } else if (req.url == "/api") {
    res.writeHead(200,{'Content-type': "application/json"})
    res.end(rel);
  } else {
    res.writeHead(404);
    res.end("<h1>404 page note found </h2>");
  }
  // res.end("hello my name is prince");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("8000 port is ready");
});
