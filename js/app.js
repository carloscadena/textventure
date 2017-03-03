'use strict';

var mainQuestions = ['You find yourself in a galaxy far far away on the planet Tatooine, how would you like to begin.',
  'As you approach the race track, you find a variety of shops.',
  'You bump into an angry bounty hunter, he offers you 2 options.',
  'You find yourself inisde of a Pod Racer\'s garage, the Pod Racer looks like complete shit. Things are broken and scattered everywhere.',
  'A group of refugees is passing by headded for a transport ship headded offworld.'];

var mainAnswers = [
    ['Go see a pod race.', 'Go to Jabba the Hut\'s palace.', 'Find Obi-wan Kenobi.'],
    ['Go checkout the Bazzar', 'You ask a seeming harmless man for directions to the best hangout on Tatooine.', 'Engage in combat with a Jawa.'],
    ['Enter in a Pod Race.', 'Go with him to Jabba\'s khetanna.', 'Try and get away.'],
    ['Back out of the race and live.', 'Take it for a test run.', 'Trust your gut and go anyway.'],
    ['Try and blend in and follow the group.', 'Gandalf is looking for someone to join him on an adventure.', 'Someone named Tyrion Lanister is looking for some help.']];

var mainImagePaths = ['img/surfGirl.jpg', 'img/Swiss.jpg', 'img/swissMountains.jpg', 'img/daryan-shamkali-133233.jpg', 'img/tycho-atsma-181053.jpg'];

var altQuestions = ['At the entrace to Jabba\'s Palace and angry pig man guards the door.',
  'Inside Jabba\'s Palace a varitey of people are standing around drinking.', 'Jabba doesn\'t like stowaways so he gives you and ultimatum.',
  'You wander in the desert, dehydrated and cold. What do you do.'];

var altAnswers = [
  ['Follow a stanger in Mandalorian Armor.', 'Bribe the guard.', 'Wave your hand infront of the guards face and say \"You will let me into the club\"'],
  ['A shifty mechanic has a Pod Racing propisition for you.', 'Go with the group headded to Jabba\'s khetanna.', 'Check out the cool animals.'],
  ['Steal a sand speeder and head to Mos Eisley.', 'Jump off and try to run.', 'Wear a golden bikini for the rest of your life.'],
  ['Become one with the force.', 'Pull out your communicator and tell Scotty to beam you up.', 'Follow the shimmering Oasis.']];

var altImagePaths = ['img/Kangaroo.jpg', 'img/GOT.jpg', 'img/bridge.jpg', 'img/breather-187939.jpg'];

var sectionEl = document.getElementById('game-content');

//CONSTRUCTOR FUNCTION
function StorySegment(question, answers, imagePath) {
  this.question = question;
  this.answerOne = answers[0];
  this.answerTwo = answers[1];
  this.answerThree = answers[2];
  this.image = imagePath;
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
      newAnswers.push(altStorySegments[i].answerOne);
      newAnswers.push(altStorySegments[i].answerTwo);
      newAnswers.push(altStorySegments[i].answerThree);
    } else if (randNum === 2) {
      newAnswers.push(altStorySegments[i].answerOne);
      newAnswers.push(altStorySegments[i].answerThree);
      newAnswers.push(altStorySegments[i].answerTwo);
    } else if (randNum === 3) {
      newAnswers.push(altStorySegments[i].answerTwo);
      newAnswers.push(altStorySegments[i].answerOne);
      newAnswers.push(altStorySegments[i].answerThree);
    } else if (randNum === 4) {
      newAnswers.push(altStorySegments[i].answerTwo);
      newAnswers.push(altStorySegments[i].answerThree);
      newAnswers.push(altStorySegments[i].answerOne);
    } else if (randNum === 5) {
      newAnswers.push(altStorySegments[i].answerThree);
      newAnswers.push(altStorySegments[i].answerOne);
      newAnswers.push(altStorySegments[i].answerTwo);
    } else {
      newAnswers.push(altStorySegments[i].answerThree);
      newAnswers.push(altStorySegments[i].answerTwo);
      newAnswers.push(altStorySegments[i].answerOne);
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
    mainSegments.push(new StorySegment(mainQuestions[i], mainAnswers[i], mainImagePaths[i]));
  }
  return mainSegments;
};

function createAltStorySegments() {
  var altSegments = [''];
  for (var i = 0; i < altQuestions.length; i++) {
    altSegments.push(new StorySegment(altQuestions[i], altAnswers[i], altImagePaths[i]));
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
  messageEl.textContent = 'We are very sorry, but you lose, good day sir and/or madam.  Good Day.';
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
    imageEl.setAttribute('src', altStorySegments[i].image);
    el.textContent = altStorySegments[i].question;
    console.log(altStorySegments[i].question);
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
      var divEl = document.createElement('div');
      divEl.setAttribute('class', 'answers');
      var labelEl = createLabelElement(j);
      var inputEl = createInputElement(j);

      divEl.appendChild(labelEl);
      divEl.appendChild(inputEl);
      formEl.appendChild(divEl);
    }
  } else {
    orderedAnswers = [];
    orderedAnswers = sortAnswers();
    for (var j = 0; j < orderedAnswers.length; j++) {
      var divEl = document.createElement('div');
      divEl.setAttribute('class', 'answers');
      var labelEl = createLabelElement(j);
      var inputEl = createInputElement(j);

      divEl.appendChild(labelEl);
      divEl.appendChild(inputEl);
      formEl.appendChild(divEl);
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
  var figureEl = document.getElementById('image-container');
  var answerOneEl = document.getElementById('answer0');
  var answerTwoEl = document.getElementById('answer1');
  var answerThreeEl = document.getElementById('answer2');
  var userAnswerId = event.target[0].checked;

  if (event.target[0].checked) {
    console.log(event.target[0].textContent);
    if (orderedAnswers[0] === mainStorySegments[i].answerOne || orderedAnswers[0] === altStorySegments[i].answerOne) {
      altPath = false;
      i++;
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
    } else if (orderedAnswers[0] === mainStorySegments[i].answerTwo || orderedAnswers[0] === altStorySegments[i].answerTwo) {
      altPath = true;
      i++;
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
    if (orderedAnswers[1] === mainStorySegments[i].answerOne || orderedAnswers[1] === altStorySegments[i].answerOne) {
      altPath = false;
      i++;
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
    } else if (orderedAnswers[1] === mainStorySegments[i].answerTwo || orderedAnswers[1] === altStorySegments[i].answerTwo) {
      altPath = true;
      i++;
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
    if (orderedAnswers[2] === mainStorySegments[i].answerOne || orderedAnswers[2] === altStorySegments[i].answerOne) {
      altPath = false;
      i++;
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
    } else if (orderedAnswers[2] === mainStorySegments[i].answerTwo || orderedAnswers[2] === altStorySegments[i].answerTwo) {
      altPath = true;
      i++;
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
