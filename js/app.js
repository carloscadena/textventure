'use strict';

var mainQuestions = ['Just graduated Codefellows and decide its time to learn surfing!?',
                     'How about some late night Salsa dancing at some local hot spots?',
                     'You dont need to be a good dancer to hit up Burning Man in Nevada! Are you going this summer?'
                     'main question 4.',
                     'main question 5.'];

var altQuestions = ['Youve ended up surfing in Australia! Funny how those little ideas grow. Are you ready to go get a coding job or get lost somewhere else?',
                    'You only live once you remember Switzerland sounded cool in Hemingways A Farewell To Arms, you even decide cross the border on a boat from Bavaria in Germany only to be met by a customs offiial who hates Americans! he glares at you, " what is your business in Switzerland!?" ',
                    'PhewWWf! The customs officer agrees with how beautiful Switzerland is and lets you in. Youre visit in Switzerland was awesome, but now youve decided to make traveling your job by adding some skills to go along with coding. '
                    'alternate question 4 (redirect from question 4).',
                    'alternate question 5 (redirect from question 5).'];

var mainAnswers = [
  ['Nah Brah', 'Heck yea! Let me go grab my wetsuit and board', 'huh? Surfing is for hippies. Im a programmer! 3'],
  ['i cant dance', 'Im ready to make the dance floor even hotter!', 'I write code..thats about a artsy as i get'],
  ['Im going to play it safe and go back to my desk job!', 'Switzerland sounds like a plan if I can make it past their customs officials!', 'Youll hit Burning man up, but thats about as much adventure as you want in life right now..']
  ['main answer 1', 'main answer 2', 'main answer 3'],
  ['main answer 1', 'main answer 2', 'main answer 3']];

var altAnswers = [
  ['Ive had my fun and am ready to join the rat race with that office life', 'I hear the Swiss Alps calling!', ' vous parlez francais?'],
  ['My business, sir, is tearing up the Alps with my skis/snowboard', 'I want to see your beautiful countryside', 'Isnt it obvious? You guys are consistently topping the quality of life index!'],
  ['Photography! I can totally develop my own portfolio ', 'Language! Ive always wanted to teach English as a second language and I can develop my own virtual resume', 'Yacht mate, I can use my coding skills to entice a rich yacht owner to hire me on to cruise the med and do his busy work']
  ['alt answer 1', 'alt answer 2', 'alt answer 3'],
  ['alt answer 1', 'alt answer 2', 'alt answer 3']];

var sectionEl = document.getElementById('game-content');

//CONSTRUCTOR FUNCTION
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

function sortAnswers(answers) {
  var newAnswers = [];
  var randNum = Math.floor((Math.random() * 6) + 1);

  if (randNum === 1) {
    newAnswers.push(answers[i][0]);
    newAnswers.push(answers[i][1]);
    newAnswers.push(answers[i][2]);
  } else if (randNum === 2) {
    newAnswers.push(answers[i][0]);
    newAnswers.push(answers[i][2]);
    newAnswers.push(answers[i][1]);
  } else if (randNum === 3) {
    newAnswers.push(answers[i][1]);
    newAnswers.push(answers[i][0]);
    newAnswers.push(answers[i][2]);
  } else if (randNum === 4) {
    newAnswers.push(answers[i][1]);
    newAnswers.push(answers[i][2]);
    newAnswers.push(answers[i][0]);
  } else if (randNum === 5) {
    newAnswers.push(answers[i][2]);
    newAnswers.push(answers[i][0]);
    newAnswers.push(answers[i][1]);
  } else {
    newAnswers.push(answers[i][2]);
    newAnswers.push(answers[i][1]);
    newAnswers.push(answers[i][0]);
  }
  return newAnswers;
};

function createLabelElement(answers, j) {
  var labelEl = document.createElement('label');
  labelEl.setAttribute('for', 'answer' + j);
  labelEl.textContent = orderedAnswers[j];
  return labelEl;
};

function createInputElement(j) {
  var inputEl = document.createElement('input');
  inputEl.setAttribute('id', 'answer' + j);
  inputEl.setAttribute('type', 'radio');
  inputEl.setAttribute('name', 'answer');
  inputEl.setAttribute('value', j);
  return inputEl;
};

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

  if (!altPath) {
    orderedAnswers = [];
    orderedAnswers = sortAnswers(mainAnswers);
    for (var j = 0; j < orderedAnswers.length; j++) {
      var labelEl = createLabelElement(orderedAnswers, j);
      var inputEl = createInputElement(j);

      formEl.appendChild(labelEl);
      formEl.appendChild(inputEl);
    }
  } else {
    orderedAnswers = [];
    orderedAnswers = sortAnswers(altAnswers);
    for (var j = 0; j < orderedAnswers.length; j++) {
      var labelEl = createLabelElement(answers, j);
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

  if (event.target[0].checked) {
    console.log(event.target[0].textContent);
    if (orderedAnswers[0] === mainStorySegments[i - 1].answerOne || orderedAnswers[0] === altStorySegments[i - 1].answerOne) {
      altPath = false;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User stayed on main path.');
      displayQuestion(mainQuestions);
      displayAnswers(mainAnswers);
    } else if (orderedAnswers[0] === mainStorySegments[i - 1].answerTwo || orderedAnswers[0] === altStorySegments[i - 1].answerTwo) {
      altPath = true;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User switched to alternate path.');
      displayQuestion(altQuestions);
      displayAnswers(altAnswers);
    } else {
      var formEl = document.getElementById('answer-form');
      var questionEl = document.getElementById('questionEl');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User has died.');
    }
  } else if (event.target[1].checked) {
    console.log(event.target[1].textContent);
    if (orderedAnswers[1] === mainStorySegments[i - 1].answerOne || orderedAnswers[1] === altStorySegments[i - 1].answerOne) {
      altPath = false;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User stayed on main path.');
      displayQuestion(mainQuestions);
      displayAnswers(mainAnswers);
    } else if (orderedAnswers[1] === mainStorySegments[i - 1].answerTwo || orderedAnswers[1] === altStorySegments[i - 1].answerTwo) {
      altPath = true;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User switched to alternate path.');
      displayQuestion(altQuestions);
      displayAnswers(altAnswers);
    } else {
      var formEl = document.getElementById('answer-form');
      var questionEl = document.getElementById('questionEl');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User has died.');
    }
  } else if (event.target[2].checked) {
    console.log(event.target[2].textContent);
    if (orderedAnswers[2] === mainStorySegments[i - 1].answerOne || orderedAnswers[2] === altStorySegments[i - 1].answerOne) {
      altPath = false;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User stayed on main path.');
      displayQuestion(mainQuestions);
      displayAnswers(mainAnswers);
    } else if (orderedAnswers[2] === mainStorySegments[i - 1].answerTwo || orderedAnswers[2] === altStorySegments[i - 1].answerTwo) {
      altPath = true;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User switched to alternate path.');
      displayQuestion(altQuestions);
      displayAnswers(altAnswers);
    } else {
      var formEl = document.getElementById('answer-form');
      var questionEl = document.getElementById('questionEl');
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      console.log('User has died.');
    }
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
  var orderedAnswers = sortAnswers(mainAnswers);
  displayQuestion(mainQuestions);
  displayAnswers(mainAnswers);
}
