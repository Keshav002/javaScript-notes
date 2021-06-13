console.log("Learn about storage");
//local storage is permanent
// add keyvalue in local storage
localStorage.setItem('Name','Keshav');
localStorage.setItem('Name2','Rohan');
localStorage.clear();
// To clear a particular key-value pair from storage
localStorage.removeItem("Name2");
// reterive items from local storage
let name = localStorage.getItem('Name');
console.log(name);
let impArray = ['angur', 'seb', 'kela'];
localStorage.setItem('fruits', JSON.stringify(impArray));//it takes object(array and returns string)
name = JSON.parse(localStorage.getItem('fruits'));//it takes string and returns object
console.log(name);

//session storage is temporary
sessionStorage.setItem('sName','Keshav');
sessionStorage.setItem('sName2','Rohan');
sessionStorage.setItem('sfruits', JSON.stringify(impArray));//it takes object(array and returns string)
name = JSON.parse(localStorage.getItem('fruits'));//it takes string and returns object
console.log(name);