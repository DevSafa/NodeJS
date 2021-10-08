
//api key to connect to Urban Dictionary API 
const api_key = '144733a18amshd3c59447d35f31fp15192cjsn4e4d334f1dbf'

//Host url
const api_url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define'

//use yargs npm module

const yargs = require('yargs');

//using colors
const chalk = require('chalk');
//use request npm module postman-request
const request = require('postman-request');
const { json } = require('stream/consumers');

//write to file system
const fs = require('fs');

yargs.command({
    command :'search',
    describe:'serach a word',
    builder :{
        term : {
            describe : 'word to search',
            demandOption : true,
            type : 'string',
        }
    },
    handler : function (argv){
        const url = `${api_url}?rapidapi-key=${api_key}&term=${argv.term}`;
        //make request to the url
        console.log(`url : ${url}`);
        request({url : url}, (err,response) => {
            const data = JSON.parse(response.body);
            let i = 0;
            //let toWrite =`"${argv.term}" : \n`;
            let toWrite =`"${argv.term}" : \n`;
            while(i < data.list.length)
            {
                toWrite += `\t- ${data.list[i].definition}\n`;
               // console.log(`- ${data.list[i].definition}`);
                i++;
            }
            fs.appendFileSync('./definitions',toWrite);
            fs.appendFileSync('./definitions',"\n----------------------------\n");
            //console.log(toWrite);
        });
        

    }
});
yargs.parse();
// console.log(yargs.argv);
// yargs.command({
//     command
// })