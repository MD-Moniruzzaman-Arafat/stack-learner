// first class function

function add(a, b) {
    return a + b;
}

// 1. A function can be stored in a variable
var sum = add;
console.log(sum(4, 5));
console.log(typeof sum);

// 2. A function can be stored in an array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](4, 4));

// 3. A function can be stored in an object
var obj = {
    sum: add
}
console.log(obj);
console.log(obj.sum(4, 3));

// 4. We can create function as need
setTimeout(function () {
    console.log('i have created');
}, 5000);

// setInterval(function () {
//     console.log('i have created');
// }, 5000);

// 5. we can pass function as an argument

// 6. we can return function from another function
