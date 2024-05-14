class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`new course added by ${this.username}`);
  }
}

const teacherOne = new Teacher("pwnmhjn", "pwnmhjn@22gmail.com", "1234567890");

teacherOne.addCourse();
teacherOne.logMe();

console.log(teacherOne instanceof User);
