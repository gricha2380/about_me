'use strict';
// using eventlistner to wait for page to fully load
document.addEventListener('DOMContentLoaded', function(){
  var score = 0;
  var choices = {'yes':['yes','y'],'no':['no','n']};
  var questions = [
    {question:'Was Gregor born in Seattle?',
      answer: choices['no'],
      details: 'No, Gregor was born on the island of Grenada!',
      response: ''},
    {question:'Was Hypertalk the first programming language Gregor learned?',
      answer: choices['yes'],
      details: 'Yes. Gregor learned Hypertalk through the early Macintosh tool known as Hypercard.',
      response: ''},
    {question:'Does Gregor ever take a day off from coding?',
      answer: choices['no'],
      details: 'No, I never stop coding. I pratice 7 days a week because I am driven to be better.',
      response: ''},
    {question:'Does Gregor know Javascript?',
      answer: choices['yes'],
      details: 'YES! My knowledge isn\'t perfect, but I can produce functional, readable code.',
      response: ''}
  ];
  // run through
  for (var i = 0; i < questions.length; i++) {
    var ask = prompt(questions[i].question.toLowerCase());
    if (ask == questions[i].answer[0] || ask == questions[i].answer[1]) {
      console.log('The user is correct. ' + questions[i].details);
      score++;
    } else {
      console.log('The user is wrong. ' + questions[i].details);
    }
    document.querySelector('.results').innerHTML = 'Score is ' + score + ' out of ' + questions.length;
  }
  /*
  var q1 = prompt(questions[0].question).toLowerCase();
  console.log('User said: ' + q1);
  if (q1 == questions[0].answer[0] || q1 == questions[0].answer[1]) {
    score++;
    console.log('user score is' + score);
  }
  document.querySelector('.results').innerHTML = 'Score is ' + score;
  */
},false);

// have a
