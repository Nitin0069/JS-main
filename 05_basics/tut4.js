 const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
 }

 // for in 
 //for (const i in myObj) {
    //console.log(myObj[i] + " bada " + (i));
// }

 for (const [i ] of Object.entries(myObj)) {
    console.log(myObj[i]);
 }






 const arr = ["A", "b", "c", "d"]

 for (const i in arr) {
   // console.log(i);
    // console.log(arr[i]);

 }

 const arrr = ["JavaScript", "React", "Node"];

for (const index in arrr) {
  //  console.log(index, arrr[index]);
}