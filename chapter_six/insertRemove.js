var a = [1, 2, 3, 4, 5, 6];
// console.log(a);
// a.push(7)
// a.pop();
// a.unshift(0)
// a.shift();
a.splice(1, 0, 10, 20);
// a.splice(1, 2);
// console.log(a)

var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 0, 100, 200, 300, 400);
console.log(myArray);
console.log(splice);