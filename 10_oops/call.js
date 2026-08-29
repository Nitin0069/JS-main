let name = {
    firstname: "nitin",
    lastname: "rana",
   
    }
let printfull = function () {
        console.log(this.firstname + " " + this.lastname) 
    }




let name2 = {
    firstname: "nakshu",
    lastname: "rana"
}
//name.printfull.call(name2);
printfull.call(name2);



//apply
 let prit = printfull.bind(name);
 prit();