console.log("object prototypes");

const proto = {
    slogan: function(){
        return "This is the best company";
    },
    changeName: function(newName){
    this.name = newName;
    }
}

const keshav = Object.create(proto);
keshav.name = "Keshav";
keshav.role = "Programmer";
keshav.changeName("Keshav2");
// console.log(keshav);

//we can above write code in differet syntax
const keshav1 = Object.create(proto, {
    name: {value: "Keshav", writable: true},//writable: true helps to change the values
    role: {value: "Programmer"},
});
keshav1.changeName("coder");
// console.log(keshav1);

//Employee constructor

function employee(name, sallary, experiance){
    this.name = name;
    this.sallary = sallary;
    this.experiance = experiance;
}
//slogan
employee.prototype.slogan = function(){
    return `This is the best company. Regards ${this.name}`;
};
//create an object from this constructor now
let keshavObj = new employee("Keshav", 5000, "2Years" );
console.log(keshavObj.slogan());

//Programmer
function Programmer(name, sallary, experiance, language){
    employee.call(this, name, sallary, experiance)
    this.language = language;
}

// WE will inherit the prototype of employee
Programmer.prototype = Object.create(employee.prototype);

//Manually set constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 3000, "2Years", "Javascript")
console.log(rohan);