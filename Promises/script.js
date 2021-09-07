/*
    Promises are an alternative to callbacks for delivering the results of an asynchronous 
    computation.
*/

/*initialise a promise*/
/*nothing has been set up for the promise, so it’s going to sit there in a pending state forever*/
const promise1 = new Promise((resolve, reject) => {});
/*this promise has a pending status and undefined value*/
/*
    __proto__: Promise
    [[PromiseStatus]]: "pending"
    [[PromiseValue]]: undefined
*/
console.log(promise1);

//fulfill the promise by resolving it with a value.
const promise2 = new Promise((resolve, reject) => {
    resolve('We did it !');
});
/*
    __proto__: Promise
    [[PromiseStatus]]: "fulfilled"
    [[PromiseValue]]: "We did it!" 
*/
console.log(promise2);
/*
    a promise is an object that may return a value. After being successfully fulfilled, 
    the value goes from undefined to being populated with data

    A promise can have three possible states: pending, fulfilled, and rejected.

    -Pending - Initial state before being resolved or rejected
    -Fulfilled - Successful operation, promise has resolved
    -Rejected - Failed operation, promise has rejected

    After being fulfilled or rejected, a promise is settled.

*/

/* -------------------------------------------------- */
//consuming a Promise
/*
    when the promise has fulfilled with a value , you will want to be able to access the value .
    
*/