const tinderUser = new Object({

})

tinderUser.id = "1234",
tinderUser.name = "Pawan",
tinderUser.isLoggedIn = false
// console.log(tinderUser)

// const regUser = {
//     email:"somethig@gmail.com",
//     fullname:{
//         name:"pawan",
//         surname:"mahajan"
//     }
// }

// console.log(regUser.fullname.name)

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = Object.assign({},obj1,obj2)

// const obj3 = {...obj1,...obj2}

// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLogged"))

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

const {courseInstructor:instructor} = course

console.log(instructor)

//API

// {
//     "name":"pawan",
//     "coursename":"js in hindi",
//     "price":"free"
// }