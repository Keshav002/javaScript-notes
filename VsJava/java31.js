console.log("Learn about for in and for of loop");

let people = ["Keshav", "Rachit", "Yaman", "Abhishek"];

//Traditional for loop
// for (let index = 0; index < people.length; index++) {
    //     const element = people[index];
//     console.log(element);
// }

let obj = {
    name: "Keshav",
    language: "JavaScript",
    hobbies: "Watching Movies"
}
//Itrating an object using traditional for loop

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

//Itrating an object using for in loop

for(let key in obj){
    console.log(obj[key]);
}
// for in loop with string can access all the characters

let myString = "This is my string";
for(let char in myString){
    console.log(myString[char]);
}

console.log("For of loop starting")
people = ["Keshav", "Rachit", "Yaman", "Abhishek"];
for(let name of people){
    console.log(name);
}
for(let char of myString){
    console.log(char);
}


