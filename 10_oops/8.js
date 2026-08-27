class User {
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;

    }  
    encryptPassword () {
        return `${this.password} abc `
    }
changeUsername () {
    return `${this.username.toUpperCase()}`
}

}

const chai = new User ("chai", "chai@gmail.com", "123" )
const pani = new User ("pani", "pani@gmail.com", "456")
console.log(chai)
console.log(chai.encryptPassword())
console.log(pani);

    console.log(pani.encryptPassword())
    console.log(chai.changeUsername())
//console.log(chai.encryptPassword())