 const parent =  document.querySelector('.parent')
console.log(parent)
console.log(parent.children)

//const c = parent.children;
/*const a = Array.from(c)
a.forEach( function (l) {
   // console.log(l);
 console.log(l.innerHTML);
}); */


console.log(parent.children[1].innerHTML);

for(let  i = 0; i < parent.children.length; i++) {
 console.log(parent.children[i].innerHTML);
}
parent.children[1].style.backgroundColor = 'red';

parent.lastElementChild.style.backgroundColor =  'pink'


console.log(document.querySelector('.day'))
const p = document.querySelector('.day')
console.log(p.parentElement);
