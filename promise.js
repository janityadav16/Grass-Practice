// function createPromise(startTime, timeout) {
//     return new Promise((resolve, reject) => {
//         const timerId = setTimeout(() => {
//             const succeeded = Date.now() - startTime < timeout;
//             if (succeeded) {
//                 resolve('Promise resolved');
//             } else {
//                 reject('Promise rejected');
//             }
//         }, timeout);
//         return () => clearTimeout(timerId);
//     });
// }
let count = 0;
document.getElementById('plus').addEventListener('click', () => {
    count++;
    document.getElementById('count').innerHTML = count;
});
document.getElementById('minus').addEventListener('click', () => {
    count--;
    document.getElementById('count').innerHTML = count;
});
