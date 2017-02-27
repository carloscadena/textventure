'use strict';

// New player constructor
function Player(username) {
  this.user = username;
  this.points = 0;
};

var loginEl = document.getElementById('login');

function handleLogin(event) {
  event.preventDefault();
  event.stopPropagation();

  var username = event.target.name.value;
  console.log(username);
  var user = new Player(username);
  console.log(user);

  localStorage.user = JSON.stringify(user);
  console.log(localStorage);
  event.target.name.value = '';
};

loginEl.addEventListener('submit', handleLogin);
