const fs = require("fs");

// fs.writeFile("read.txt"," hello guys my name is : ",(error)=>{
// console.log("fyz")
// });

fs.appendFile("read.txt","prince" , (error) =>{
    console.log(error)
});

fs.readFile("read.txt", "UTF-8",(error,data)=>{
    console.log(error);
    console.log(data);
})


// output : <Buffer 20 68 65 6c 6c 6f 20 67 75 79 73 20 6d 79 20 6e 61 6d 65 20 69 73 20 3a 20 70 72 69 6e 63 65 70 72 69 6e 63 65 70 72 69 6e 63 65 70 72 69 6e 63 65 70 ... 47 more bytes>

