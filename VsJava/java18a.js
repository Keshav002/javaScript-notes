console.log("learn about callback functions");

//let the responce is comming from the server
const students = [
    {name: "Keshav", subject:"c++"},
    {name: "Mohit", subject:"java"}

]
function enrollStudent(student, callback){//this callback function will call the function which is given in the argument
setTimeout(function() {
    students.push(student);
    console.log("students are enrolling");
    callback();
}, 1000);//it is time in millisecond
}
function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
    console.log("students are getting fetched");
        
    }, 2000);
}

let newStudent = {name:"Rohit", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();