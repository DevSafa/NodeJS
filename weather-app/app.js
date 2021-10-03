console.log('Starting');

setTimeout(() => {
    console.log('2 Second Timer');
}, 2000)

setTimeout(() =>{
    console.log('0 Second Timer');
}, 0);

console.log('Stopping');

/*

    - main pushed to call Stack
    - call to setTimeout ->get pushed to the call Stack
        - setTimeOut not part of javascript programming language , you will not find it's definition in javascript spec
           and  v8 has no implementation for it .
        - it is node js which create an implementation of setTimeOut using c++ , and provide it 
            to your node js script to use
        - when we call setTimeOut it registering an event with node js APIs, and then an event
            callback paired . the event is wait 2 seconds , callback is the function to run after that time 
        -when we call setTimeoUt a new event get registeres in Node Apis
        - when the two seconds are runing in node APIs , we can do other stuff in call Stack
    - JavaScript itself is a single threaded programming language  , you can do one thing at time  
      and call Stack enforces that.
    - the code that you run is still single threaded
    -Node uses other threads in c++ behind the sceneds to manage his events,
    that what allow us to continue runing our application .
    -setTimeOut with 0 seconds will register other event in nosejs APIs
    - 2 node APIs waiting in the background , both of them are waiting the event to complete 
    - 0 seconds are up , teh callback need to be executed

    - the job of the callback Queue is to maintain a list of all callbacks functions that are ready to be executed
    - when 0 second timer is complete => the callback function will be added to the callback queue
    - to execute a callback means added to teh call stack

    - event loop looks to 2 things : call Stack , callback queue
        if(call stack is empty ) => it will run items from teh call back queue
        -the event loop need to wait for the callstack to be empty , so at this point main function 
        continues to run 
*/