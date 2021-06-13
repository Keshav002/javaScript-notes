console.log("learn about async/await"); 
//when we use async then it will return a promise
//this method will save us from writting two then in fetch api 
async function keshav(){
    console.log("Inside keshav function");
    const response = await fetch('https://api.github.com/users');
    console.log("Before response");
    const users = await response.json();
    console.log("users resolved");
    return users;
}
console.log("Before calling keshav");
let a = keshav();
console.log("After calling keshav");
console.log(a);
a.then(formal=>console.log(formal))
console.log("Last line of this file");