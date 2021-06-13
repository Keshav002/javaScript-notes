console.log('Learn about Symbols');

//Symbols
const sym1 = Symbol('My Identifier');
const sym2 = Symbol('My Identifier');
// console.log('Symbol is', sym1);
// console.log('type of symbol is', typeof(sym1));
console.log(sym1 === sym2);

const a = "this is";
const b = "this is";
console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k1');

myObj = {};
myObj[k1] = "Keshav";
myObj[k2] = "Mohit";
myObj["name"] = "Good Boy";
myObj[4] = "Good Int";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj[k2]); //cannot do this to get mohit because it is same as myObj["k2"]

//symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key]);
    
}

console.log(JSON.stringify(myObj));




