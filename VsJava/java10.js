console.log('welcome to java10.js');
let element = document.createElement('li');

element.className = 'childul';
element.id = 'createdLi';

let text = document.createTextNode('this is text node');
element.appendChild(text);
element.setAttribute('title','My Title');
// element.innerText = 'Created by Keshav'
// element.innerHTML = '<b>Created by Keshav</b>'
let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tNode = document.createTextNode('this text node is for elem2');
elem2.appendChild(tNode);
element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));
let le = document.getElementById('lui');
myul.removeChild(le);
let pr = elem2.getAttribute('class');
elem2.removeAttribute('id');
pr = elem2.hasAttribute('id');
console.log(elem2,pr);
let a = document.createElement('a');
let node = document.createTextNode('Go to code with harry');
a.appendChild(node);
a.href = "https://www.codewithharry.com";
let div = document.querySelector('div.yes');
div.appendChild(a);
console.log(a);










