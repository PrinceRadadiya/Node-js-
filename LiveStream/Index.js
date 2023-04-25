const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
//   fs.readFile("input.txt",(error,data)=>{
//       console.log("this is not readfile")
//       if(error) return  console.log("this is not readfile")
//       res.end(data.toString());
//   })

  // second way to live data

//   const live = fs.createReadStream("input.txt");

//   live.on("data",(stepdata) => {
//     res.write(stepdata);
//     console.log(stepdata)
//   });
//   live.on("end", () => {
//     res.end("hello")
//     console.log("hello");
//   });
//   live.on("error", (err) => {
//     console.log(err);
//     res.end("file not found");
//   });


    // final way to stream
    const live = fs.createReadStream("input.txt");
    live.pipe(res);
});

server.listen(8000,"127.0.0.1");
