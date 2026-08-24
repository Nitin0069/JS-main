
const mySym = Symbol("key1")

// object literals
const JsUser = {
name: "Nitin",
[mySym]: "mykey1",
roll: 1,
1: 34

};
 //Object.freeze(JsUser);
JsUser.name = "rana";
JsUser.name = "bansi";

let key = "roll";
console.log(JsUser["name"],JsUser["roll"],JsUser[1]);
console.log(JsUser[key]);
console.log(typeof JsUser[mySym]);
console.log(typeof mySym);
console.log(JsUser);
 
//Object.freeze(JsUser);
JsUser.greeting = function() {
    console.log("Hello js user");
}
JsUser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



// object literals
/*const JsUser = {
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 
*/






