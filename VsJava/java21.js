console.log ("Learn about fetch api");

//button with id myBtn
let myBtn = document.getElementById("myBtn");

//div with id content
let content = document.getElementById("content");

// function getData(){
//     url = 'keshav2.txt';
//     //fetch is asynchronous ie. it will run in background
//     fetch(url).then((response)=>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// function getData(){
//     url = 'https://api.github.com/users';
//     //fetch is asynchronous ie. it will run in background
//     //it is get request with the help of fetch api
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
function postData(){
    url = 'http://dummy.restapiexample.com/api/v1/create';
  data = '{"name":"test","salary":"123","age":"23"}';
    params = {
        method:"post",
        headers:{
            'content-type':'application/json'
        },
        body:data
        // body:JSON.stringify(data)
    }
    //By using arrow functions
    fetch(url, params).then(response=> response.json())
    .then(data=>console.log(data)
    )
}

postData();