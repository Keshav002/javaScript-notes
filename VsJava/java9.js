console.log(`This is java9.js`);
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
console.log(cont.childNodes);
// childnode will cosider nextline as text and it will also consider comments(unnecessary things)
// to avoid this we use children
console.log(cont.children);     
let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);
// Node Types
// 1 element
// 2 Attribute
// 3 Text Node
// 8 comment
// 9 document
// 10 docType

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// // // console.log(container.firstChild);
// // // console.log(container.firstElementChild);
// // console.log(container.lastChild);
// // console.log(container.lastElementChild);
// console.log(container.childElementCount);//count of child elements
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);//it will so on give siblings
// Tengo unos hermanos trabajadores.
// Los especiales son padres.
// Nosotras estudiamos la lengua española.
// Los amigas son importantes.




