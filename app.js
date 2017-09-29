'use strict'; // no sloppy JS habits allowed here.

// event listener to stop script from loading until page is fully rendered
document.addEventListener('DOMContentLoaded', function(){
  // ask for user name
  var userName = prompt('Hi, what\'s your name?');
  // if user provides a name, use it
  if (userName != null) {
    document.querySelector('.userName').innerHTML = 'Hi ' + userName + '. ';
  }
  // otherwise be snarky
  else {
    document.querySelector('.userName').innerHTML = 'Hi annonmyous Stranger! ';
  }
  // saving object of correct answers. Used in button event listners to compare user input
  var choices = {'yes':['yes','y'],'no':['no','n']};
  // initiate score to track points and counter to incriment progress
  var score = 0;
  var counter = 0;

  // array of objects to hold questions
  var questions = [
    {question:'Was Gregor born in Seattle?',
      answer: choices['no'],
      correct: 'Correct, I was born on the island of Grenada!',
      incorrect: 'I\'m not from Seattle. I was actually born on the island of Grenada'},
    {question:'Does Gregor do web development for fun?',
      answer: choices['yes'],
      correct: 'Yes, web dev is what I do for fun!',
      incorrect: 'Whoever told you that was totally wrong! Web dev really is what I do for fun!'
    },
    {question:'Was Hypertalk the first programming language Gregor learned?',
      answer: choices['yes'],
      correct: 'Yes. I learned Hypertalk through the early Macintosh tool known as Hypercard.',
      incorrect: 'Hypertalk actually was the fist language I learned through the early Macintosh tool known as Hypercard.'
    },
    {question:'Does Gregor ever take a day off from coding?',
      answer: choices['no'],
      correct: 'Correct, I never stop coding. I pratice 7 days a week because I am driven to be better.',
      incorrect: 'Actually, I never stop coding! I pratice 7 days a week because I am driven to be better.'
    },
    {question:'Does Gregor know Javascript?',
      answer: choices['yes'],
      correct: 'YES! My knowledge isn\'t perfect, but I can produce functional, readable code.',
      incorrect: 'YES I do! My knowledge isn\'t perfect, but I can produce functional, readable code.'
    }
  ];

  // if user clicks 'begin', launch question function
  document.querySelector('.begin').addEventListener('click', function(event){
    // only bother if there are questions left to ask
    if (counter <= questions.length) {
      askQuestionsFancy();
    }
  });

  function askQuestionsFancy() {
    // set value of main div to the content of the current question
    document.querySelector('.inner').innerHTML = questions[counter].question;
    // show the 'yes' 'no' buttons
    document.querySelector('.answerChoices').setAttribute('style','display:block');
    // hide the begin button
    document.querySelector('.begin').setAttribute('style','display:none');

    // listen for a click on the 'no' button
    document.querySelector('.no').addEventListener('click', function(event){
      // if the saved answer is no...
      if (questions[counter].answer[0] == 'no') {
        ifCorrect();
      } else {
        ifIncorrect();
      }
    }); // end 'no' event listener

    // listen for a click on the 'yes' button
    document.querySelector('.yes').addEventListener('click', function(event){
      // if the saved answer is no...
      if (questions[counter].answer[0] == 'yes') {
        ifCorrect();
      } else {
        ifIncorrect();
      }
    }); // end 'yes' event listener
  } // end ask questions fancy

  // delay function to hide feedback div
  function hideFeedback(){
    setTimeout(function() {
      //console.log('delay before hiding');
      document.querySelector('.feedback').classList.toggle('live');
    }, 1000);
  }

  // incriment counter and print status
  function updateStatus(){
    console.log('question was: ' + questions[counter].question);
    console.log('answer was ' + questions[counter].answer[0]);
    console.log('score is ' + score);
    counter++;
  }

  // show score and reset code
  function thanksForPlaying(){
    document.querySelector('.inner').innerHTML = 'Thanks for playing!';
    document.querySelector('.results').innerHTML = 'Score is ' + score + ' out of ' + questions.length;
    document.querySelector('.answerChoices').innerHTML = '<button onClick="location.reload();">Restart</button>';
  }

  // incriment score if correct then show next question. Otherwise show score
  function ifCorrect() {
    // increase score
    score++;

    // show feedback for current question
    document.querySelector('.caption').innerHTML = questions[counter].correct;

    // go to next question
    updateStatus();

    // animate 'correct' badge with CSS then hide after delay
    document.querySelector('.feedback').innerHTML = 'Correct!';
    document.querySelector('.feedback').classList.toggle('live');
    hideFeedback();

    // only run if there are questions left to show
    if (counter < questions.length) {
      document.querySelector('.inner').innerHTML = questions[counter].question;
    } else {
      thanksForPlaying();
    }
  } // end correct

  // if there are questions left, show next one. Otherwise show score
  function ifIncorrect() {
    // show feedback for current question
    document.querySelector('.caption').innerHTML = questions[counter].incorrect;

    // go to next question
    updateStatus();

    // only run if there are questions left to show
    if (counter < questions.length) {
      document.querySelector('.inner').innerHTML = questions[counter].question;
    } else {
      thanksForPlaying();
    }
  } // end incorrect
}); // end document ready
