   // for of

  //   {} {}
    // ["" , "", ""]
   //  [{}, {}, {}]

   const arr = [1,2,3,4,5]
   
   
   for (const i of arr) {
 //    console.log(i);
   }
let  name = "hi nitu ji";

for (const  i of name) {
    if(i == " "){
        continue;
    }
 //   console.log(i);
}


//Maps

const map =  new Map()

map.set("IN", "India");
map.set("US" , "AMERICA");
map.set("FR" , "France");

 // console.log(map);
 
for (const i of map ) {
   //     console.log(i);
}
for (const [i , j ] of map) {
   // console.log(i , "-" , j);
}

const myObj = {
    "game1" : "Nfs",
    "game2" : "spider",
    "game3" : "nituman" ,
}

for (const i in myObj) {
    console.log(i);
}  