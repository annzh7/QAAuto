const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0, negativeCount = 0, zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        zeroCount++;
    } else if (numbers[i] > 0) {
        positiveCount++;
    } else negativeCount++;
}

console.log ('Positive numbers: ', positiveCount);
console.log ('Negative numbers: ', negativeCount);
console.log ('Zero numbers: ', zeroCount);