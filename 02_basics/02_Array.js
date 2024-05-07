const marvel_heros = ["thor", "ironman","spindrman"]
const dc_heros = ["batman", "superman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

//  const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

// console.log([...marvel_heros,...dc_heros])

const anotherArr = [1,2,3,4,[5,6,7],8,[9,0,[1,2,4]]]

const real_another_arry = anotherArr.flat(Infinity)

// console.log(real_another_arry)

let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.isArray("Pawan"))
console.log(Array.from("pawan"))
console.log(Array.of(score1,score2,score3))
