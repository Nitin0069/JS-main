  class User {
    constructor(username) {
        this.username = username
    } 

logMe() {
    console.log(`username is ${this.username}`)
}

  }

   class Teacher extends User {
    constructor (username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse () {
        console.log(`A new course was added by ${this.username}`)
    }
   }
   const chal = new Teacher("nitin", "nitin@gmail", "123")
   //console.log(chal)
   chal.addCourse()
   const masalaChai = new User("masalachai")
   masalaChai.logMe ()