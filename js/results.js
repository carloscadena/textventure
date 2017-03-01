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
  el.textContent = tableContent;
  rowNode.appendChild(el);
  console.log(el);
};

//Make Row element
function tableRow() {
  var rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
  console.log(rowEl);
  return rowEl;
};

for (var i = 0; i < scores.length; i++) {
  var row = tableRow();
  tablePoint('th', scores[i].user, row);
  tablePoint('td', scores[i].points, row);
}

function userName(scores){
  var theName = [];

  for (var i = 0; i < scores.length; i++){
    theName.push(scores[i].user);
  }
  return theName;
};

function userPoints(scores){
  var totalPoints = [];

  for (var i = 0; i < scores.length; i++){
    totalPoints.push(scores[i].points);
  }
  return totalPoints;
};

var context = document.getElementById('high-scores-graph').getContext('2d');
var eachName = userName(scores);
var allThePoints = userPoints(scores);

var chartData = {
  type: 'bar',
  data: {
    labels: eachName,
    datasets: [{
      label: 'High Scores',
      data: allThePoints,
      backgroundColor: 'lime'
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          fontSize: 24,
          fontColor: 'lime',
          beginAtZero: true
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: 24,
          fontColor: 'lime',
          beginAtZero: true
        }
      }]
    }
  }
};

var myChart = new Chart(context, chartData);
