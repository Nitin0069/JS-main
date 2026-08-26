    // console.log("nitin")
    // let name = "hitesh"
    // let mychannel = "chaii     "

const { use } = require("react")

    // console.log(name.length);
    // console.log(mychannel.length)

  /*  let myHero = ["thor", "spiderman"]
    let heroPower = {
        thor: "hammer",
        spiderman: "sling",

         
    }
        */
/*
    Object.prototype.exp = function () {
        console.log(`spiderman power is ${this.spiderman}`)
    }


    Array.prototype.hey = function () {
        console.log("hey nitin")
    }

     //heroPower.exp()

     myHero.exp();
     myHero.hey();
heroPower.exp();
  //  heroPower.hey()
*/
 


// inheritance
/*

class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    introduce () {
        console.log(`My name is ${this.name}`);
    }
}
class Student extends Person {

    study () {
        console.log(`${this.name} is studying`);

    }
}
const student = new Student("Nitin", 21)
console.log(student)
student.study()
console.log(student.name);
student.introduce();
student.study();

*/
const user = {
    name: "Niitn",
    email: "nitin4"
}
 

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable: false
}
 
const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true
}

/* 
user.__proto__ = teacher;
teacher.__proto__ = teachingSupport;
teachingSupport.__proto__ = TAsupport;

console.log(TAsupport.isAvailable);
*/

//modern way

Object.setPrototypeOf(user, teacher)
//Object.setPrototypeOf(TAsupport,user)
Object.setPrototypeOf(user,TAsupport)

console.log(user.makeVideo)
console.log(TAsupport.name)
