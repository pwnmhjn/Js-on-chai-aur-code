const myNumb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNumb = myNumb.map((e) => e + 10);

const newNumb = myNumb
  .map((n) => n * 10)
  .map((n) => n + 1)
  .filter((n) => n >= 40);

console.log(newNumb);
