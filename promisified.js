const fs = require('fs')
const util = require('util')
const writeFilePromise = util.promisify(fs.writeFile)


writeFilePromise('data.txt','Promise Data').then(()=>
    console.log("Written")).
    catch((err)=> console.log(err))

// fs.writeFile('data.txt','This is Data',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File Written")
//     }
// })

console.log("Coming Here")