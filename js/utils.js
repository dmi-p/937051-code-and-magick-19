'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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

  var renderColoredFigure = function (ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    return ctx;
  };

  var renderColoredText = function (ctx, text, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    return ctx;
  };

  var getRandomColor = function () {
    var randomSaturation = Math.floor(Math.random() * 100);
    return 'hsl(240,' + randomSaturation + '%,' + '50%)';
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.utils = {
    generateRandomElementOfArray: generateRandomElementOfArray,
    renderColoredFigure: renderColoredFigure,
    renderColoredText: renderColoredText,
    getRandomColor: getRandomColor,
    getMaxElement: getMaxElement,
    generateName: generateName,
    generateCoat: generateCoat,
    generateEyes: generateEyes,
    generateFireball: generateFireball,
    wizards: wizards
  };
})();
