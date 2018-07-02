var main         = document.getElementById('main');
var column       = document.getElementsByClassName('column');
var columnNumber = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (var i = 1; i <= 150; i++) {

  var string = document.createElement('p');
  var random = getRandomInt(1000000000, 9999999999);
  string.className = 'password';
  string.innerHTML = random;
  column[columnNumber].appendChild(string);

  if (i % 30 == 0) {
    columnNumber++;
  }

}
