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
const shortNames = names.filter(() => {
    //return true if name has ength <=4
    return name.length <= 4; 
});