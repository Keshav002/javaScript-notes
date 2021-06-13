console.log('Learn about Javascript sets');

// Set stores unique values
const mySet = new Set();  // Initialize an empty set
console.log('The set looks like', mySet);

// Adding values to the set
mySet.add('this');
mySet.add('that');
mySet.add(786);
mySet.add(true);
mySet.add('My name');
console.log('The set looks like this now:', mySet);

// Used a constructor to initialize the set
let mySet2 = new Set([1, 45, 'this', false, {a:4, b:6}, 'this']);
console.log('New looks like this now:', mySet2);

console.log(mySet.size); //Get the size of the set

console.log(mySet.has(786)); //Checking that set have that element or not

console.log('Before removal: ', mySet);

mySet.delete('that'); //Remove an element from the set
console.log('After removal: ', mySet);

//Iterating a set
// for(let item of mySet){
//     console.log('Item is', item);  
// }

mySet.forEach((item)=>{
    console.log('Item is', item);  
})

// Converting set into array
let arraySet = Array.from(mySet);
console.log('Array is', arraySet);


