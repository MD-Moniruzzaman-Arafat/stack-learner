function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
var total1 = sum(10, 30, 40);
// console.log(total1);

function person(name, email) {
    return {
        name: name,
        email: email
    }
}
var p1 = person('arafat', 'arafat@gmail.com');
console.log(p1)