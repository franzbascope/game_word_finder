const prompt = require("prompt-sync")();
const bankOfWords = require("../bank_of_words/bank_of_words");
const getRandomNumber = require("../bank_of_words/get_random_number");
const wordMatcher = require("../word_matcher/word_matcher");

class Game {
  constructor() {
    this.isMatch = false;
    this.secretWord = bankOfWords[getRandomNumber(5)];
    this.gameParameters = { maxAttempts: 6 };
    this.attempts = 0;
    this.guessTry = "";
  }

  run() {
    while (
      !this.isMatch &&
      this.attempts < this.gameParameters["maxAttempts"]
    ) {
      this.guessTry = prompt("Please enter your guess");
      this.attempts++;

      // Check if the attempt is correct
      if (this.doesAttemptHasError()) {
        continue;
      }

      // This is only help to debug
      console.log(`The secret word is ${this.secretWord}`);
      console.log(`Your guest try is :${this.guessTry}`);

      // Check if it matches, this means we won the game
      if (this.isCompleteMatch()) {
        break;
      }

      // Print characters
      this.printCharacters();
    }
    this.lostGame();
  }

  lostGame() {
    if (!this.isMatch) {
      console.log("You lost sorry");
    }
  }

  printCharacters() {
    // Print characters
    const characters = wordMatcher(this.secretWord, this.guessTry);
    console.log(characters);
    const attemptsLeft = this.gameParameters["maxAttempts"] - this.attempts;
    console.log(`You have ${attemptsLeft} attempts left`);
  }
  doesAttemptHasError() {
    if (this.secretWord.length !== this.guessTry.length) {
      console.log(
        `Your guess word has to be exactly ${this.secretWord.length} characters. Please try again`
      );
      return true;
    }
  }

  isCompleteMatch() {
    if (this.secretWord === this.guessTry) {
      this.isMatch = true;
      console.log("You won");
      return true;
    }
    return false;
  }
}

module.exports = Game;
