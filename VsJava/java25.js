console.log("learn about metacharacters");

let regex = /keshav/;
// lets look into metacharacters symbols
regex = /^ke/;//^this symbol means starts with
regex = /av$/;//$this symbol in the end means ends with
regex = /k.shav/;//.means there is one character at the place of dot(.)
regex = /k*shav/;//.means there is 0 or more characters character at the place of dot(*)
regex = /ke?sha?v/;//? after character means that is opional characters
regex = /k\*eshav/;// it means * is not metacharacter 

let str = "keshav is a good boy keshav is the best";
let result = regex.exec(str);
console.log("the result from exec is ", result);

if(regex.test(str)){
console.log(`The string ${str} matches with the word ${regex.source}`);
}
else{
console.log(`The string ${str} does not matches with the word ${regex.source}`);
}