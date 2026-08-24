// reduce
const myNums = [1,2,3]

 // const total = myNums.reduce( function (acc, curr)  {
   // return acc + curr
 //  },6);
 // console.log(total);

 const total = myNums.reduce( (acc, cur) => acc + cur , 6 );
 console.log(total);


const neww = [];
const naya = myNums.forEach(  (index)  => {
    if ( i >= 2) {
        neww.push(index + index)
    }
});
console.log(naya)



  

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);