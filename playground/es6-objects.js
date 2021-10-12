//feature 1 : object property shorthand

const name = 'Safa';

const userAge = 24;

const user = {
    name : name,
    aget:userAge,
    location :'Benguerir'
}

console.log(user);

//object property shorthand syntax => this syntax can be used when defining an object 
// it comes to play when setting up a property who's value from a variable with the same name .


const me = {
    // create a name property on user , it's value comes from the value of the name variable 
    name,
    age : userAge,
    location :'Benguerir'
}

console.log(me);

//feature 2 : object destructuring => is useful when you have an object, and you try to access properties from it 

const product = {
    label : 'Red notebook',
    price : 3,
    stock : 201,
    salePrice : undefined ,// the item not in sale
    //rating : undefined
    rating : 2.5
}

// the whole goal of destructuring is to extract object properties and their values
//into indivdual variables


const l = product.label ;
const s = product.stock; 
//.... the problem with this is end up by writing a lot of code

//product is the object we try to destructure
//{} list all the properties that we want to extract
//with destructuring syntax will be easy to extract the properties that we want.

// with destructuring we can rename the variable that we end up creating
    //const  {label, stock,rating} = product;
    //console.log('label  : ',label);
//with destructuring we have the ability to set up the default value for the variable
    //const {label:productLabel,stock,rating} = product;
//the default will only be used if there is no property matching in the product
const {label:productLabel,stock,rating = 5} = product;
console.log('label  : ',productLabel);
console.log('stock  : ',stock);
console.log('rating  : ',rating);

//we can also use destructuring when working with function argument




