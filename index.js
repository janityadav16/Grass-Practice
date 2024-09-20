const myMap = new Map([
    ['name', 'John'],
    ['age', 30],
    ['occupation', 'Developer']
]);


console.log(myMap.get('name'));

for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}
