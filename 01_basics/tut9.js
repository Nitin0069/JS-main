/*let myDate = new Date();
console.log(myDate.toString());
console.log(typeof myDate);

//  let myCreateDate = new Date(2023, 0 , 23);
let myCreateDate = new Date("01-14-2024");

console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();


 console.log(myTimeStamp); 
 console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));


console.log("badmashi");


let today = new Date();
console.log(today);   */






let today = new Date();
console.log(today.toLocaleString());
console.log(today.toDateString());
console.log(today);

let bday = new Date(2004, 9, 25);
console.log(bday.toLocaleDateString());


console.log(Date.now());
 // console.log(Math.floor(Date.now() / 1000));
 console.log(Math.floor(Date.now() / 1000));


 let now = new Date();

console.log(now.getSeconds());
