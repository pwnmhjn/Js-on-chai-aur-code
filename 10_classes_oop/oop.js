const user = {
  username: "pwnmhjn",
  loginCount: 5,
  signedIn: true,
  getUserDetails: () => {
    console.log("got user detail from database");
  },
};

console.log(user);
console.log(user.getUserDetails());
