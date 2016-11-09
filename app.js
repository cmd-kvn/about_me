// Author: Kevin Wong
// Date: 11/8/16
// Pragram name: lab 2
// Description: Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not.

'use strict'; //enforces good practices

/*The questions in the guessing game must require a mix of yes/no answers,
and user input must accept either y/n or yes/no responses,
with either .toUpperCase() or .toLowerCase() used to validate the user input
and accommodate users entering all-caps Y/N or YES/NO answers, too.*/

/* Useful and descriptive console.log() messages in the JS are well written
and correctly displaying to the browser console for each question of the guessing game.*/

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
// var myName = prompt('What\'s my name?');
// if (myName.toLowerCase() === 'inspector lee') {
//   alert('Yes, but you can call me Lee.');
// } else {
//   alert('It\'s Inspector Lee damnit. Don Cheadle backed me up on that one time.');
// }
// // Print the stored variable to the console
// console.log('First question answered with: ' + myName);
//
// // Prompt user with y/n question and store response in variable
// // Change user input to lower case and evaluate conditionally, then alert the user
// var searchPerson = prompt('Who am I searching for?');
// if (searchPerson.toLowerCase() === 'soo-yung' || searchPerson.toLowerCase() === 'soo yung') {
//   alert('Yes, I only care about the girl!');
// } else if (searchPerson.toLowerCase() === 'juntao') {
//   alert('JUNTAO! *points');
// } else {
//   alert('No, not ' + searchPerson + '. DID-YOU-UNDERSTAND-THE-WORDS-THAT-CAME-OUT-OF-MY-MOUTH?');
// }
// // Print the stored variable to the console
// console.log('Second question answered with: ' + searchPerson);
//
// // Prompt user with y/n question and store response in variable
// // Change user input to lower case and evaluate conditionally, then alert the user
// var hometown = prompt('Where am I from?');
// if (hometown.toLowerCase() === 'hong kong') {
//   alert('Yes. Come visit sometime. We can hang in my crib. I will show you my \'hood.');
// } else {
//   alert('You must think we\'re in the United States of James Carter. I\'m the President, I\'m the Emperor, \
// I\'m the King. I\'m Michael Jackson, you\'re Tito.');
// }
// // Print the stored variable to the console
// console.log('Third question answered with: ' + hometown);

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
var likesBeachBoys = prompt('Are the Beach Boys great American music?');
if (likesBeachBoys !== null && (likesBeachBoys.toLowerCase() === 'yes' || likesBeachBoys.toLowerCase() === 'y')) {
  alert('I wish they all could be California girls!');
} else if (likesBeachBoys !== null && (likesBeachBoys === 'no' || likesBeachBoys === 'n')) {
  alert('Don\'t you ever touch my radio!');
} else if (likesBeachBoys === null) {
  alert('Well I guess I know how you feel about music.');
}
else {
  alert('That\'s not even how you answer the question.');
}
// Print the stored variable to the console
console.log('Fourth question answered with: ' + likesBeachBoys);

// Prompt user with y/n question and store response in variable
// Change user input to lower case and evaluate conditionally, then alert the user
var knowsWar = prompt('Do you know War?');
if (knowsWar !== null && (knowsWar.toLowerCase() === 'yes' || knowsWar.toLowerCase() === 'y')) {
  alert('Huh! Yeah! What is it good for? Absolutely nothing, sing it again, you all!');
} else if (knowsWar !== null && (knowsWar.toLowerCase() === 'no' || knowsWar.toLowerCase() === 'n')){
  alert('You don\'t know nothing about no War.');
} else if (knowsWar === null){
  alert('You trying to go to war with me?');
} else {
  alert('That\'s not even how you answer the question.');
}
// Print the stored variable to the console
console.log('Fifth question answered with: ' + knowsWar);
