const marvel_heroes = ["thor", "Iron", "spider"];
const dc_heroes = ["super", "flash", "bat"];
 

//marvel_heroes.push(dc_heroes);
 //console.log(marvel_heroes[3][1]);

//const heroes = marvel_heroes.concat(dc_heroes);
//console.log(heroes[1]);
//const hero = [...marvel_heroes, ...dc_heroes];
//console.log(hero);


const arr = [1,2,3, [4,5,6] , [6,7 ,[4,5]]];
const real = arr.flat(Infinity);
console.log(real);

console.log(Array.isArray([1,3,4]));
console.log(Array.from("nitin"));

let score1 = 100;
let score3 = 200;
let score2 = 300;
console.log(Array.of(score1, score2, score3));

