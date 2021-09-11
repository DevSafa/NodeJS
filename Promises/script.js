'use strict'

/*
    The then() method is used to schedule a callback to be executed 
    when the promise is successfully resolved.

    The then() method takes two callback functions:
        promiseObject.then(onResolved, onRejected);

    //Onresolved Callback  is called when the promise is resolved 
    //On Rejected  callback is called when the promise is rejected
*/

// the following function return a promise
function makePromise(completed){
    return new Promise(function (resolve, reject){
        setTimeout(() => {
            if(completed)
                resolve("I have completed.");
            else
                reject("I haven't completed yet.")
        }, 3*1000);
    });
}

let promise1 = makePromise(true);
promise1.then(
    success => console.log(success),
    reason => console.log(reason)
);

let promise2 = makePromise(false);
promise2.then(
    success => console.log(success),
    reason => console.log(reason)
);

/*
    It is possible to schedule a callback to handle the resolved or rejected case only.
    The following runs the resolved case
*/

promise1.then(value => console.log(value));
promise2.then(undefined , value =>console.log(value) );

console.log("hello");
//the catch method

/*
    If you want to schedule a callback to be executed when the promise 
    is rejected, you can use the catch() method of the Promise object.
*/

let promise3 = makePromise(false);
promise3.then(undefined, rejected => console.log("**" + rejected));
/*
    internally, the catch() method invokes the then(undefined, onRejected) method
*/
promise3.catch(
    result => {
        console.log("{\ninside catch\n");
        console.log(result);
        console.log("}");
    }
);

/*
    Sometimes, you want to execute the same piece of code whether 
    the promise is fulfilled or rejected.
    we use finally() method
*/

let promise4 = makePromise(true);
promise4.finally(() => console.log("the App is created"));

let promise5 = makePromise(false);
promise5
    .then(success => console.log("SUCCESS " + success))
    .catch(reason => console.log("FAILED " + reason))
    .finally(() => console.log("CREATED THE APP "));

let promise6 = makePromise(true);
promise6
    .then(success => console.log("SUCCESS " + success))
    .catch(reason => console.log("FAILED " + reason))
    .finally(() => console.log("CREATED THE APP "));