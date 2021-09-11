'use strict';

//you want to perform the following asynchronous opeartions in sequence
/*
    1- Get the user from the database
    2- Get the services of the selected user
    3- calculate the service cost from the user's services

*/

//function to get the user from database
function getUser(userId){
    return new Promise((resolve, reject) =>{
        console.log('Get the user from the database.');
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin'
            });
        },1000);
    })
}

//function to getServices of a user
function getServices(user){
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 3 * 1000);
    });
}

//calculate the service cost

function getServiceCost(services)
{
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000)
    });
}

// Get the user from the database.

getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);
