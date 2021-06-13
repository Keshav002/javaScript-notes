console.log('Learn about datatypes');
var name = `Keshav`;
//in var we can change name
console.log(name);
const city = `Jind`;
console.log(city);
//in const we cant change name
{
     let city =`Rohtak`;
     console.log(city);
     city=`Gohana`;
     console.log(city);
     //in let we can change name locally ie. inside brackets
}
console.log(city);
//Data Types Primitive
let myName = 'Keshav';
console.log("Data type is " + typeof(myName));

let marks = 34;
console.log("Data type is " + typeof(marks));

let boolean = true;
console.log("Data type is " + typeof(boolean));

let nullity = null;
console.log("Data type is " + typeof(null));

let undef = undefined;
console.log("Data type is " + typeof(undefined));
//data type Reference
//arrays
 let arrey = [1,2,3,4];
console.log("Data type is " + typeof(arrey));
//object literals
let marksList = {Keshav: 100,Mohit: 33,Sohit: 56};
console.log(marksList);
console.log("Data type is " + typeof(marksList));
//function
function fun() {}
console.log("Data type is " + typeof(fun));
let date = new Date();
console.log("Data type is " + typeof(date));







