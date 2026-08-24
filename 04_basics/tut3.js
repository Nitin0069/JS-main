 // truthy value and falsy value

 const userEmail = [ ];
 if (userEmail) {
    console.log("goT");
 }
 else {
    console.log("dont have");
 }
 console.log(userEmail.length);


 //falsy value

 //    false , 0 , -0 ,  0n, "", null ,undefined, Nan

 //truthy "0" ,"false", " ", [], {}, function() {} 


  let arr = [];
 if (arr.length === 0) {
    console.log("array not");
 }



const user = {};
if (Object.keys(user).length === 0) {
   console.log("object empty");
}
