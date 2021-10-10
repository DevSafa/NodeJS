setTimeout(() =>{
    console.log('Two seconds are up');
},2000);


//synchrounous way
const names=['Safa','Sara','Jack'];
const shortNames = names.filter((name) => {
    //return true if name has ength <=4
    return name.length <= 4; 
});

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


const geocode =  (address, callback) => {
    setTimeout(() => {
        const data = {
        latitude: 0,
        longitude: 0,
    }
    callback(data);
    },2000)
}

geocode("Philadelphia",(data) =>{
    console.log(data);
});


//Goal:Mess around with the callback pattern 

//1-define an add function that accepts the correct argument
//2-use setTimeouT TO SIMULATE A 2 SECOND DELAY
//3-AFTER 2 seconds are up , callback function with the sum 
//4-test your work

const add = (a, b, callback) => {
    setTimeout(() => {
        //after the 2 seconds are up , we call the callback function
        //we can't use return because we return from the inner function
        callback(a+b);
    }, 2000);
   
}

add(1,4 ,(sum) => {console.log(sum)})

