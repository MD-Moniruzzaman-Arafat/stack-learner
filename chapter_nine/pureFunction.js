function add(n) {
    return n * n;
}
var result = add(2);
// console.log(result)

var point = {
    x: 10,
    y: 30
}

function print(number) {
    number.x = 100,
        number.y = 300
}
print(point);
console.log(point)