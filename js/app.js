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

function StorySegment(question, answers, pointValue) {
  this.question = question;
  this.answerOne = answers[0];
  this.answerTwo = answers[1];
  this.answerThree = answers[2];
  this.points = pointValue;
  this.altPath;
};

var i = 0;
var altPath = false;

var questionLimit = mainQuestions.length;

function createLabelElement(answers, i, j) {
  var labelEl = document.createElement('label');
  labelEl.setAttribute('for', 'answer' + j);
  labelEl.textContent = answers[i][j];
  return labelEl;
}

function createInputElement(j) {
  var inputEl = document.createElement('input');
  inputEl.setAttribute('id', 'answer' + j);
  inputEl.setAttribute('type', 'radio');
  inputEl.setAttribute('name', 'answer');
  inputEl.setAttribute('value', j);
  return inputEl;
}

function createMainStorySegments() {
  var mainSegments = [];
  for (var i = 0; i < mainQuestions.length; i++) {
    mainSegments.push(new StorySegment(mainQuestions[i], mainAnswers[i], 10));
  }
  return mainSegments;
};

function createAltStorySegments() {
  var altSegments = [];
  for (var i = 0; i < altQuestions.length; i++) {
    altSegments.push(new StorySegment(altQuestions[i], altAnswers[i], 5));
  }
  return altSegments;
};

function displayQuestion(question) {
  var el = document.createElement('p');
  el.setAttribute('id', 'questionEl');
  if (!altPath) {
    el.textContent = mainStorySegments[i].question;
    console.log(mainStorySegments[i].question);
  } else {
    el.textContent = altStorySegments[i - 1].question;
    console.log(altStorySegments[i - 1].question);
  }
  sectionEl.appendChild(el);
};

function displayAnswers(answers) {
  var formEl = document.createElement('form');
  formEl.setAttribute('id', 'answer-form');

  for (var j = 0; j < 3; j++) {
    if (!altPath) {

      var labelEl = createLabelElement(answers, i, j);

      var inputEl = createInputElement(j);

      formEl.appendChild(labelEl);
      formEl.appendChild(inputEl);
    } else {
      var labelEl = createLabelElement(answers, i - 1, j);

      var inputEl = createInputElement(j);

      formEl.appendChild(labelEl);
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
  var answerTwoEl = document.getElementById('answer1');
  var answerThreeEl = document.getElementById('answer2');
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
var mainStorySegments = createMainStorySegments();
console.log(mainStorySegments);

var altStorySegments = createAltStorySegments();
console.log(altStorySegments);

if (i === questionLimit) {
  console.log('User has finished the text adventure.');
} else {
  displayQuestion(mainQuestions);
  displayAnswers(mainAnswers);
}
