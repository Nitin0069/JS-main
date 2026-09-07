 // loop;
 // for


/*for (let index = 0; index < 10; index++ ) {
    const element = index;
    console.log(element);
}
*/
//console.log("Table of 5 is");
//for(let i = 1; i <= 10; i++) {
   

  //console.log(` 5 * ${i} = ${i * 5} ` );
 /*  console.log("5 * " + (i) + "=" + (5 * i));
 if( i == 5) {
        break;
}
}
*/

 /* for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element);
    if(element == 5) {
        console.log("5 is best");
    }
    
}  */

 /* (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i , j);
    }
    console.log(endl);
}  */

 /* for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i} ` );
    for (let j = 0; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and outer loop  ${i} `);
        console.log( i + " *" + j + "=" + (i * j));

    }
}  */

  /* for (let i = 1; i <= 3; i++) {
console.log(i);
    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }

}  */
/*
const myArray = ["a" , "b" , "c" , "d"];
for (let i = 0; i < myArray.length; i++) {
    if (i === 2);
  //  console.log(myArray);
    break;
}

*/
//break and continue
/*

for (let i = 1; i <= 20; i++) {
    if (i === 10) {
    continue;
    }
console.log(`value of i is ${i} `);
    
}
*/

/*
for (let  i = 1; i < 10; i++) {


    console.log(i * 5)

}

*/
/*
const user = ["name", "age", "subject"]


user.forEach (function (items,index,arrray ) {
    console.log(items,index,arrray)
})
*/

let number = [1,2,3,4,5,6,7,8]

const maal = number.filter (function (element) {
   // console.log(element)
    if (element % 2 != 0) {
        return element;
    }
    
})

console.log(maal)


const naya =  number.map(function (chal) {
    return chal * 2
})
console.log(naya)



let nums = [12,45,7,89,23,56]

let tanu = nums.reduce(function (acc, curr){
    if (acc > curr) {
        return acc;

    } else {
        return curr
    }
},)


console.log(tanu);











/*
for (const maal in user) {
    console.log(maal)
}
*/