const user = {
    username: "Pawan",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username},wellcome to website`);
        console.log(this)
    }

};

// console.log(user.welcomeMessage())
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()

// (function chai() {
//     console.log(`Db connected`);
// })();


((name)=>{
    console.log(`wellcome to chai and code ${name}`)
})("Pawan");



