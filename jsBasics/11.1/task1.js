function delayedText(text, milliseconds) {
    setTimeout (() => {
        console.log(text);
    }, milliseconds);
};

delayedText('Hi again!', 3000);