//const tinderUser = new Object ();
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = "false";
//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Hitesh",
            lastname: "choudhary",
        }
    }
};
//console.log(regularUser.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}
//const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
      {
        id: 1,
        email: "h@gmail.com"
    },
    {
    },
    {
    }


]


users[1].email
console.log(tinderUser);



const user = {
    name: "Nitin",
    age: 21,
    city: "Hamirpur"
};

console.log(Object.keys(user));   
