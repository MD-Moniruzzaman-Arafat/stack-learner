var obj1 = {
    a: 1,
    b: 2
}

var obj2 = {
    a: 1,
    b: 2
}

console.log(obj1.a == obj2.a && obj1.b == obj2.b)
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))