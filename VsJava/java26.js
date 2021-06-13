console.log("Learn about regular expressions character sets");
// Character sets  -  []
let regex = /^k[a-z]shav/;// can be any character from a-z
regex = /^k[ery]shav/;//can be any character from e,r and y
regex = /^k[^ury]sha[drv]/;//can be any character except u,r and y + can be d.r and v
regex = /^k[a-zA-Z]sha[vt0-9][0-9]/;//we can apply as many character sets as we want

//Quantifiers use  - {}  
regex = /kes{1}hav/; //s can occur exactly 1 times
regex = /kes{0,3}hav/; //s can occur exactly 0 to 3 times

//Groupings  - we uses paranthesis for grouping  ()
regex = /(kes){2}([1-5]hav){1}/;

let str = "keshav2 Bhai";
str = "keskes4hav Bhai";
let result = regex.exec(str);
console.log("the result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches with the word ${regex.source}`);
}
else {
    console.log(`The string ${str} does not matches with the word ${regex.source}`);
}