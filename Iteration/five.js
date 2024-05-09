const coding = ["js", "ruby", "c++", "java", "python"];

coding.forEach((e) => console.log(e));

// coding.forEach((element) => {
//   console.log(element);
// });

function printMe(e) {
  console.log(e);
}

// coding.forEach(printMe);

// coding.forEach((e, index, arr) => {
//   console.log(e, index, arr);
// });

const MyCoding = [
  {
    languageName: "javaScript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

MyCoding.forEach((e) => {
  console.log(e.languageName);
  console.log(e.languageFileName);
});
