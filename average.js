const prompt = require('prompt-sync')();

let marks = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let mark = Number(prompt(`Enter mark for subject ${i + 1}: `));
    marks.push(mark);
    sum += mark;
}

let average = sum / marks.length;

console.log(`The average of marks is ${average}`);

if (average >= 90) {
    console.log('Grade: A');
} else if (average >= 80) {
    console.log('Grade: B');
} else if (average >= 70) {
    console.log('Grade: C');
} else if (average >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}
