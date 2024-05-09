const userEmail = "pwnmhjn@22gmail.com";
// const userEmail = "";

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't Have user Email");
}

//falsy value
// false, 0,-0,0n,"",null,undefined,NaN

//truth value
//true "0" ,"false"," " [],{},function(){}

const userArray = [3, 5];

if (userArray.length) {
  console.log("Array exist");
}

const emptyObj = {};

if (Object.keys(emptyObj).length == 0) {
  console.log("object is empty");
}

// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 34;
// val1 = undefined ?? 22;

// console.log(val1);

//Ternary Operator

//condition? true:false

const iceTeaPrice = 73;

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("More then 80");
