class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
  static createId() {
    return "1234";
  }
}

// const pwn = new User("Pawan Mahajan");
// console.log(pwn.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const newTeacher = new Teacher("Pawan Mahajan", "Pwnmhjn@gmail.com");
newTeacher.logMe();
console.log(newTeacher.createId());
