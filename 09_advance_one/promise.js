// const promise1 = new Promise((resolve, reject) => {
//   //Do an async call
//   //cryptograph
//   //network
//   setTimeout(() => {
//     console.log("Async task is complete ");
//     resolve();
//   }, 1000);
// });

// promise1.then(() => {
//   console.log("Promise consumed");
// });

// ============================================================

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2 ");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("promise 2 is resolve");
// });
// ===============================================================
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "pwnmhjn", email: "pwnmhjn22@gmail.com" });
//     reject({ error: true });
//   }, 1000);
// });
// promise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// ================================================================

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "pwnmhjn", email: "pwnmhjn22@gmail.com" });
//     } else {
//       reject({ error: true });
//     }
//   }, 1000);
// });

// const username = promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The Promise is either resolve or rejected");
//   });

// // console.log(username);

// ///===================================

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "pwnmhjn", email: "pwnmhjn22@gmail.com" });
//     } else {
//       reject({ error: "Rejected" });
//     }
//   }, 1000);
// });

// const consumePromise5 = async () => {
//   try {
//     const data = await promise5;
//     console.log("resolve");
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const consumePromise5 = async () => {
//   const data = await promise5;
//   return data;
// };

// consumePromise5()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// consumePromise5()
//   .then((data) => {
//     console.log(data);
//   })
//   .then((err) => console.log(err));

// async function getUser() {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getUser();

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
