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