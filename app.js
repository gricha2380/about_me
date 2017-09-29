'use strict';
document.addEventListener('DOMContentLoaded', function(){
  var choices = {'yes':['yes','y'],'no':['no','n']};
  var yn = ' Type yes or no.'; // Why type the phrase 5 times when I can do it just once?
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
      correct: 'Yes, it is what I do for fun.',
      incorrect: 'Whoever told you that was lying. Web development is what I do for fun!'
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

  function askQuestions() {
    //score = 0;
    // loop to process array
    for (var i = 0; i < questions.length; i++) {
      var ask = prompt(questions[i].question + yn).toLowerCase();
      console.log('Question: ' + questions[i].question);
      if (ask == questions[i].answer[0] || ask == questions[i].answer[1]) {
        console.log('The user is correct. ' + questions[i].correct);
        score++;
        alert(questions[i].correct);
      } else {
        console.log('The user is wrong. ' + questions[i].incorrect);
        alert(questions[i].incorrect);
      }
      document.querySelector('.results').innerHTML = 'Score is ' + score + ' out of ' + questions.length;
    }
  }
  //askQuestions();
  document.querySelector('.begin').addEventListener('click', function(event){
    if (counter <= questions.length) {
      askQuestionsFancy();
    }
  });

  function askQuestionsFancy() {
    document.querySelector('.inner').innerHTML = questions[counter].question;
    document.querySelector('.answerChoices').setAttribute('style','display:block');
    document.querySelector('.begin').setAttribute('style','display:none');

    // listen for a click on the 'no' button
    document.querySelector('.no').addEventListener('click', function(event){
      // only run if there are questions left to show
      if (counter < questions.length) {
        // if the saved answer is no...
        if (questions[counter].answer[0] == 'no') {
          score++;
          counter++;

          // animate 'correct' badge
          //document.querySelector('.feedback').innerHTML = 'Correct!';
          //document.querySelector('.feedback').classList.toggle('live');

          // set the value of main div to the next question
          document.querySelector('.inner').innerHTML = questions[counter].question;
        } else {
          // if user's guess was wrong, increase counter and show next question
          counter++;
          document.querySelector('.inner').innerHTML = questions[counter].question;
        }
      } else {
        document.querySelector('.inner').innerHTML = 'Thanks for playing!';
        document.querySelector('.results').innerHTML = 'Score is ' + score + ' out of ' + questions.length;
      }
    });

    // listen for a click on the 'yes' button
    document.querySelector('.yes').addEventListener('click', function(event){
      // if the saved answer is no...
      if (questions[counter].answer[0] == 'yes') {
        score++;
        counter++;

        //document.querySelector('.feedback').innerHTML = 'Correct!';
        //document.querySelector('.feedback').classList.toggle('live');

        if (counter < questions.length) {
          document.querySelector('.inner').innerHTML = questions[counter].question;
        } else {
          document.querySelector('.inner').innerHTML = 'Thanks for playing!';
          document.querySelector('.results').innerHTML = 'Score is ' + score + ' out of ' + questions.length;
        }
      } else {
        counter++;
        console.log('user score is ' + score);
        console.log('counter is ' + counter);
        console.log('question length is ' + questions.length);
        if (counter < questions.length) {
          document.querySelector('.inner').innerHTML = questions[counter].question;
        } else {
          document.querySelector('.inner').innerHTML = 'Thanks for playing!';
          document.querySelector('.results').innerHTML = 'Score is ' + score + ' out of ' + questions.length;
        }
      }
    });
    //}
  }
});
