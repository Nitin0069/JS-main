//const desciptpor = Object.getOwnPropertyDescriptor(Math, "PI") 
//console.log(desciptpor)
/*

console.log(Math.PI)


Object.defineProperty(Math, "PI", {
   value: 3.14,
    writable: true,
    enumerable: true,
    configurable: true
})
Math.PI = 4;
console.log(Math.PI)

 const check = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(check);
*/

const chai  = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"))


Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
