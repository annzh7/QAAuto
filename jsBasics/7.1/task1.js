function handleNum (n, callbackEven, callbackOdd) {
    if (n % 2 === 0) {
        callbackEven(n);
    } else {
        callbackOdd(n);
    }
 }

function handleEven (n) {
    console.log (`Number ${n} is even`)
}

function handleOdd (n) {
    console.log (`Number ${n} is odd`)
}

handleNum(3, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);