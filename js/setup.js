'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
