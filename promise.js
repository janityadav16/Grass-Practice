const createPromise = (startTime, timeout) => new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
        const succeeded = Date.now() - startTime < timeout;
        succeeded ? resolve('Promise resolved') : reject('Promise rejected');
    }, timeout);

    return () => clearTimeout(timerId);
});

let count = 0;

document.getElementById('plus').addEventListener('click', () => {
    count++;
    document.getElementById('count').innerHTML = count;
    createPromise(Date.now(), 2000)().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
});

document.getElementById('minus').addEventListener('click', () => {
    count--;
    document.getElementById('count').innerHTML = count;
    createPromise(Date.now(), 2000)().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
});
if (typeof document === 'undefined') {
    console.log('document is not defined');
} else { }
