const coding = ["js", "ruby", "c++", "java", "python"];

// const values = coding.forEach((e) => {
//   return e;
// });

// console.log(values);

//do not return values

const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumb = myNumbs.filter((num) => {
//   return num > 4;
// });

// const newNumb = [];
// const bin = [];

// myNumbs.forEach((num) => {
//   if (num > 5) {
//     newNumb.push(num);
//   } else {
//     bin.push(num);
//   }
// });
// console.log(newNumb);
// console.log(bin);
// console.log(myNumbs);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks1 = books.filter((bk) => bk.genre == "Fiction");
const userBooks2 = books.filter(
  (bk) => bk.publish > 2009 && bk.genre == "Science"
);

// console.log(userBooks1);
console.log(userBooks2);
