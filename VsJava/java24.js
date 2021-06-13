console.log("learn about regular expressions");
// let reg = /keshav/i;//means case insensitive 
// let reg = /keshav/;
let reg = /keshav/g;
//here g is a global flag(it will search word from the whole string if there is any repitition then it print second matching word when it will be run second time)
//this is a regular expression literal
console.log(reg);
console.log(reg.source);

let s = "Hello its keshav and my name is also keshav";
//functions to match expressions
// 1. exec()  this functiopn will return an array for match and null for no match
let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

//2.test()  Returns true and false
let result2 = reg.test(s);
// console.log(result2);
//3.match()  it will return array for match and null for nomatch
let result3 = s.match(reg);//it has reverse syntax
// console.log(result3);

// 4. search() Returns index of first match else it will return -1
let result4 = s.search(reg);
// console.log(result4);//it has also reverse syntax

//5. replace()  it returns new replaced strings with all the replacements (we have to give global flag to do all the replacements)
let result5 = s.replace(reg, "Keshav Tayal");
console.log(result5); 