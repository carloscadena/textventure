'use strict';

function DevScore (user, points) {
  this.user = user;
  this.points = points;
};

var ben = new DevScore('Ben', 50);
var james = new DevScore('James', 45);
var cameron = new DevScore('Cameron', 15);
var carlos = new DevScore('Carlos', 25);

var scores = [ben, james, cameron, carlos];

console.log(scores);
scores.sort(function (a, b) {
  return b.points - a.points;
});
// console.log(scores);
