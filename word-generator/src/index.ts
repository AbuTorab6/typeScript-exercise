function randomWord() {
  let randomWord:string = "";
  let char:string = "ABCDEFGHIJKabcdefghijk";
  for (var i = 0; i < char.length; i++) {
    randomWord += char.charAt(Math.floor(Math.random() * char.length));
  }

  console.log(randomWord.substr(0, 5));
}
randomWord();
