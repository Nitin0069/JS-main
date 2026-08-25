 
 /*
 function multiply5 (num) {
    return num * 5
 }
multiply5.power = "budhu"

 const num = multiply5(5);
console.log(num);
console.log(multiply5.power)
console.log(multiply5.prototype) 


function createUser (username, score) {
}
*/
/*
function createe (username,roll) {
    this.createe = createe;
this.roll = roll;
}

createe.prototype.aage = function () {
    this.roll++
}
const chai = createe("chai", 69)
const tea = createe("tea", 250)
chai.aage();
console.log(createe.prototype.aage )
*/

function createUsr (username, kaam) {
    this.username = username
    this.kaam = kaam

}

createUsr.prototype.chal = function () {
    this.kaam++
}
createUsr.prototype.printMe = function() {
    console.log(`price is ${this.kaam}`)
}
const chai = new createUsr("chai", 25)
const tea = new createUsr("tea", 250)

chai.printMe()
chai.chal()

