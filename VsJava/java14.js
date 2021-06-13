console.log("we learn about object oriented js");
//object literals for creating objects.
let car = {
    name: 'maruti 800',
    topSpeed: 89,
    run: function () {
        console.log("Car is running");
    }
}
//Already read about constructors like:
// new Date();

// creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running at the speed of ${this.topSpeed}`);
    }
    this.analyse = function () {
        console.log(`This car is slower by ${360 - this.topSpeed}Km/h than ferrari`);
    }
}
car1 = new GeneralCar('Nissan', 200);
car2 = new GeneralCar('Ferarri', 360);
car3 = new GeneralCar('Audi', 320);
console.log(car2);

//object prototypes
console.log("welcome to object prototypes");
//object literal : object.prototype
let obj = {
    name : "Keshav",
    channel : "code with harry",
    addres : "Earth"
}

function Obj(givenName, ch){
    this.name = givenName;
    this.channel = ch;
}

Obj.prototype.getName = function(){
    return obj2;
}

// Obj.prototype.setName = function (newName){
//     this.name = newName;
// }
let obj2 = new Obj("Rohan Das", 'BB');
console.log(obj2);
