function SetUserName(username) {
  //complex DB Calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUserName.call(this, username);

  this.password = password;
  this.email = email;
}

const newUser = new createUser("Pawan", "pwnmhjn@gmail.com", "1234");

console.log(newUser);
