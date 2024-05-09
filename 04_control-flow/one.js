//if

const isUserLoggedIn = true;
const score = 100;

// if (score == 100) {
//   const power = "fly";
//   let power = "fly";
//   console.log(`Users Power is ${power}`);
// }
// console.log(`Users Power is ${power}`);

//shorthand notation

// const balance = 1000;
// const balance = 1000;

// // if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//   console.log("less then");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less then 900");
// } else {
//   console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

// if (userLoggedIn && debitCard) {
//   console.log("allow to buy course");
// }

if (LoggedInFromEmail || LoggedInFromGoogle) {
  console.log("User Logged In");
}
