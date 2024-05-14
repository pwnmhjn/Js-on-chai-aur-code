function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.prototype);
// console.log(multiplyBy5.power);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  console.log(this.score);
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
chai.increment();
