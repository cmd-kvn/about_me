// Author: Kevin Wong
// Date: 11/8/16
// Pragram name: lab 2
// Description: Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not.

'use strict'; //enforces good practices

var tallyCorrect = 0;
var tallyWrong = 0;
/*The questions in the guessing game must require a mix of yes/no answers,
and user input must accept either y/n or yes/no responses,
with either .toUpperCase() or .toLowerCase() used to validate the user input
and accommodate users entering all-caps Y/N or YES/NO answers, too.*/

/* Useful and descriptive console.log() messages in the JS are well written
and correctly displaying to the browser console for each question of the guessing game.*/

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
var myName = prompt('What\'s my name?');
if (myName.toLowerCase() === 'inspector lee') {
  alert('Yes, but you can call me Lee.');
  tallyCorrect++;
} else {
  alert('It\'s Inspector Lee damnit. Don Cheadle backed me up on that one time.');
  tallyWrong++;
}
// Print the stored variable to the console
console.log('First question answered with: ' + myName);

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
var searchPerson = prompt('Who am I searching for?');
if (searchPerson.toLowerCase() === 'soo-yung' || searchPerson.toLowerCase() === 'soo yung') {
  alert('Yes, I only care about the girl!');
  tallyCorrect++;
} else if (searchPerson.toLowerCase() === 'juntao') {
  alert('JUNTAO! *points');
  tallyCorrect++;
} else {
  alert('No, not ' + searchPerson + '. DID-YOU-UNDERSTAND-THE-WORDS-THAT-CAME-OUT-OF-MY-MOUTH?');
  tallyWrong++;
}
// Print the stored variable to the console
console.log('Second question answered with: ' + searchPerson);

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
var hometown = prompt('Where am I from?');
if (hometown.toLowerCase() === 'hong kong') {
  alert('Yes. Come visit sometime. We can hang in my crib. I will show you my \'hood.');
  tallyCorrect++;
} else {
  alert('You must think we\'re in the United States of James Carter. I\'m the President, I\'m the Emperor, \
I\'m the King. I\'m Michael Jackson, you\'re Tito.');
  tallyWrong++;
}
// Print the stored variable to the console
console.log('Third question answered with: ' + hometown);

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
var likesBeachBoys = prompt('Are the Beach Boys great American music?');
if (likesBeachBoys !== null && (likesBeachBoys.toLowerCase() === 'yes' || likesBeachBoys.toLowerCase() === 'y')) {
  alert('I wish they all could be California girls!');
  tallyCorrect++;
} else if (likesBeachBoys !== null && (likesBeachBoys.toLowerCase() === 'no' || likesBeachBoys === 'n')) {
  alert('Don\'t you ever touch my radio!');
  tallyWrong++;
} else if (likesBeachBoys === null) {
  alert('Well I guess I know how you feel about music.');
  tallyWrong++;
}
else {
  alert('That\'s not even how you answer the question.');
  tallyWrong++;
}
// Print the stored variable to the console
console.log('Fourth question answered with: ' + likesBeachBoys);

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
var knowsWar = prompt('Do you know War?');
if (knowsWar !== null && (knowsWar.toLowerCase() === 'yes' || knowsWar.toLowerCase() === 'y')) {
  alert('Huh! Yeah! What is it good for? Absolutely nothing, sing it again, you all!');
  tallyCorrect++;
} else if (knowsWar !== null && (knowsWar.toLowerCase() === 'no' || knowsWar.toLowerCase() === 'n')){
  alert('You don\'t know nothing about no War.');
  tallyWrong++;
} else if (knowsWar === null){
  alert('You trying to go to war with me?');
  tallyWrong++;
} else {
  alert('That\'s not even how you answer the question.');
  tallyWrong++;
}
// Print the stored variable to the console
console.log('Fifth question answered with: ' + knowsWar);

// Add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number
// and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four
// opportunities to get the correct answer
var secretNum = 20;
console.log('Value of secretNum: ', secretNum);

// Evaluate whether the guess is too high or too low and give the user four attempts
var attempt = 0;
var maxAttempts = 4;
while (attempt < maxAttempts) {
  var guessedNum = prompt('Guess my secret number.');
  guessedNum = parseInt(guessedNum);
  console.log('value of guessedNum: ', guessedNum);
  console.log('type of guessedNum: ', typeof guessedNum);

  if (guessedNum === secretNum) {
    alert('BULLSEYE. ', secretNum, ' was my secret Number!');
    attempt = maxAttempts; // exit loop
    tallyCorrect++;
  } else if (guessedNum < secretNum) {
    alert('Too low. Click OK and guess again.');
    console.log('Attempt #: ', attempt);
  } else if (guessedNum > secretNum) {
    alert('Too high. Click OK and guess again.');
    console.log('Attempt #: ', attempt);
  } else {
    alert('Rethink that choice.');
    console.log('Attempt #: ', attempt);
  }
  attempt++;
}
console.log('out of the loop');

// Add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array.
// For now, I will structure this question so that the user has six tries to get a single correct
// answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of
// the possible correct answers
var guess;
attempt = 0;
maxAttempts = 6;
var goodGuess;
var basketballPlayers = ['michael jordan', 'steve nash', 'damian lillard', 'brandon roy'];
console.log(basketballPlayers);

while (attempt < maxAttempts) {
  guess = prompt('Can you guess one of my four favorite basketball players?').toLowerCase();

  for (var i = 0; i < basketballPlayers.length; i++) {
    if (guess === basketballPlayers[i]) {
      goodGuess = true;
      console.log('guess: ', guess, '. attempt: ', attempt);
      break; // exit for loop
    } else if (guess !== basketballPlayers[i]) {
      goodGuess = false;
      console.log('guess: ', guess, '. attempt: ', attempt);
    }
  }

  if (goodGuess === true){
    alert('Yep. ' + guess.toUpperCase() + ' is Hall of Fame material. Here\'s all of them: ' + basketballPlayers);
    console.log('YES');
    tallyCorrect++;
    attempt = maxAttempts; // exit while loop
  } else if (goodGuess === false) {
    alert('Nope. ' + guess.toUpperCase() + ' would get worked by my guys.');
    console.log('BOO');
  }
  attempt++;
}
console.log('out of loop');

// Keep a tally of the total number of correct answers given by the user, and at the end of the game,
// tell the user how well they did with a personalized custom message that includes the number of correct answers
// and also addresses the user by name
console.log('correct answers: ', tallyCorrect);

var userName = prompt('Hey champ, what\'s your name?');
alert(userName + ', you finished all my questions. You got ' + tallyCorrect + ' correct answers after 7 questions. Pat yourself\
 on the back.');
