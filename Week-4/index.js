// Assignment 1

//creating custom promise 
function CustomPromise(exeFunc) {
    this.status = 'pending';

    let thenList = []; // recoreded response for then 
    let catchList = [];// recoreded response for catch

    let onResolveParam;
    let onRejectParam;
//resolve function
    resolve = (x) => {
        this.status = 'fulfilled'
        onResolveParam = x;
        while (thenList.length !== 0) {
            const fun = thenList.pop();
            onResolveParam = fun(onResolveParam); // callback
        }
    }
//reject function
    reject = (x) => {
        this.status = 'rejected';
        onRejectParam = x;
        while (catchList.length !== 0) {
            const fun = catchList.pop();
            onRejectParam = fun(onRejectParam);
        }
    }

    this.then = (onResolve, onReject) => { //.then() method 
        if (this.status === 'pending') { // status checking 
            if (onResolve !== undefined) {
                thenList.push(onResolve)
            }
            if (onReject !== undefined) {
                catchList.push(onReject);
            }
        } else if (this.status === 'fulfilled' && onResolve != null) {
            onResolveParam = onResolve(onResolveParam);
        } else if (this.status === 'rejected' && onReject !== undefined) {
            onRejectParam = onReject(onRejectParam);
        }
        return this;
    }

    this.catch = (errFunc) => {
        return this.then(null, errFunc);
    }

    try {
        exeFunc(resolve, reject);
    } catch (err) {
        reject(err);
    }
}

console.log('before promise');
let p = new CustomPromise((resolve, reject) => {
    let randomNumber = Math.floor(Math.random() * 10000);
    console.log(randomNumber);
    if (randomNumber % 5 === 0) {
        reject('Number is divisible by 5');
    } else {
        resolve('Number is not divisible by 5');
    }
}).catch(res => console.log(res))
    .then(res => console.log(res));
console.log('after promise')