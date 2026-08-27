class User {
    constructor (username) {
        this.username = username;
    }

    logMe () {
        console.log(`Username: ${this.username}`)
    }
     static createId () {
return '123'
    }

}

const hitesh = new User ("hitesh")
console.log(hitesh);
hitesh.logMe();

console.log(User.createId())
/*
class Teacher extends User {
    constructor(username, email) {
        super(username)
this.email = email;
    }
}

const iphone = new Teacher ("iphone", "i@gmail")
console.log(iphone);
iphone.logMe();
*/