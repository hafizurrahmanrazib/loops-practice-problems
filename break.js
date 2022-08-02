// break Rull For for loop numeric value
/* for (var i = 1; i <= 20; i++) {
    if (i > 5) {
        break;
    }
    console.log(i);
} */

// break Rull For while loop numeric value
/* var roastGiven = 0;
while (roastGiven < 10) {
    console.log('Roast Den Gift Item Ansi');
    roastGiven++;
    if (roastGiven > 4) {
        break;
    }
} */

// break Rull For for loop string And array
/* var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'pen') {
        break;
    }
    console.log(item);
} */

// break Rull For for loop number And array
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}