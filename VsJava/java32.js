console.log("Learn about Maps");

//Maps in Javascript
const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function () { };

//Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is an empty obj');
myMap.set(key3, 'This is an empty function');
console.log(myMap);

//Getting the values from the map
let value1 = myMap.get(key1);
console.log(value1);

//Getting the size of the map
console.log(myMap.size);

//We can use for of loop to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}

//Get only keys
for(let key of myMap.keys()){
    console.log('key is ', key);       
}


//Get only values
for(let value of myMap.values()){
    console.log('value is ', value);       
}

//Looping by for each loop
myMap.forEach((value, key)=>{
    console.log('key is', key);
    console.log('value is', value);
})

//Converting keys of map to array
let myKeyArray = Array.from(myMap.keys());
console.log('Converted keys into arrays', myKeyArray);

//Converting map to array
myValueArray = Array.from(myMap.values());
console.log('Converted values to arrays', myValueArray);

//Converting the whole map to array
myArray = Array.from(myMap);
console.log('Converted map into array', myArray);