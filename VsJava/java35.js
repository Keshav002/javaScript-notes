console.log('Learn about destructuring');

// Destructuring
let a,b;
[a,b] = [3,5];
console.log(a, b);

[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10];// In this case d will be treated as array
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Array Destructuring
({a,b,c,...d} = {a:12,b:34,c:45,d:43,e:68});
console.log(a,b,c,d);

const fruits = ['apple', 'banana', 'mangoes'];
[a,b,c] = fruits;
console.log(a,b,c);

// Object Destructuring
const laptop ={
    model:"HP",
    age:'23 Days',
    gender:'male',
    net: 1233,
    start: function(){console.log("started");}
}

const {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);
start();
