console.log("learn about arrow functions");
//regular function
// const fun = function(){
//     console.log("This is a normal function");
// }
// fun();
//converting it to arrow function
const fun = () => {
    console.log("This is a arrow function");
}
fun();
// //when function returns something
// const ret = function(){
//     return "This is return function";
// }
// console.log(ret());

// One liners do not requires braces/return
const ret = () => "this is return function";
console.log(ret());
//when we return object we have to put one more bracket
const obj = () => ({ name: "Keshav" });
console.log(obj());

//when our function takes one string as argument the we dont have to put bracket
const take = name => "My name is " + name;
console.log(take("Keshav"));
// if it take multiple arguments then we have to put brackets


