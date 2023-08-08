"use strict";
function randomWord() {
    let randomWord = "";
    let char = "ABCDEFGHIJKabcdefghijk";
    for (var i = 0; i < char.length; i++) {
        randomWord += char.charAt(Math.floor(Math.random() * char.length));
    }
    console.log(randomWord.substr(0, 5));
}
randomWord();
