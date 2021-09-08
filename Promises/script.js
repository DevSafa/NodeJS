'use strict'
const promise1 = new Promise((resolve, reject) => {});

console.log(promise1);

//----------------------------------------------

const promise2 = new Promise((resolve, reject) => {
    resolve('We did it !');
});

console.log(promise2);

promise2.then((Response) => {
    console.log("promise's value : " + Response);
});

//----------------------------------------------------

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolving an asynchronous request!") , 2000)
});

promise3.then((response) => {
    console.log(response)
});

//----------------------------------------------------


const promise4 = 
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("the promise is resolved after 5 seconds specified is setTimeout")
    },5000);
}).then((firstResponse) => {
    return firstResponse + " And chaining!"
}).then((secondResponse) =>{
    console.log(secondResponse);
});


//------------------------------------------------------

let p = new Promise((resolve, reject) => {
    /* use the setTimeout() method to simulate an asynchronous operation. */
    setTimeout(() => {
        resolve(10);
    } , 3 * 1000)
});


p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
}).then((result) => {
    console.log("end of chaining!");
}).then((result) => {
    console.log(result);
})

//---------------------------------------------------------
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 1000)
});

p1.then((result) => {
    console.log(result); //10
    return result * 2;
}).then((result) => {
    console.log(result) ; // 20
    return result * 3;
}).then((result) => {
    console.log(result); //60
    return result * 4
});

//-------------------------------------------------


