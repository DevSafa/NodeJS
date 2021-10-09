
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
        },
        file : {
            describe : 'file to write to',
            demandOption : true,
            type : 'string',
        }
    },
    handler : function (argv){
        var i = 0;
        const nbr_words = argv.term.length;

        while(i < nbr_words)
        {
            const url = `${api_url}?rapidapi-key=${api_key}&term=${argv.term[i]}`;
            let toWrite = `"${argv.term[i]}" : \n`;
            request({url : url}, (err,response) => {
                const data = JSON.parse(response.body);
                let j = 0;
                while(j < data.list.length)
                {
                    toWrite += `\t- ${data.list[j].definition}\n`;
                    j++;
                }
                fs.appendFileSync(`${argv.file}`,toWrite);
                fs.appendFileSync(`${argv.file}`,"\n----------------------------\n");
            });
            i++;
         
        }

   }
});
yargs.parse();
