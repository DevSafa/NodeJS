'use strict'

/*
    Asynchronous calls refer to calls that are moved off of
    JavaScript’s execution stack and do some work elsewhere.
    These are calls to an API. In Node’s case, they are calls 
    to a C++ API in Node. Once the work is done, there is a 
    function put in the event queue. Then when JavaScript’s 
    execution stack is empty, the event loop pulls the function 
    from the queue and pushes it onto the execution stack.
*/

//The simplest example of asynchronous JavaScript is the setTimeout() function


/*
    The setTimeout() function takes a function to call when the 
    timeout has elapsed, and a number of milliseconds to wait 
    before calling that function.
*/

/*
    When you make a call to setTimeout() it is a call to a 
    C++ API. This gets moved off of the execution stack and 
    when the timeout completes, the callback gets pushed into 
    the queue.
    Once the execution stack is empty, the event loop will pull 
    the callback from the queue and add it to the execution stack. 
    All asynchronous code works in this same basic manner.
*/
setTimeout(function callAfterTimeOut(){
    console.log('At least five seconds have passed.');
}, 5000);

/*
The setTimeout() function’s first parameter is a function 
to call when the timeout finishes.

The function passed is known as a “callback” function and the work being done 
asynchronously is the timer.

Of all the techniques for writing asynchronous JavaScript,
callbacks were the first. They were a part of every JavaScript developer’s 
life even when they didn’t realize it. Node itself was pretty much built on callbacks,
and Express (Node’s most popular web server engine) uses callbacks for just about 
everything.
*/