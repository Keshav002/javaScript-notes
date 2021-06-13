console.log("Learn about shorthand character");

//character cloasses
let regex = /\whav /;//word character  _ or number or alphabet
regex = /\w+hav/;//it means one or more than one word characters
regex = /\Wbhai/;    //no word character  ( %, #, $, @, space )
regex = /\W+bhai/;   //more than one no word character  ( %, #, $, @, space )
regex = /number \d999/;    //\dmeans digit
regex = /number \d+/;      //\d+ means more tham one digit
regex = /\D999/;           //it is for non digit
regex = /\D+999/;          //it is for more than one non digit
regex = /\ska number/;     //Match whitespace characters
regex = /\s+ka number/;     //Match one or more than one whitespace characters
regex = /\Ska number/;     //Match more one non whitespace characters
regex = /\S+ka number/;     //Match oe or more than one non whitespace characters
regex = /aver\b/;           // it is for word boundry(ie there is a space after that word)

//Assertions
regex = /k(?=e)/;  //if I want to match e just after k
regex = /k(?!e)/;  //if I do not want to match e just after k 


str = "k3_es2haver#$%bhaikea number 23456999keshav99934";


let result = regex.exec(str);
console.log("the result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches with the word ${regex.source}`);
}
else {
    console.log(`The string ${str} does not matches with the word ${regex.source}`);
}
