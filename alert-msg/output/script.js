"use strict";
var btn = document.querySelector('.btn');
var input = document.querySelector('.text');
var submitFunc = () => {
    var text = document.querySelector('.text');
    if (text !== null) {
        alert(text.value);
    }
};
var entarPressFunc = (e) => {
    var text = document.querySelector('.text');
    if (text !== null) {
        if (e.key === "Enter") {
            alert(text.value);
        }
    }
};
if (btn !== null) {
    btn.addEventListener('click', submitFunc);
}
if (input !== null) {
    input.addEventListener('keypress', entarPressFunc);
}
