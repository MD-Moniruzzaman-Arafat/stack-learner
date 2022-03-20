while (true) {
    var rand = Math.floor(Math.random() * 10);
    if (rand == 6) {
        console.log('winner winner chicken dinner');
        break;
    } else {
        console.log('you have got ' + rand);
    }
}