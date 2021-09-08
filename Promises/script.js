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
    when the promise has fulfilled with a value , you will want to be able to access 
    the value .
    Promises have a method called then that will run after a promise 
    reaches resolve in the code.
    then will return the promise’s value as a parameter.
    
*/

//the promise that is already created had a PromiseValue of We did it! ,
//the value is what will be passed into the anonymous function as response.
promise2.then((Response) => {
    console.log("promise's value : " + Response);
});
/*
 the example you created did not involve an asynchronous Web API—it only explained 
 how to create, resolve, and consume a native JavaScript promise.

 Using setTimeout, you can test out an asynchronous request.
*/

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolving an asynchronous request!") , 2000)
});

//log the result
/*
    Using the then syntax ensures that the response will be logged only when 
    the setTimeout operation is completed after 2000 milliseconds.
    All this is done without nesting callbacks
*/
promise3.then((response) => {
    //Now after two seconds, it will resolve the promise value and it will get logged in then
    console.log(response)
})

//chain a promise
/*
    Promises can also be chained to pass along data to more than one asynchronous 
    operation. If a value is returned in then, another then can be added that will 
    fulfill with the return value of the previous 
*/
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
/*
    Since then can be chained, it allows the consumption of promises to appear
     more synchronous than callbacks, as they do not need to be nested. This will 
     allow for more readable code that can be maintained and verified easier

*/


/*  
    the instance method  of the Promise object such as then()
    returns a separate promise object .
    Therefore, you can call the promise’s instance method on the return Promise.
    The successively calling methods in this way is referred to as the promise chaining.

*/

// create a new promise that resolves to the value 10 after 3 seconds
let p = new Promise((resolve, reject) => {
    /* use the setTimeout() method to simulate an asynchronous operation. */
    setTimeout(() => {
        resolve(10);
    } , 3 * 1000)
});

//invoke the then() method on the promise
//the call back passed to then() method executes once the promise is resolved
/* In the callback, we showed the result of the promise and returned a new value: result * 2 */

/*
    Because the then() method returns a new Promise whose value is resolved to the return value,
    you can call the then() method on the return Promise
*/
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




