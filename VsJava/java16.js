console.log ("We study about ES6 classes");
class Employee {
    constructor(givenName, givenDivision, givenExperiance){
        this.name = givenName;
        this.division = givenDivision;
        this.experiance = givenExperiance

    }
    slogan(){
        return `I am ${this.name} and this company is best`;
    }
    joining(){
     return 2020 - this.experiance;
    }
    static add(a, b){
        return a+b;
    }
}
class Programmer extends Employee{
    constructor(givenName, givenDivision, givenExperiance, language){
        super(givenName, givenDivision, givenExperiance);
        this.language = language;
    }
 favLanguage(){
        if(this.language == 'Python'){
            return 'Python';
        }
        else{
            return 'Javascript';
        }
    }
}
// keshav = new Employee("Keshav", 2, 15);
// console.log(keshav);
// console.log(keshav.joining());
// console.log(Employee.add(2, 3));//with the help of static we can use function without creating object. We cant use this kewword with static functions
rohan = new Programmer("Rohan", "Lays", 5, "c++");
console.log(rohan);
console.log(rohan.favLanguage());