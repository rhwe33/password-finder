var main         = document.getElementById('main');
var column       = document.getElementsByClassName('column');
var columnNumber = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Select random password
function getRandomElement() {
  var random = getRandomInt(1, 150);
  return document.getElementsByClassName('password')[random];
}

// Generate password list
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

document.onclick = function() {
  var activePassword = document.getElementsByClassName('password active')[0];
  var newPassword    = getRandomElement();

  if (typeof(activePassword) != 'undefined' && activePassword != null) {
    activePassword.classList.remove('active');
  }
  newPassword.className += ' active';

  var coords   = newPassword.getBoundingClientRect();
  var selector = document.getElementById('selector');

  selector.style.left = coords.left + 'px';
  selector.style.top  = coords.top + 'px';

  console.log(selector.style.left);
};
