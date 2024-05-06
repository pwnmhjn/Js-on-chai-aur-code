// #Primitive DataTypes


//7 types: String,Number,Boolean,null,Undefined,NaN,Symbol,BigInt

const score = 100;
const scorevalue = 100.3
 
const isLoggedIn = false
const outSideTemp = null
let UserEmail;

const id = Symbol("1234")
const anotherId = Symbol ("1234")

// console.log(id)
// console.log(anotherId)

// console.log(id==anotherId)

const bigNumber = 1234567892172837836518928738n

// console.log(typeof(bigNumber))

//Reference DataTypes (Non Primitive)
//Array, Objects,Functions


const heros = ["shaktiman","nagraj","doga"]

const profile = {
    name:"Pawan",
    age:26,
    town:"Pansemal"
}

const myfunction = function(){
console.log("Hello World")
}

console.log(typeof(myfunction))
