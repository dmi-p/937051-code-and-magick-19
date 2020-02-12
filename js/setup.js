'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var userDialog = document.querySelector('.setup');

var $setupOpenButton = document.querySelector('.setup-open');
var $setupCloseButton = userDialog.querySelector('.setup-close');
var $userNameField = userDialog.querySelector('.setup-user-name');


var onPopupEscPress = function (evt) {
  if ((evt.key === ESC_KEY) && (evt.target !== $userNameField)) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

$setupOpenButton.addEventListener('click', function () {
  openPopup();
});

$setupOpenButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

$setupCloseButton.addEventListener('click', function () {
  closePopup();
});

$setupCloseButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var wizardCoat = userDialog.querySelector('.wizard-coat');
var wizardEyes = userDialog.querySelector('.wizard-eyes');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');

var changeCoat = function () {
  var wizardCoatLabel = userDialog.querySelector('input[name="coat-color"]');
  var currentCoatColor = generateCoat();
  wizardCoat.style.fill = currentCoatColor;
  wizardCoatLabel.setAttribute('value', currentCoatColor);
};

var changeEyes = function () {
  var wizardEyesLabel = userDialog.querySelector('input[name="eyes-color"]');
  var currentEyesColor = generateEyes();
  wizardEyes.style.fill = currentEyesColor;
  wizardEyesLabel.setAttribute('value', currentEyesColor);
};

var changeFireball = function () {
  var wizardFireballLabel = wizardFireball.querySelector('input[name="fireball-color"]');
  var currentFireballColor = generateFireball();
  wizardFireball.style.background = currentFireballColor;
  wizardFireballLabel.setAttribute('value', currentFireballColor);
};

wizardCoat.addEventListener('click', function () {
  changeCoat();
});

wizardEyes.addEventListener('click', function () {
  changeEyes();
});

wizardFireball.addEventListener('click', function () {
  changeFireball();
});

var wizardListElement = userDialog.querySelector('.setup-similar-list');
var wizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var generateRandomElementOfArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateName = function () {
  var randomName = generateRandomElementOfArray(WIZARD_NAMES);
  var randomSurname = generateRandomElementOfArray(WIZARD_SURNAMES);
  return randomName + ' ' + randomSurname;
};

var generateCoat = function () {
  return generateRandomElementOfArray(COAT_COLORS);
};

var generateEyes = function () {
  return generateRandomElementOfArray(EYES_COLORS);
};

var generateFireball = function () {
  return generateRandomElementOfArray(FIREBALL_COLORS);
};


var wizards = [
  {
    name: generateName(),
    coatColor: generateCoat(),
    eyesColor: generateEyes()
  },
  {
    name: generateName(),
    coatColor: generateCoat(),
    eyesColor: generateEyes()
  },
  {
    name: generateName(),
    coatColor: generateCoat(),
    eyesColor: generateEyes()
  },
  {
    name: generateName(),
    coatColor: generateCoat(),
    eyesColor: generateEyes()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplateElement.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
wizardListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
