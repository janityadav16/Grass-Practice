function createPromise(startTime, timeout) {
    return new Promise((resolve, reject) => {
        const timerId = setTimeout(() => {
            const succeeded = Date.now() - startTime < timeout;
            if (succeeded) {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        }, timeout);
        return () => clearTimeout(timerId);
    });
}

