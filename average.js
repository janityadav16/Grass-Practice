const prompt = require('prompt-sync')();

let marks = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let mark = Number(prompt(`Enter mark for subject ${i + 1} (Math, Science, English, History, Geography): `));
    marks.push(mark);
    sum += mark;
}

let average = sum / marks.length;

console.log(`The average of marks is ${average}`);

let grades = ['F', 'D', 'C', 'B', 'A'];
let gradeIndex = Math.floor(average / 10) - 5;

if (gradeIndex < 0) {
    gradeIndex = 0;
}

console.log(`Grade: ${grades[gradeIndex]}`);

