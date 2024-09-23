// const myMap = new Map([
//     ['name', 'John'],
//     ['age', 30],
//     ['occupation', 'Developer']
// ]);


// console.log(myMap.get('name'));

// for (let [key, value] of myMap) {
//     console.log(`${key}: ${value}`);
// }



// const myMap = new Map([
//     ['name', 'John'],
//     ['age', 30],
//     ['occupation', 'Developer'],
//     ['salary', 5000]
// ]);

// const filteredMap = new Map(
//     [...myMap].filter(([key, value]) => typeof value === 'number')
// );

// filteredMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });

const points = [40, 100, 1, 5, 25, 10];

const five = points.filter(point => point === 5);
console.log(five);

const call = (...args) => console.log(args);
call.apply(null, ['Hello', 'World']);

