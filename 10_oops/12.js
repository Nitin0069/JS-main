/*class User {
    constructor (email, password) {
        this.email = email;
        this._password = password
        
    }
    get password () {
return this._password.toUpperCase( )
    }
}
const hitesh = new User("hitesh@gmaol", "abc");

console.log(hitesh.password)

*/
/*
class User {
    constructor (email,password) {
        this.email = email;
        this.password = password;    
}
get password () {
    return this.password.toUpperCase()
}

set password(value) {
    this.password = value;
}
}
const hitesh = new User ("h@hitesh", "abc")
console.log(hitesh.password)
*/


/*
class User {
    constructor (name) {
        this.name = name
    }
    get name() {
        return this.lname
    }
    set name(exp) {
        if(exp.length < 3) {
            console.log("name is too short" )
            return
        } else {

        
        this.lname = exp
        }
    }
}
const nitu = new User ("n");
console.log(nitu.name)

*/
/*
class User {
    constructor (email, password) {
        this.email = email;
        this.password = password
    }

get email () {
    return this._email
}
set email (yo){
    this._email = yo.toUpperCase();
}

 get password() {
    return this._password
 }
 set password(value) {
    this._password = value.toUpperCase ()
 }
}




const hitesh = new User("hitesh@", "abc")
console.log(hitesh.password);
console.log(hitesh.email)

*/




/*
class  naam {
constructor(name){
    this.name = name

}
get name () {
    return this._name
}
set name (value) {
    this._name = value.toUpperCase()
}
}

const chalo = new naam ("nitin");
console.log(chalo.name);
chalo.name = "nakshu"
console.log(chalo.name)
*/


function user  (email, password) {
this._email = email;
this._password = password;

Object.defineProperty (this, "email", {
    get: function () {
        return this._email.toUpperCase()
    },
    set: function (value) {
this._email = value
    }

})

}
const obj = new user ("chal");
console.log(obj.email);