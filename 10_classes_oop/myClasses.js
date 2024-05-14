// //ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const Pwn = new User("pwnmhjn", "pwnmhjn@gmail.com", "123");

// console.log(Pwn.encryptPassword());
// console.log(Pwn.changeUserName());

////Behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const pwn = new User("pwnmhjn", "pwnmhjn@gmail.com", "1234");
console.log(pwn.encryptPassword());
console.log(pwn.changeUserName());
