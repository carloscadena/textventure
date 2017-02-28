'use strict';

var mainQuestions = ['main question 1.', 'main question 2.', 'main question 3.'];

var altQuestions = ['alternate question 1 (redirect from question 1).',
  'alternate question 2 (redirect from question 2).',
  'alternate question 3 (redirect from question 3).'];

var mainAnswers = [
  ['main answer 1', 'main answer 2', 'main answer 3'],
  ['main answer 1', 'main answer 2', 'main answer 3'],
  ['main answer 1', 'main answer 2', 'main answer 3']];

var altAnswers = [
  ['alt answer 1', 'alt answer 2', 'alt answer 3'],
  ['alt answer 1', 'alt answer 2', 'alt answer 3'],
  ['alt answer 1', 'alt answer 2', 'alt answer 3']];

var sectionEl = document.getElementById('game-content');

var i = 0;
var altPath = false;

var questionLimit = mainQuestions.length;

function displayQuestion(question) {
  var el = document.createElement('p');
  el.setAttribute('id', 'questionEl');
  if (!altPath) {
    el.textContent = question[i];
    console.log(question[i]);
  } else {
    el.textContent = question[i - 1];
    console.log(question[i - 1]);
  }
  sectionEl.appendChild(el);
};

function displayAnswers(answers) {
  var formEl = document.createElement('form');
  formEl.setAttribute('id', 'answer-form');

  for (var j = 0; j < 3; j++) {
    if (!altPath) {
      var inputEl = document.createElement('input');
      inputEl.setAttribute('id', 'answer' + j);
      inputEl.setAttribute('type', 'radio');
      inputEl.setAttribute('name', 'answer');
      inputEl.setAttribute('value', j);

      var labelEl = document.createElement('label');
      labelEl.textContent = answers[i][j];

      inputEl.appendChild(labelEl);
      formEl.appendChild(inputEl);
    } else {
      var inputEl = document.createElement('input');
      inputEl.setAttribute('id', 'answer' + j);
      inputEl.setAttribute('type', 'radio');
      inputEl.setAttribute('name', 'answer');
      inputEl.setAttribute('value', j);

      var labelEl = document.createElement('label');
      labelEl.textContent = answers[i - 1][j];

      inputEl.appendChild(labelEl);
      formEl.appendChild(inputEl);
    }
  }

  var submitEl = document.createElement('input');
  submitEl.setAttribute('type', 'submit');
  submitEl.setAttribute('name', 'submit');
  submitEl.setAttribute('value', 'submit');

  formEl.addEventListener('submit', handleSubmit);

  formEl.appendChild(submitEl);
  sectionEl.appendChild(formEl);
};

function handleSubmit(event) {
  console.log(event);
  event.preventDefault();
  i++;
  var answerOneEl = document.getElementById('answer0');
  console.log(answerOneEl.id);
  var answerTwoEl = document.getElementById('answer1');
  console.log(answerTwoEl.id);
  var answerThreeEl = document.getElementById('answer2');
  console.log(answerThreeEl.id);
  var userAnswerId = event.target[0].checked;
  console.log(userAnswerId);

  if (event.target[0].checked) {
    altPath = false;
    var questionEl = document.getElementById('questionEl');
    var formEl = document.getElementById('answer-form');
    sectionEl.removeChild(questionEl);
    sectionEl.removeChild(formEl);
    console.log('User stayed on main path.');
    displayQuestion(mainQuestions);
    displayAnswers(mainAnswers);
  } else if (event.target[1].checked) {
    altPath = true;
    // i--;
    var questionEl = document.getElementById('questionEl');
    var formEl = document.getElementById('answer-form');
    sectionEl.removeChild(questionEl);
    sectionEl.removeChild(formEl);
    console.log('User switched to alternate path.');
    displayQuestion(altQuestions);
    displayAnswers(altAnswers);
  } else if (event.target[2].checked) {
    var formEl = document.getElementById('answer-form');
    var questionEl = document.getElementById('questionEl');
    sectionEl.removeChild(questionEl);
    sectionEl.removeChild(formEl);
    console.log('User has died.');
  }
};

//------------------TEST APPLICATION------------------
if (i === questionLimit) {
  console.log('User has finished the text adventure.');
} else {
  displayQuestion(mainQuestions);
  displayAnswers(mainAnswers);
}
