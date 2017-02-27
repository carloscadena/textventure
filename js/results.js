'use strict';

var tableEl = document.getElementById('highscore-table');
// Declaring dev scores
function DevScore (user, points) {
  this.user = user;
  this.points = points;
};

var ben = new DevScore('Ben', -5);
var james = new DevScore('James', 45);
var cameron = new DevScore('Cameron', 15);
var carlos = new DevScore('Carlos', 25);

var scores = [ben, james, cameron, carlos];

console.dir(scores);

// taking in the user score.
var user = JSON.parse(localStorage.user);
console.log(user);
scores.push(user);
console.log(scores);

//sorting the scores
scores.sort(function (a, b) {
  return b.points - a.points;
});

//Make a table element helper
function tablePoint(type, tableContent, rowNode){
  var el = document.createElement(type);
  el.setContent = tableContent;
  rowNode.appendChild(el);
  return el;
}
