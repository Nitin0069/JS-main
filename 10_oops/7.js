 /*function outer() {
    function inner () {
        console.log(this)
    }
 inner(); 
 }

outer();
*/
function SetUsername (username) {
console.log("chala toh hai")
this.username = username
}
function createUser(username, email, password) {
    SetUsername.call(this, username)
    this.email = email;
    this.password = password;
}
const chai = new createUser("chaii", "chai@google.com", "222")
console.log(chai)
 




function introduce (age,city) {
    console.log(this.name)
    console.log(age);
    console.log(city)

}
const person = {
    name: "niitn"
}
introduce.call(person, 22, "delhi")
