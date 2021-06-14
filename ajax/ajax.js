console.log("Learn about ajax");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("You have clicked the button");
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    // xhr.open('GET', 'keshav.txt', true);//get means we need only page. post means we are sending data too.
    // true means asynchronous programming
    //what to do on progress (optional). We can also put rotating progress wheel in this function
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);//it is for post request
    xhr.getResponseHeader('content-type', 'application/json');
    xhr.onprogress = function(){
        console.log("On progress");
    }
    // xhr.onreadystatechange = function(){
    //     console.log("ready state is", xhr.readyState);//there are 5 states it will show progress when states changes
    // }
    //what to do responce is ready
    xhr.onload = function(){
        if(this.status === 200){// this 200 means request success(ok)
            console.log(this.responseText);
        }
        else{
            console.log("Some error occured");
        }
      
    }
    paramet = `{"name":"test12","salarry":"1200","age":"23"}`;
    xhr.send(paramet);//send request to the server

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandeler)

function popHandeler(){
    console.log("You have clicked the button of pophandeler");
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);//get means we need only page. post means we are sending data too.
    // true means asynchronous programming
    xhr.onload = function () {
        if(this.status === 200){
           let obj = JSON.parse(this.responseText);
        //    let b = JSON.stringify(obj);
           console.log(obj);
           let list = document.getElementById('list');
           str = "";
           for (key in obj)
           {
               str += `<li> ${obj[key]} </li>`;
           }
           list.innerHTML = str;
        }
        else{
            console.log("Some error occured");
        }
      
    }
    //send the request
    xhr.send();
    console.log("We are done!");
    
}