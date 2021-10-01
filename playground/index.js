
const fs = require('fs')

//Non-blocking , asynchrounous way
//node js is build arround the philosophy of callbacks
// arrw functions ES6 syntax
fs.readFile('./start.txt','utf-8' , (err, data1) => {
  if(err) return console.log('ERROR!'); // change the name of file to a non existing file 
   fs.readFile(`./${data1}.txt`,'utf-8',(err,data2) => {
       console.log(`data2   :${data2}`);
        fs.readFile('./append.txt','utf-8',(err,data3)=>{
            console.log(`data3   :${data3}`);
            //there is no data to read it so we have just one argument err
            fs.writeFile(`./final.txt`, `${data2}\n${data3}`,'utf-8',err =>{
                    console.log('your file has been written');
            });
        });
    });
   console.log(`data1   :${data1}`);
});

console.log('Will read file!');

//(err,data1) => {}  ==> function(err,data1){}