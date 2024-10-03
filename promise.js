function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Promise resolved");
            } else {
                reject("Promise rejected");
            }
        }, 2000);
    });
}
