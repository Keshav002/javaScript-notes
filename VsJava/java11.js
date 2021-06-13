console.log("Welcome to event handeling");
document.getElementById('heading').addEventListener('click',function(e){console.log(`You clicked the heading`);//illy mouseover
// console.log(e);
// location.href = 'code with harry.com';
let variable;
variable = e.target;
variable = e.target.className;
variable = e.target.classList;
variable =Array.from( e.target.classList);
variable = e.offsetX;//Distance from element
// variable = e.offsetY;
// variable = e.clientX;//Means distance from the edge of window
// console.log(variable);
});
// let btn = document.getElementById('btn');
// btn.addEventListener('click',funk1);
// btn.addEventListener('dblclick',funk2);
// btn.addEventListener('mousedown',funk3);//it will also consider mousewheel click and right click

// function funk1(e){
// // console.log(`Thanks`,e);
// e.preventDefault();//it prevent default submission of the form
// }
// function funk2(e){
//     console.log(`Thanks for double click`,e);
//     e.preventDefault();
//     }
//  function funk3(e){
//      console.log(`Thanks for mousedown`,e);
//       e.preventDefault();
//     }
// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("You entered no");
// })
// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("You leaved no");
// })
document.querySelector('.container').addEventListener('mousemove',function(e){
    // console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},${e.offsetX+e.offsetY})`;
    // console.log("You moved your mouse");
})
