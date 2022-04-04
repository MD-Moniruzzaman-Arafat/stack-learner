// function add(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// add(10, 15);
// add(5, 5);
// function arrayAdd(arrayItem) {
//     var sum = 0;
//     for (var i = 0; i < arrayItem.length; i++) {
//         sum += arrayItem[i];
//     }
//     console.log(sum);
// }

// arrayAdd([1, 3, 5, 7, 9]);
// arrayAdd([2, 3, 5, 7, 9]);

function addNumber() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        // console.log(arguments[i]);
        sum += arguments[i];
    }
    console.log(sum);
}
addNumber(10, 30, 50);
