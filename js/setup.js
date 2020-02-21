'use strict';

(function (generateCoat, generateEyes, generateFireball, wizards) {
  var $userDialog = document.querySelector('.setup');
  var $wizardCoat = $userDialog.querySelector('.wizard-coat');
  var $wizardEyes = $userDialog.querySelector('.wizard-eyes');
  var $wizardFireball = $userDialog.querySelector('.setup-fireball-wrap');

  var changeCoat = function () {
    var $wizardCoatLabel = $userDialog.querySelector('input[name="coat-color"]');
    var currentCoatColor = generateCoat();
    $wizardCoat.style.fill = currentCoatColor;
    $wizardCoatLabel.setAttribute('value', currentCoatColor);
  };

  var changeEyes = function () {
    var $wizardEyesLabel = $userDialog.querySelector('input[name="eyes-color"]');
    var currentEyesColor = generateEyes();
    $wizardEyes.style.fill = currentEyesColor;
    $wizardEyesLabel.setAttribute('value', currentEyesColor);
  };

  var changeFireball = function () {
    var $wizardFireballLabel = $wizardFireball.querySelector('input[name="fireball-color"]');
    var currentFireballColor = generateFireball();
    $wizardFireball.style.background = currentFireballColor;
    $wizardFireballLabel.setAttribute('value', currentFireballColor);
  };

  $wizardCoat.addEventListener('click', function () {
    changeCoat();
  });

  $wizardEyes.addEventListener('click', function () {
    changeEyes();
  });

  $wizardFireball.addEventListener('click', function () {
    changeFireball();
  });

  var $wizardList = $userDialog.querySelector('.setup-similar-list');
  var $wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var $wizard = $wizardTemplate.cloneNode(true);

    $wizard.querySelector('.setup-similar-label').textContent = wizard.name;
    $wizard.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    $wizard.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return $wizard;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  $wizardList.appendChild(fragment);

  $userDialog.querySelector('.setup-similar').classList.remove('hidden');

})(window.utils.generateCoat,
    window.utils.generateEyes,
    window.utils.generateFireball,
    window.utils.wizards);
