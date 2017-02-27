'use strict';

var mainQuestions = ['Your big adventure starts here, in your room. What will you do next?'];

var altQuestions = ['Bad choice! The fire escape is rusted. You fall one story and sprain your ankle.'];

var answers = [
  ['Open the front door.', 'Crawl out the window.', 'Wait for 5 more minutes.'],];

var sectionEl = document.getElementById('game-content');

var count = 0;

function displayQuestion() {
  var el = document.createElement('p');
  el.setAttribute('id', 'questionEl');
  el.textContent = mainQuestions[count];
  sectionEl.appendChild(el);
  count++;

  displayAnswers();
};

function displayAnswers() {
  var formEl = document.createElement('form');

  var currentAnswers = [];

  for (var i = 0; i < 3; i++) {
    var inputEl = document.createElement('input');
    inputEl.setAttribute('id', 'answer' + i);
    inputEl.setAttribute('type', 'radio');
    inputEl.setAttribute('name', 'answer');
    inputEl.setAttribute('value', i + 1);

    var labelEl = document.createElement('label');
    labelEl.textContent = answers[0][i];

    inputEl.appendChild(labelEl);
    formEl.appendChild(inputEl);
  }

  var submitEl = document.createElement('input');
  submitEl.setAttribute('type', 'submit');
  submitEl.setAttribute('name', 'submit');
  submitEl.setAttribute('value', 'submit');

  submitEl.addEventListener('submit', handleSubmit);

  formEl.appendChild(submitEl);
  sectionEl.appendChild(formEl);
};

function handleSubmit(event) {
  var answerOne = getElementById('answer0');
  var answerTwo = getElementById('answer1');
  var answerThree = getElementById('answer2');
  var userAnswerId = event.target.getAttribute('id');

  if (userAnswerId === answerOne.id) {
    sectionEl.removeChild(formEl);
    displayQuestion();
  } else if (userAnswerId === answerTwo.id) {

  } else if (userAnswerId === answerOne.id) {

  }
};

//------------------TEST APPLICATION------------------
displayQuestion();
