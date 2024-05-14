// const user = {
//   username: "pwnmhjn",
//   loginCount: 5,
//   signedIn: true,
//   getUserDetails: function () {
//     // console.log("got user detail from database");
//     // console.log(`${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function User(username, email, logInCount) {
  this.username = username;
  this.email = email;
  this.logInCount = logInCount;
  this.greetings = function () {
    console.log(`welcome ${this.username}`);
  };

  return this;
}

const userOne = new User("pwnmhjn", "mhjnpwnm@gmail.com", 5);
const userTwo = new User("mhjnpwn", "pwnmhjn@gmail.com", 5);
console.log(userTwo.constructor);

//1-- New keyword create a empty object (Instance)
// 2-- New keyword called constructor function
//it wraps all argument and returns
//3 -- this keyword inside the construction function inject all
// all arguments in constructor function
