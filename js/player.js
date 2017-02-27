'use strict';

// New player constructor
function Player(username) {
  this.user = username;
  points = 0;
};

var loginEl = document.getElementById('login');

function handleLogin(event) {
  event.preventDefault();
  event.stopPropagation();

  var user = event.target.name.value;
  console.log(user);
  user = new Player(user);
  console.log(user);
};

addEventListener(loginEl, handleLogin);
