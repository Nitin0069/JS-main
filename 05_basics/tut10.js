 /*const nums = [2,7,4,9,1,8];
 const naya = []
 //nums.forEach( (no,i) => {
   
   //console.log(no,i);
   }
    
 ) 
 //console.log(naya);


 const prices = [100,200,500]
 const nayaa = prices.map( (maal) => {
    return maal + 18;
 });

// console.log(nayaa); */

/*const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const puppu = nums.filter( (pops) => {
    return pops  % 2 != 0;
});
console.log(puppu);

*/


 /*const users = [
    { name: "Nitin", age: 21 },
    { name: "Rahul", age: 17 },
    { name: "Aman", age: 25 },
    { name: "Rohit", age: 16 }
];


const obj = users.filter( (nay) => nay.age )
.map( (nay) => nay.name )
console.log(obj) */

/*


const sum = [10,20,30,40]

const maal = sum.reduce( ( yoo , nooo) => {
    return yoo + nooo;
},0);
console.log(maal)






const number = [1,2,3,4,5,6]


const nakshu = number.reduce ( ( accc, currr) => {
    if ( currr > 3) {
        return accc + 1 
    }
        else  {
          return  accc ;
        }
    
},0)
console.log(nakshu);

  */


//const marks = [80, 70, 90, 60, 100];

 /*onst avgg = marks.reduce ( (no, yo) => {
return no + yo / 5;
},0)
console.log(avgg);
*/


/*
const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];


const val = fruits.reduce( (noo, yoo) => {
    if (yoo == "apple") {
        return noo + 1;
    } 
    else { 
        return noo;
    }
},0)
console.log(val);
*/



const products = [
    { name: "Laptop", category: "electronics", price: 50000 },
    { name: "Phone", category: "electronics", price: 30000 },
    { name: "Shirt", category: "clothing", price: 2000 },
    { name: "Jeans", category: "clothing", price: 3000 },
    { name: "Headphones", category: "electronics", price: 5000 }
];


const last = products.reduce( (noo , yoo) => {
if (yoo.category == "electronics" ) {
     return noo + yoo.price;
    } else {
        return noo;
    }

},0);
console.log(last);
