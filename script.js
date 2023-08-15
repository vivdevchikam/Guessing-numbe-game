"use strict";

const levelTextIp = document.querySelector(".level-text");
const selectBtnEl = document.querySelector(".btn-select");
const guessEl = document.querySelector(".btn-guess");
const computerRanEl = document.querySelector(".computer-gives-number");
const userGuess = document.querySelector(".user-guessing");
const chance = document.querySelector(".chance span");
const suggestionGameEl = document.querySelector(".suggestion-game");
const computerGuessingTag = document.querySelector(".computer-guessing");
const rightComputerGuessingTag = document.querySelector(
  ".right-text-computer-guessing"
);
const highScore = document.querySelector(".Highscore span");
const highScoreEl = document.querySelector(".score-1 span");
const btnNewGameEl = document.querySelector(".btn-new-game");
let computerGuess = Math.floor(Math.random() * 20) + 1;

selectBtnEl.addEventListener("click", function () {
  const mytext = levelTextIp.value;

  if (mytext === "Hard") {
    chance.textContent = 4;
  } else if (mytext === "Normal") {
    chance.textContent = 6;
  } else if (mytext === "Easy") {
    chance.textContent = 10;
  }
});

// let scoreDec = 1;
let score = 20;
let mytext;
let hardLevel = 4;
let NormalLevel = 6;
let EasyLevel = 10;
let gives = 1;
let HighScoreTotal = 0;

guessEl.addEventListener("click", function () {
  // computerRanEl.textContent = computerGuess;
  const mytext = levelTextIp.value;
  const myNumber = userGuess.value;
  if (myNumber > computerGuess) {
    suggestionGameEl.textContent = "📈 Too High!";
    if (mytext === "Hard") {
      hardLevel -= gives;
      chance.textContent = hardLevel;
      score -= 5;
      highScoreEl.textContent = score;
      if (hardLevel === 0) {
        suggestionGameEl.textContent = "💥You Lost the Chance";
        document.querySelector("body").style.backgroundColor = "#ff6b6b";
        computerRanEl.textContent = computerGuess;
        document.querySelector(".computer-gives-number").style.backgroundColor =
          "#fff";
        document.querySelector(".computer-gives-number").style.width = "24rem";
        document.querySelector(".computer-gives-number").style.height = "10rem";
        highScoreEl.textContent = 0;
      } else if (hardLevel < 0) {
        suggestionGameEl.textContent = "🙋‍♂️Next Time!!";
        chance.textContent = 0;
        highScoreEl.textContent = 0;
      }
    } else if (mytext === "Normal") {
      NormalLevel -= gives;
      chance.textContent = NormalLevel;
      score -= 3;
      highScoreEl.textContent = score;
      if (NormalLevel === 0) {
        suggestionGameEl.textContent = "💥You Lost the Chance";
        document.querySelector("body").style.backgroundColor = "#ff6b6b";
        computerRanEl.textContent = computerGuess;
        document.querySelector(".computer-gives-number").style.backgroundColor =
          "#fff";
        document.querySelector(".computer-gives-number").style.width = "24rem";
        document.querySelector(".computer-gives-number").style.height = "10rem";
        highScoreEl.textContent = 0;
      } else if (NormalLevel < 0) {
        suggestionGameEl.textContent = "🙋‍♂️Next Time!!";
        chance.textContent = 0;
        highScoreEl.textContent = 0;
      }
    } else if (mytext === "Easy") {
      EasyLevel -= gives;
      chance.textContent = EasyLevel;
      score -= 2;
      highScoreEl.textContent = score;
      if (EasyLevel === 0) {
        suggestionGameEl.textContent = "💥You Lost the Chance";
        document.querySelector("body").style.backgroundColor = "#ff6b6b";
        computerRanEl.textContent = computerGuess;
        document.querySelector(".computer-gives-number").style.backgroundColor =
          "#fff";
        document.querySelector(".computer-gives-number").style.width = "24rem";
        document.querySelector(".computer-gives-number").style.height = "10rem";
        highScoreEl.textContent = 0;
      } else if (EasyLevel < 0) {
        suggestionGameEl.textContent = "🙋‍♂️Next Time!!";
        chance.textContent = 0;
        highScoreEl.textContent = 0;
      }
    }
  } else if (myNumber < computerGuess) {
    suggestionGameEl.textContent = "📉 Too Low!";
    if (mytext === "Hard") {
      hardLevel -= gives;
      chance.textContent = hardLevel;
      score -= 5;
      highScoreEl.textContent = score;
      if (hardLevel === 0) {
        suggestionGameEl.textContent = "💥You Lost the Chance";
        document.querySelector("body").style.backgroundColor = "#ff6b6b";
        computerRanEl.textContent = computerGuess;
        document.querySelector(".computer-gives-number").style.backgroundColor =
          "#fff";
        document.querySelector(".computer-gives-number").style.width = "24rem";
        document.querySelector(".computer-gives-number").style.height = "10rem";
        highScoreEl.textContent = 0;
      } else if (hardLevel < 0) {
        suggestionGameEl.textContent = "🙋‍♂️Next Time!!";
        // document.querySelector(".chance").textContent = "🔕 Already You Lost!";
        chance.textContent = 0;
        highScoreEl.textContent = 0;
      }
    } else if (mytext === "Normal") {
      NormalLevel -= gives;
      chance.textContent = NormalLevel;
      score -= 3;
      highScoreEl.textContent = score;
      if (NormalLevel === 0) {
        suggestionGameEl.textContent = "💥You Lost the Chance";
        document.querySelector("body").style.backgroundColor = "#ff6b6b";
        computerRanEl.textContent = computerGuess;
        document.querySelector(".computer-gives-number").style.backgroundColor =
          "#fff";
        document.querySelector(".computer-gives-number").style.width = "24rem";
        document.querySelector(".computer-gives-number").style.height = "10rem";
        highScoreEl.textContent = 0;
      } else if (NormalLevel < 0) {
        suggestionGameEl.textContent = "🙋‍♂️Next Time!!";
        // document.querySelector(".chance").textContent = "🔕 Already You Lost!";
        chance.textContent = 0;
        highScoreEl.textContent = 0;
      }
    } else if (mytext === "Easy") {
      EasyLevel -= gives;
      chance.textContent = EasyLevel;
      score -= 2;
      highScoreEl.textContent = score;
      if (EasyLevel === 0) {
        suggestionGameEl.textContent = "💥You Lost the Chance";
        document.querySelector("body").style.backgroundColor = "#ff6b6b";
        computerRanEl.textContent = computerGuess;
        document.querySelector(".computer-gives-number").style.backgroundColor =
          "#fff";
        document.querySelector(".computer-gives-number").style.width = "24rem";
        document.querySelector(".computer-gives-number").style.height = "10rem";

        highScoreEl.textContent = 0;
      } else if (EasyLevel < 0) {
        suggestionGameEl.textContent = "🙋‍♂️Next Time!!";
        chance.textContent = 0;
        highScoreEl.textContent = 0;
      }
    }
  } else {
    suggestionGameEl.textContent = "🎉 Correct Number";
    computerRanEl.textContent = computerGuess;
    document.querySelector("body").style.backgroundColor = "#51cf66";
    document.querySelector(".computer-gives-number").style.backgroundColor =
      "#fff";
    document.querySelector(".computer-gives-number").style.width = "24rem";
    document.querySelector(".computer-gives-number").style.height = "10rem";
    if (score > HighScoreTotal) {
      HighScoreTotal = score;
      highScore.textContent = HighScoreTotal;
    }
    if (score === 0) {
      highScoreEl.textContent = "😭😭";
      computerGuessingTag.textContent = `WTF Bad Luck !! You have Scored 😭${score}`;
      rightComputerGuessingTag.textContent = `WTF Bad Luck !! You have Scored 😭${score}`;
    } else if (score < 10) {
      highScoreEl.textContent = `😥 ${score}`;
      computerGuessingTag.textContent = `Ohh No Shit Yaar!! You have Scored 😢${score}`;
      rightComputerGuessingTag.textContent = `Ohh No Shit Yaar!! You have Scored 😢${score}`;
    } else if (score > 16) {
      highScoreEl.textContent = `🥳😁 ${score}`;
      computerGuessingTag.textContent = `Ohh Hurrah!! You have Scored 🥳🎉${score}`;
      rightComputerGuessingTag.textContent = `Ohh Hurrah!! You have Scored 🥳🎉${score}`;
    } else if (score > 10) {
      highScoreEl.textContent = `😉🙂 ${score}`;
      computerGuessingTag.textContent = `Ohh Wow Not Bad!! You have Scored 🙂${score}`;
      rightComputerGuessingTag.textContent = `Ohh Wow Not Bad!! You have Scored 🙂${score}`;
    } else if (score < 0) {
      highScoreEl.textContent = "😭😭";
      computerGuessingTag.textContent = `WTF Bad Luck !! You have Scored 😭${score}`;
      rightComputerGuessingTag.textContent = `WTF Bad Luck !! You have Scored 😭${score}`;
    }
  }
});

btnNewGameEl.addEventListener("click", function () {
  computerGuess = Math.floor(Math.random() * 20) + 1;

  score = 20;
  hardLevel = 4;
  NormalLevel = 6;
  EasyLevel = 10;
  levelTextIp.value = "";
  userGuess.value = "";
  chance.textContent = 0;
  highScoreEl.textContent = 0;
  suggestionGameEl.textContent = "🤔 Start Guessing...";
  document.querySelector(".computer-gives-number").style.backgroundColor =
    "#fff";
  document.querySelector(".computer-gives-number").style.width = "14rem";
  document.querySelector(".computer-gives-number").style.height = "12rem";
  computerRanEl.textContent = "?";
  computerGuessingTag.textContent = "Computer Guessing...";
  rightComputerGuessingTag.textContent = "Computer Guessing...";
  document.querySelector("body").style.backgroundColor = "#dee2e6";
  // document.querySelector(".chance").textContent = "🤚 Chances:";
});
