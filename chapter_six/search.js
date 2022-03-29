var a = [10, 12, 65, 85, 96, 44, 55];
console.log(a);
var find = 112;
var elemen = false
for (var i = 0; i < a.length; i++) {
    // console.log(a[i]);
    if (a[i] == find) {
        console.log('find the number is ' + i);
        elemen = true;
        break;
    }

}
if (!elemen) {
    console.log('not found')
}