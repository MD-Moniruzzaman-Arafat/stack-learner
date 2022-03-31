// object literal
// var obj = {};
// console.log(obj);
// obj.a = 10;
// console.log(obj);

// var obj = { a: 20 };
// console.log(obj);


// object constructor
// var obj = Object()
// obj.a = 30;
// console.log(obj);

// var obj = new Object()
// obj.a = 30;
// console.log(obj);

// access the value
var obj = {
    a: 10,
    b: 20,
    c: 30
}
console.log(obj.a)
console.log(obj.a + obj.b)
console.log(obj['a'])
console.log(obj['a'] + obj['b'])

delete obj.b;
console.log(obj)

