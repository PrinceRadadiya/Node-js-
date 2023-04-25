const fs = require('fs');
// synconyc data 1 complete later then next
// fs.writeFileSync('read.txt','dddddddddd,my name is prince');
// fs.writeFileSync('read.txt','dddddddd');


// acycronys data 1 sarting and continue data not stop

fs.appendFileSync("read.txt","my name is pcc");

const buf_data = fs.readFileSync('read.txt');

dada = buf_data.toString();

console.log(dada)

// fs.renameSync("read.txt","readwrite.txt");