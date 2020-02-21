'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var $userDialog = document.querySelector('.setup');
  var userDialogDefaultY = $userDialog.style.top;
  var userDialogDefaultX = $userDialog.style.left;
  var $setupOpenButton = document.querySelector('.setup-open');
  var $setupCloseButton = $userDialog.querySelector('.setup-close');
  var $userNameField = $userDialog.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if ((evt.key === ESC_KEY) && (evt.target !== $userNameField)) {
      closePopup();
    }
  };

  var openPopup = function () {
    $userDialog.style.top = userDialogDefaultY;
    $userDialog.style.left = userDialogDefaultX;
    $userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    $userDialog.classList.add('hidden');
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

})();

(function () {
  var $userDialog = document.querySelector('.setup');
  var $dialog = $userDialog.querySelector('.upload');
  $dialog.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var isDragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      isDragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      $userDialog.style.top = ($userDialog.offsetTop - shift.y) + 'px';
      $userDialog.style.left = ($userDialog.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (isDragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          $dialog.removeEventListener('click', onClickPreventDefault);
        };
        $dialog.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
