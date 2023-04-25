const fs = require("fs");
const data = {
  id: "01",
  name: "prince",
  surname: "radadiya",
};

const jsondataformat = JSON.stringify(data);
// fs.writeFile("json1.json", jsondataformat, (error) => {
//   console.log("data is Not found");
// });

fs.readFile("json1.json","utf-8",(err,data)=>{
   const object = JSON.parse(data)
   console.log(object)
})

console.log(jsondataformat);
 // pela file banavi json1.json and data add kra tenu formate htu json format ma add kra pachi te file ne read karva ni
 // readfile ni help thi read kri tema utf- 8 atle bunnary code nay teno orignal code aave ane
 //readfile thay jay paachi atle te data ne pacho object banava mate parse method thi tene object bnavi