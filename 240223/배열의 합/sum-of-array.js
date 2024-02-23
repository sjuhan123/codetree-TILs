const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

input.forEach((array) => {
    let sum = 0;
    array.split(" ").map(Number).forEach((el) => {
        sum += el;
    });
    console.log(sum);
});