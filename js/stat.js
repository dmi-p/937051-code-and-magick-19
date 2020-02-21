'use strict';

(function (renderColoredFigure, renderColoredText, getRandomColor, getMaxElement) {

  window.renderStatistics = function (ctx, names, times) {
    var SCORE_CONTAINER_WIDTH = 420;
    var SCORE_CONTAINER_HEIGHT = 270;
    var SCORE_CONTAINER_X = 100;
    var SCORE_CONTAINER_Y = 10;
    var GAP = 10;
    var FONT_GAP = 15;
    var BAR_GAP = 50;
    var BAR_HEIGHT = 150;
    var BAR_WIDTH = 40;
    var SCORE_CONTAINER_COLOR = '#fff';
    var FONT_COLOR = '#000';

    var SCORE_CONTAINER_SHADOW_WIDTH = 420;
    var SCORE_CONTAINER_SHADOW_HEIGHT = 270;
    var SCORE_CONTAINER_SHADOW_X = SCORE_CONTAINER_X + GAP;
    var SCORE_CONTAINER_SHADOW_Y = SCORE_CONTAINER_Y + GAP;
    var SCORE_CONTAINER_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
    var MY_SCORE_COLOR = 'rgba(255, 0, 0, 1)';
    var SCORE_CONTAINER_FONT = '16px PT Mono';

    ctx.font = SCORE_CONTAINER_FONT;

    renderColoredFigure(
        ctx,
        SCORE_CONTAINER_SHADOW_X,
        SCORE_CONTAINER_SHADOW_Y,
        SCORE_CONTAINER_SHADOW_WIDTH,
        SCORE_CONTAINER_SHADOW_HEIGHT,
        SCORE_CONTAINER_SHADOW_COLOR
    );

    renderColoredFigure(
        ctx,
        SCORE_CONTAINER_X,
        SCORE_CONTAINER_Y,
        SCORE_CONTAINER_WIDTH,
        SCORE_CONTAINER_HEIGHT,
        SCORE_CONTAINER_COLOR
    );

    var maxScore = getMaxElement(times);
    var currentGap = GAP + FONT_GAP;
    var message = 'Ура вы победили!';
    var messageX = SCORE_CONTAINER_X + (GAP * 3);
    var messageY = SCORE_CONTAINER_Y + currentGap;
    renderColoredText(ctx, message, messageX, messageY, FONT_COLOR);
    currentGap = currentGap + GAP + FONT_GAP;

    var resultText = 'Список результатов:';
    var resultTextX = SCORE_CONTAINER_X + (GAP * 3);
    var resultTextY = SCORE_CONTAINER_Y + currentGap;
    renderColoredText(ctx, resultText, resultTextX, resultTextY, FONT_COLOR);
    currentGap = currentGap + GAP + FONT_GAP;

    for (var i = 0; i < names.length; i++) {
      var isMyScore = names[i] === 'Вы';
      var barColor = isMyScore ? MY_SCORE_COLOR : getRandomColor();
      var barX = (GAP * 3) + SCORE_CONTAINER_X + ((BAR_WIDTH + BAR_GAP) * i);
      var barY = SCORE_CONTAINER_Y + GAP + currentGap + BAR_HEIGHT;
      var barHeight = (-BAR_HEIGHT * times[i]) / maxScore;

      var textUnderBar = Math.floor(times[i]);
      var textUnderBarY = barY + (GAP * 2);
      var textOverBar = names[i];
      var textOverBarY = SCORE_CONTAINER_Y + currentGap + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxScore;
      renderColoredFigure(ctx, barX, barY, BAR_WIDTH, barHeight, barColor);
      renderColoredText(ctx, textUnderBar, barX, textUnderBarY, FONT_COLOR);
      renderColoredText(ctx, textOverBar, barX, textOverBarY, FONT_COLOR);
    }
  };

})(window.utils.renderColoredFigure,
    window.utils.renderColoredText,
    window.utils.getRandomColor,
    window.utils.getMaxElement);
