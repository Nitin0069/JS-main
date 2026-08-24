 function calculateCartPrice (...num1) {
    return num1
 };

 console.log(calculateCartPrice(300,499,388));

   const user = {
    username: "Nitin",
    roll: 62222222222222
   };

   function objecttt (check) {
    console.log(`user is ${check.username} and roll is ${check.roll} `)
   }
    //objecttt(user);
   objecttt({
    username: "sam",
    roll : 399
   })






    const mobile = {
        brand: "samsung",
        price : 2000
    }
    function showMobile(anyobject) {
        console.log(anyobject.brand);
        console.log(anyobject.price);
    }
   showMobile({
    brand: "samsung",
        price : 2000
   })




   const myNewArray = [200,300,400,500]

   function returnSecondValue (getArray) {
    return getArray
   }
   //console.log(returnSecondValue(myNewArray));
      console.log(returnSecondValue([200,300,400,500]));





























      function sayHello () {
        console.log("Hello World");
      }
      sayHello();


      function add (num1, num2) {
        return num1 + num2;
      }
      
     // add (6,3);
      console.log(add(6,3));



      function login (username) {
        if (!username) {
         return ` ${username} just logged in `;
      }
    }
      console.log(login("hitesh"));


      const userrr = {
        username: "Nitin",
        pricee: 199
      };
      function handle (any) {
        console.log(any.username);
        console.log(any.pricee);
      }
      handle(userrr);


      const myyoo = [100,200,300,400]
      function returnu(gett) {
        return gett[0]
      }
      console.log(returnu(myyoo));





 