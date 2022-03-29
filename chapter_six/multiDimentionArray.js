var a = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]
// console.log(a[2]);

for (var i = 0; i < a.length; i++) {
    // const element = a[i];
    // console.log(element)
    for (var j = 0; j < a[i].length; j++) {
        console.log('elemen ' + i + ' : ' + a[i][j])
    }
}