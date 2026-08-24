function sayMyName() {
    console.log("Nitin");
        console.log("Nitin");
    console.log("Nitin");
    console.log("Nitin");
    console.log("Nitin");
}

sayMyName();



  /*function add ( ) {
    console.log(3+4);
};
add();

function addi (num1, num2) {
    console.log(num1 + num2)
}

addi(9,3); */

function add2 (num1, num2) {
   // let result = num1 + num2 
    return num1 + num2;
}

//const reesult = add2(3,5)
//console.log("Result: ", add2()); 

//function add3 (numm1, numm2) { 222222222222222222222222222
 //  console.log(numm1 + numm2);
//}

//const result = add3(9,5)222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
//console.log("Result: ", result);

function login(username) {
    if (username === undefined) {
   console.log("Please enter a username")
    }
    return ` ${username}just logged in `
}

//console.log(login("hitesh"));
console.log(login());
