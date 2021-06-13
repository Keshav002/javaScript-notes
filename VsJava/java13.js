console.log("maths objects");
let x = 3;
let y = 6;
let z;
z = x+y;
z = x-y;
z = x*y;
z = x/y;

// Exploring the maths object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.ceil(5.6);
z = Math.round(5.4);//highest integer near to the number
z = Math.floor;//lowest integer near to the number
z = Math.abs(-5);//gives positive value
z = Math.sqrt(49);//gives square root
z = Math.pow(2,4);
z = Math.min(2,4,6,10);//gives smaller number
z = Math.max(34,67,87,23,64);
z = Math.random();//gives random no. between 0 and 1
z =100* Math.random();//gives random no. between 0 and 100
//WE can decide owr own limit of random numbers
z = Math.ceil(50+(100-50)*Math.random());//give integers between 50 and 100
console.log(z);
//date objects
console.log("date objects");
let today = new Date();
console.log(today);
console.log(typeof today);
let otherDate = new Date('02-22-2002 08:23:45');
//  otherDate = new Date('feb 22 2001');
 let a;
 a = otherDate.getDay();
 a = otherDate.getDate();
 a = otherDate.getMinutes();
 a = otherDate.getSeconds();
 a = otherDate.getHours();
a = otherDate.getTime();
a = today.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();

console.log(a);
otherDate.setDate(24);
otherDate.setMonth(1);
otherDate.setFullYear(2000);
otherDate.setHours(5);
otherDate.setMinutes(36);
otherDate.setSeconds(27);

console.log(otherDate);
