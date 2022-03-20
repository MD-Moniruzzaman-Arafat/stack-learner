// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

var a = true;
while (a) {
    var rand = Math.floor(Math.random() * 10);
    if (rand == 6) {
        console.log('winner winner chicken dinner');
        a = false;
    } else {
        console.log('you have got ' + rand);
    }
}