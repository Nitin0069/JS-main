    // console.log("nitin")
    // let name = "hitesh"
    // let mychannel = "chaii     "

    // console.log(name.length);
    // console.log(mychannel.length)

    let myHero = ["thor", "spiderman"]
    let heroPower = {
        thor: "hammer",
        spiderman: "sling",

         
    }

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