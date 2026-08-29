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

class User {
    constructor (email,password) {
        this.email = email;
        this.password = password;    
}
get password () {
    return this.password.toUpperCase()

}
}
const hitesh = new User ("h@hitesh", "abc")
console.log(hitesh.password)