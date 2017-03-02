'use strict';

var mainQuestions = ['Do you want to learn to surf?',
  'How about some Salsa dancing?',
  'You don’t need to dance or surf to enjoy Burning Man in Nevada! Are you going this summer?',
  'You had a Crazy week at Burning Man, in fact, you can hardly remember what happened. you do remember you have bills to pay and you code a resume that gets you hired on at a Japanese Teach English as a foreign language school!',
  'Japan is the shit! Problem is when your contract runs out the company doesn’t want to rehire you. What now?'];

var mainAnswers = [
    ['No thank you.', 'Heck yea! Let me go grab my wetsuit and board.', 'No way! Surfing is for hippies. I\'m a programmer!'],
    ['I don\’t know how to dance.', 'I\’d rather go explore Switzerland!', 'Dance like the world is ending!'],
    ['You\’ll hit Burning man up, but that’s about as much adventure as you want in life right now.', 'Switzerland sounds like a plan if I can make it past their customs officials!', 'I\’m going to play it safe and go back to my desk job!'],
    ['You sign a 6 month contract and drink a few bottles of Sake to life, health, and prosperity.', 'Something is rotten in the state of coding Silicon Valley is in desperate need of young talent willing to throw themselves into a startup and you choose to join the fray!', 'You reject the contract and join some hipster burning man tribe that drives an eco bus around the world and builds sustainable housing for indigenous locals.'],
    ['Start an american themed club/cafe', 'You eat massive quantities of food and start training to become a sumo Wrestler.', 'You go back to Safe, USA!']];

var altQuestions = ['You\’ve ended up surfing in Australia! Funny how those little ideas grow. Are you ready to go get a coding job or get lost somewhere else?',
  'You decide to travel to Switzerland and are met by a customs official who glares at you and asks, \"What is your business in Switzerland!?\"',
  'PhewWWf! The customs officer seemed to be in a good mood and lets you in. Your visit in Switzerland was awesome, but now you’ve decided to do some work.',
  'You got hired on at a startup specialising in… what do you do?'];

var altAnswers = [
  ['Some of your new surfing bro\’s are heading to burning man in the summer, go with them.', 'I hear the Swiss Alps calling!', 'Vous parlez francais?'],
  ['I don\’t have to deal with this guy, i can still meet up the Surfers at burning man.', 'I want to see your beautiful countryside.', 'My business is my business, i don\'t have to tell you!'],
  ['A company in Japan is hiring.', 'A local startup is hiring, you’re not quite sure what for but hey, what could go wrong?', 'Yacht mate, I can use my coding skills to entice a rich yacht owner to hire me on to cruise the med and do his busy work.'],
  ['Work hard and make it to the top of the food chain at the company.', 'Quit and try your luck as a serial entrepreneur.', 'Decide coding is not for you and fall back on your previous career.']];

var mainImagePaths = ['img/swissMountains.jpg', 'img/Swiss.jpg', 'img/swissMountains.jpg', 'img/Carlos.jpg', 'img/Carlos.jpg'];

var altImagePaths = ['img/Kangaroo.jpg', 'img/GOT.jpg', 'img/bridge.jpg', 'img/Carlos.jpg'];

var sectionEl = document.getElementById('game-content');

//CONSTRUCTOR FUNCTION
function StorySegment(question, answers, imagePath, pointValue) {
  this.question = question;
  this.answerOne = answers[0];
  this.answerTwo = answers[1];
  this.answerThree = answers[2];
  this.image = imagePath;
  this.points = pointValue;
};

//FUNCTION DECLARATIONS
function sortAnswers() {
  var newAnswers = [];
  var randNum = Math.floor((Math.random() * 6) + 1);
  if (!altPath) {
    if (randNum === 1) {
      newAnswers.push(mainStorySegments[i].answerOne);
      newAnswers.push(mainStorySegments[i].answerTwo);
      newAnswers.push(mainStorySegments[i].answerThree);
    } else if (randNum === 2) {
      newAnswers.push(mainStorySegments[i].answerOne);
      newAnswers.push(mainStorySegments[i].answerThree);
      newAnswers.push(mainStorySegments[i].answerTwo);
    } else if (randNum === 3) {
      newAnswers.push(mainStorySegments[i].answerTwo);
      newAnswers.push(mainStorySegments[i].answerOne);
      newAnswers.push(mainStorySegments[i].answerThree);
    } else if (randNum === 4) {
      newAnswers.push(mainStorySegments[i].answerTwo);
      newAnswers.push(mainStorySegments[i].answerThree);
      newAnswers.push(mainStorySegments[i].answerOne);
    } else if (randNum === 5) {
      newAnswers.push(mainStorySegments[i].answerThree);
      newAnswers.push(mainStorySegments[i].answerOne);
      newAnswers.push(mainStorySegments[i].answerTwo);
    } else {
      newAnswers.push(mainStorySegments[i].answerThree);
      newAnswers.push(mainStorySegments[i].answerTwo);
      newAnswers.push(mainStorySegments[i].answerOne);
    }
  } else {
    if (randNum === 1) {
      newAnswers.push(altStorySegments[i - 1].answerOne);
      newAnswers.push(altStorySegments[i - 1].answerTwo);
      newAnswers.push(altStorySegments[i - 1].answerThree);
    } else if (randNum === 2) {
      newAnswers.push(altStorySegments[i - 1].answerOne);
      newAnswers.push(altStorySegments[i - 1].answerThree);
      newAnswers.push(altStorySegments[i - 1].answerTwo);
    } else if (randNum === 3) {
      newAnswers.push(altStorySegments[i - 1].answerTwo);
      newAnswers.push(altStorySegments[i - 1].answerOne);
      newAnswers.push(altStorySegments[i - 1].answerThree);
    } else if (randNum === 4) {
      newAnswers.push(altStorySegments[i - 1].answerTwo);
      newAnswers.push(altStorySegments[i - 1].answerThree);
      newAnswers.push(altStorySegments[i - 1].answerOne);
    } else if (randNum === 5) {
      newAnswers.push(altStorySegments[i - 1].answerThree);
      newAnswers.push(altStorySegments[i - 1].answerOne);
      newAnswers.push(altStorySegments[i - 1].answerTwo);
    } else {
      newAnswers.push(altStorySegments[i - 1].answerThree);
      newAnswers.push(altStorySegments[i - 1].answerTwo);
      newAnswers.push(altStorySegments[i - 1].answerOne);
    }
  }

  return newAnswers;
};

function createLabelElement(j) {
  var label = document.createElement('label');
  label.setAttribute('for', 'answer' + j);
  label.textContent = orderedAnswers[j];
  return label;
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
    mainSegments.push(new StorySegment(mainQuestions[i], mainAnswers[i], mainImagePaths[i], 10));
  }
  return mainSegments;
};

function createAltStorySegments() {
  var altSegments = [];
  for (var i = 0; i < altQuestions.length; i++) {
    altSegments.push(new StorySegment(altQuestions[i], altAnswers[i], altImagePaths[i], 5));
  }
  return altSegments;
};

function displayVictoryMessage() {
  var sectionEl = document.getElementById('game-content');
  var messageEl = document.createElement('p');
  messageEl.setAttribute('id', 'victory-message');
  messageEl.textContent = 'YOU WON! Thank you for trying our text-adventure! Click on the results link to see how you did compared to the other players!';
  sectionEl.appendChild(messageEl);
};

function displayGameOver() {
  var sectionEl = document.getElementById('game-content');
  var messageEl = document.createElement('p');
  messageEl.setAttribute('id', 'game-over-message');
  messageEl.textContent = 'I\'m very sorry, it appears that the last choice you made killed you.';
  sectionEl.appendChild(messageEl);
};

function displayQuestion(question) {
  var figureEl = document.createElement('figure');
  figureEl.setAttribute('id', 'image-container');
  var imageEl = document.createElement('img');
  imageEl.setAttribute('id', 'question-image');
  var el = document.createElement('p');
  el.setAttribute('id', 'questionEl');
  if (!altPath) {
    imageEl.setAttribute('src', mainStorySegments[i].image);
    el.textContent = mainStorySegments[i].question;
    console.log(mainStorySegments[i].question);
  } else {
    imageEl.setAttribute('src', altStorySegments[i - 1].image);
    el.textContent = altStorySegments[i - 1].question;
    console.log(altStorySegments[i - 1].question);
  }
  figureEl.appendChild(imageEl);
  sectionEl.appendChild(figureEl);
  sectionEl.appendChild(el);
};

function displayAnswers(answers) {
  var formEl = document.createElement('form');
  formEl.setAttribute('id', 'answer-form');

  if (!altPath) {
    orderedAnswers = [];
    orderedAnswers = sortAnswers();
    for (var j = 0; j < orderedAnswers.length; j++) {
      var labelEl = createLabelElement(j);
      var inputEl = createInputElement(j);

      formEl.appendChild(labelEl);
      formEl.appendChild(inputEl);
    }
  } else {
    orderedAnswers = [];
    orderedAnswers = sortAnswers();
    for (var j = 0; j < orderedAnswers.length; j++) {
      var labelEl = createLabelElement(j);
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
  var figureEl = document.getElementById('image-container');
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
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      User.points += 10;
      if (i === questionLimit) {
        localStorage.user = JSON.stringify(User);
        console.log('User has completed the text adventure.');
        displayVictoryMessage();
      } else {
        console.log('User stayed on main path.');
        displayQuestion(mainQuestions);
        displayAnswers(mainAnswers);
      }
    } else if (orderedAnswers[0] === mainStorySegments[i - 1].answerTwo || orderedAnswers[0] === altStorySegments[i - 1].answerTwo) {
      altPath = true;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      User.points += 5;
      if (i === questionLimit) {
        localStorage.user = JSON.stringify(User);
        console.log('User has completed the text adventure.');
        displayVictoryMessage();
      } else {
        console.log('User switched to alternate path.');
        displayQuestion(altQuestions);
        displayAnswers(altAnswers);
      }
    } else {
      var formEl = document.getElementById('answer-form');
      var questionEl = document.getElementById('questionEl');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      localStorage.user = JSON.stringify(User);
      console.log('User has died.');
      console.log('user score = ' + User.points);
      displayGameOver();
    }
  } else if (event.target[1].checked) {
    console.log(event.target[1].textContent);
    if (orderedAnswers[1] === mainStorySegments[i - 1].answerOne || orderedAnswers[1] === altStorySegments[i - 1].answerOne) {
      altPath = false;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      User.points += 10;
      if (i === questionLimit) {
        localStorage.user = JSON.stringify(User);
        console.log('User has completed the text adventure.');
        displayVictoryMessage();
      } else {
        console.log('User stayed on main path.');
        displayQuestion(mainQuestions);
        displayAnswers(mainAnswers);
      }
    } else if (orderedAnswers[1] === mainStorySegments[i - 1].answerTwo || orderedAnswers[1] === altStorySegments[i - 1].answerTwo) {
      altPath = true;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      User.points += 5;
      if (i === questionLimit) {
        localStorage.user = JSON.stringify(User);
        console.log('User has completed the text adventure.');
        displayVictoryMessage();
      } else {
        console.log('User switched to alternate path.');
        displayQuestion(altQuestions);
        displayAnswers(altAnswers);
      }
    } else {
      var formEl = document.getElementById('answer-form');
      var questionEl = document.getElementById('questionEl');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      localStorage.user = JSON.stringify(User);
      console.log('User has died.');
      console.log('user score = ' + User.points);
      displayGameOver();
    }
  } else if (event.target[2].checked) {
    console.log(event.target[2].textContent);
    if (orderedAnswers[2] === mainStorySegments[i - 1].answerOne || orderedAnswers[2] === altStorySegments[i - 1].answerOne) {
      altPath = false;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      User.points += 10;
      if (i === questionLimit) {
        localStorage.user = JSON.stringify(User);
        console.log('User has completed the text adventure.');
        displayVictoryMessage();
      } else {
        console.log('User stayed on main path.');
        displayQuestion(mainQuestions);
        displayAnswers(mainAnswers);
      }
    } else if (orderedAnswers[2] === mainStorySegments[i - 1].answerTwo || orderedAnswers[2] === altStorySegments[i - 1].answerTwo) {
      altPath = true;
      var questionEl = document.getElementById('questionEl');
      var formEl = document.getElementById('answer-form');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      User.points += 5;
      if (i === questionLimit) {
        localStorage.user = JSON.stringify(User);
        console.log('User has completed the text adventure.');
        displayVictoryMessage();
      } else {
        console.log('User switched to alternate path.');
        displayQuestion(altQuestions);
        displayAnswers(altAnswers);
      }
    } else {
      var formEl = document.getElementById('answer-form');
      var questionEl = document.getElementById('questionEl');
      sectionEl.removeChild(figureEl);
      sectionEl.removeChild(questionEl);
      sectionEl.removeChild(formEl);
      localStorage.user = JSON.stringify(User);
      console.log('User has died.');
      console.log('user score = ' + User.points);
      displayGameOver();
    }
  }
};

//------------------TEST APPLICATION------------------
var i = 0;
var altPath = false;
var questionLimit = mainQuestions.length;

var mainStorySegments = createMainStorySegments();
console.log(mainStorySegments);

var altStorySegments = createAltStorySegments();
console.log(altStorySegments);

var User = JSON.parse(localStorage.user);

var orderedAnswers = sortAnswers();
displayQuestion(mainQuestions);
displayAnswers(mainAnswers);
