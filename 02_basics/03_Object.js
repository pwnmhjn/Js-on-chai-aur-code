//singleton

//object literals
//Object.create
const mySmbl = Symbol("key1")

const jsUser = {
name:"pawan",
"full name":"Pawan Mahajan",
age:"26",
[mySmbl]:"something",
location:"pansemal",
email:"pwnmhjn@gmail.com",
isLoggedId:false,
lastLoginDay:["Monday","Saturday"]
}

jsUser.greeting = function(){
    console.log("hello js users")
}
jsUser.greeting2 = function(){
    console.log(`hellow js users ${this["full name"]}`)
}

// // console.log(jsUser.name)
// // console.log(jsUser["name"])
// // console.log(jsUser["full name"])
// console.log(typeof jsUser[mySmbl])
// Object.freeze(jsUser)
jsUser.email = "mhjnpwn@gmail.com"
console.log(jsUser.greeting2())
console.log(jsUser.greeting())