let myHeros = ["thor", "spiderMan"];

let heroPower = {
  thor: "thunder",
  spiderMan: "sling",

  getSpiderPower: () => {
    console.log(`spiderMan power is ${this.spiderMan}`);
  },
  getThorPower: () => {
    console.log(`thor power is ${this.thor}`);
  },
};

// Object.prototype.Pwn = function () {
//   console.log("Pawan's email is Pwnmhjn@22gmail.com");
// };

Array.prototype.heyPwn = () => {
  console.log("Hey pawan");
};

// myHeros.heyPwn();

//inheritance

const User = {
  firstName: "Pawan",
  lastName: "Mahajan",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Pawan      ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`${this.trim()}`);
  console.log(`true length is:${this.trim().length}`);
};

anotherUserName.trueLength();

"pawanMahajan   ".trueLength();
