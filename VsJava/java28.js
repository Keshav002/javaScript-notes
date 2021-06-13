console.log("learn about iterators");
//Iterators

function fruitsIterator(values) {
    let nextIndex = 0;
    //we will return object
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
const myArray = ['Apples', 'Grapes', 'Oranges', 'Banana'];
console.log("My array is ", myArray);

//Using the Iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
