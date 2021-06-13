console.log("I will study type conversion");
let num = 34;
console.log(num, (typeof num));
// we can convert it by using String() function
let strnum = String(34);
console.log(num, (typeof strnum));

let date = new Date();
console.log(date, (typeof date));

let array = [1,2,3,4,5];
console.log(array.length, array, (typeof array));

let strarray = String([1,2,3,4,5]);
console.log(strarray.length, strarray, (typeof strarray));

//We can convert number into string with the help of tostring also
let i = 8;
console.log(i,i.toString());

let j = new Date();
console.log(j, "string date " + j.toString());
//We can convert string value into number by Number() function;
//We can convert string into int by parseInt() function;
//We can convert string into float by parseFloat() function;

let number = parseFloat("34");
console.log(number.toFixed(3), (typeof number));
// tofixed roundoff the number
console.log("I will study type coercion");
let mystr = "700";
let mynum = 12;
console.log(mystr + mynum);

