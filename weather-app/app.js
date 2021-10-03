console.log('Starting');

// use most basic asynchrouns function that node provide :
//setTimeout allows us to run code after  a specific amount of time has past

// take  a callback , and a number of milliseconds you gonna wait until the callback will be executed
setTimeout(() => {
    console.log('2 Second Timer');
}, 2000) // run the callback after two seconds has past

setTimeout(() =>{ //why 0 Second Timer comes after Stopping
    console.log('0 Second Timer');
}, 0);
// if we are fetching data for one user it will be nice to keep doing other things in our program instead of 
// waiting
console.log('Stopping');