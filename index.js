// const myMap = new Map([
//     ['name', 'John'],
//     ['age', 30],
//     ['occupation', 'Developer']
// ]);


// console.log(myMap.get('name'));

// for (let [key, value] of myMap) {
//     console.log(`${key}: ${value}`);
// }



const myMap = new Map([
    ['name', 'John'],
    ['age', 30],
    ['occupation', 'Developer'],
    ['salary', 5000]
]);

const filteredMap = new Map(
    [...myMap].filter(([key, value]) => typeof value === 'number')
);

filteredMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
