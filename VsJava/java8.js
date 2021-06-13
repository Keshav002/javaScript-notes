console.log('Welcome to tut 12.js');
let a = document;
a = document.all;
a = document.body;
a = document.forms[0];
Array.from(a).forEach(function(element){
    console.log(element);
})
// a = document.links[0];
// use document.images and document.scripts and print the list of images and scripts on an html page
a=document.scripts;
// a=document.images;
console.log(a);
/* element selectors
There are two types of element selectors
1 single element selector
1 multiple element selector
*/
let b=document.getElementById('myfirst');
// b=b.className;
// b=b.childNodes;
// b = b.parentNode;
b.style.color='red';
// b.innerText='My name is Keshav';
b.innerHTML='<b>My name is Keshav</b>';
// console.log(b.innerHTML);
// these all get only first element for their respective tags
let sel = document.querySelector('#myfirst');
//sel =  document.querySelector('.child');
// sel = document.querySelector('b');
sel = document.querySelector('div');
sel.style.color = "green";
// console.log(sel);
// multi element selector
let elems = document.getElementsByClassName('child');
console.log(elems[2]);
elems = document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div');
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = "teal";
}
// Array.from(elems).forEach(element => {console.log(element);
// element.style.color = "blue";
// });
