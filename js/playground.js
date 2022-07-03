function randomNumber() {
    return Math.floor(Math.random() * 10);
}

let arr = Array.apply(null, { length: 10 }).map(Function.call, randomNumber);

console.log(arr);