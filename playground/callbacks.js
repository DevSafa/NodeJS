// pass a callback function as an argument to setTimeOut
// a callback function is nothing more that a function that we provide as an argument to another function , with the intention
//of having it called later on (setTimeOut will call it in the future)

// so  in this way we are using the callback pattern in an asynchrounous way
// evarytime we use the callback pattern thasn't mean is asynchrounous

//set Time out use it's callback pattern and it's asynchrounous
//array methods like foreach and filter used callback in synchrounous way
setTimeout(() =>{
    console.log('Two seconds are up');
},2000);

//synchrounous way
const names=['Safa','Sara','Jack'];
const shortNames = names.filter((name) => {
    //return true if name has ength <=4
    return name.length <= 4; 
});

//--------------------------
//define a function with callback
/*const geocode =  (address, callback) => {

    const data = {
        latitude: 0,
        longitude: 0,
    }
    return data;
 
}
const data = geocode("Philadelphia");
console.log(data);
*/


//when the function is synchrounous we are able to use return 
//when a function do asynchrounous stuff return it's no longer an option , instead of return it a value ,
// we take a callback in , and call the callback with the value we ant when we have it
const geocode =  (address, callback) => {
    setTimeout(() => {
        const data = {
        latitude: 0,
        longitude: 0,
    }
    //return will not work when we start do asynchrounous things inside our functions
    // and here where the callback pattern will coming to play
    //the callbacks functions , the ones that go to the node api ,a nd come down to the callback queue,
    //they won't be executed until the call stack is empty , main has to finish
    //return data;
    callback(data);
    },2000)
}

geocode("Philadelphia",(data) =>{
    console.log(data);
});
