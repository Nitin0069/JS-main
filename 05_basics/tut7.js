 // map

 const myNumers = [1,2,3,4,5,6,7,8,9,10]

 const nunu = myNumers.map( (naya) => {
    return naya * 10;
 });
 //console.log(nunu);



 const yoo = []
 const loo = myNumers.forEach( ( bada) => {
    if( bada > 1) {
        yoo.push(bada * 10)
    }
});
// console.log(yoo);

const newNums = myNumers.map( (num) => num * 10)
.map ( (num) => num + 1)
.filter( (num) => num > 30);

console.log(newNums);
 