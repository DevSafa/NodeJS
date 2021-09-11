'use strict'

/*
    a promise is an object that returns a value which you hope to receive in the future, 
    but not now.
    Because the value will be returned by the promise in the future, 
    the promise is very well-suited for handling asynchronous operations.

    A promise starts in the pending state which indicates that the promise hasn’t completed. 
    It ends with either fulfilled (successful) or rejected (failed) state.
*/

//Creating a promise , The promise constructor

/*
    -The Promise constructor accepts a function as an argument. This function is called 
    the executor.

    - The executor accepts two functions with the names, by convention, resolve() and reject().
    - When you call the new Promise(executor), the executor is called automatically. 

    - inside the executor, you manually call the resolve() function if the executor is completed 
        successfully and invoke the reject() function in case of an error occurs
*/
let completed = true;
let learnJS = new Promise(function(resolve, reject){
    if(completed){
        resolve("I have completed learning JS.");
    }else
        reject("I haven't completed learning JS yet.");
});

// the promise is resolved because the completed variable is set to true
console.log(learnJS);

/*
    To see the pending state of the promise, we wrap the code of the executor in 
    the setTimeout() function .
*/

let isresolved = true;

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(isresolved){
            // So calling the resolve() function moves the promise object to the fulfilled state.
            resolve("the promise is resolved .");
        }else{
            reject("the promise is rejected.");
        }
    }, 3* 1000);
});
/*
    he promise starts with the pending state with the value is undefined. 
    The promise value will be returned later once the promise is completed
*/
console.log(promise1);
/*
    After about 3 seconds, type the promise1 in the console window, you will see that the state of 
    the promise becomes resolved and the promise value is the string that we passed to 
    the resolve() function
*/

let isresolved1 = false ;

let promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        if(isresolved1)
            res("promise2 is resolved.");
        else{
            rej("promise2 is rejected.");
        }
    },3 * 1000);
 
});

console.log(promise2);

/*
-calling the reject() method moves the promise object to the rejected 
state.
-Once the promise reaches either fulfilled state or rejected state, 
it stays in that state and can’t switch.
-In other words, a promise cannot go from the fulfilled state to the 
rejected state and vice versa. It also cannot go back from the resolved 
state or rejected state to the pending state.
*/