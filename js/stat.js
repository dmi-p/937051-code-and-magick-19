'use strict';

var renderFigure = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  return ctx;
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

  var SCORE_CONTAINER_SHADOW_WIDTH = 420;
  var SCORE_CONTAINER_SHADOW_HEIGHT = 270;
  var SCORE_CONTAINER_SHADOW_X = SCORE_CONTAINER_X + GAP;
  var SCORE_CONTAINER_SHADOW_Y = SCORE_CONTAINER_Y + GAP;
  var SCORE_CONTAINER_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var MY_SCORE_COLOR = 'rgba(255, 0, 0, 1)';
  var SCORE_CONTAINER_FONT = '16px PT Mono';

  var getRandomColor = function () {
    var randomSaturation = Math.floor(Math.random() * 100);
    return 'hsl(240,' + randomSaturation + '%,' + '50%)';
  };

  renderFigure(
      ctx,
      SCORE_CONTAINER_SHADOW_X,
      SCORE_CONTAINER_SHADOW_Y,
      SCORE_CONTAINER_SHADOW_WIDTH,
      SCORE_CONTAINER_SHADOW_HEIGHT,
      SCORE_CONTAINER_SHADOW_COLOR
  );

  renderFigure(
      ctx,
      SCORE_CONTAINER_X,
      SCORE_CONTAINER_Y,
      SCORE_CONTAINER_WIDTH,
      SCORE_CONTAINER_HEIGHT,
      SCORE_CONTAINER_COLOR
  );

  ctx.fillStyle = '#000';

  var maxScore = getMaxElement(times);
  var lineGap = GAP + FONT_GAP;
  ctx.font = SCORE_CONTAINER_FONT;
  ctx.fillText('Ура вы победили!', SCORE_CONTAINER_X + (GAP * 3), SCORE_CONTAINER_Y + lineGap);
  lineGap = lineGap + GAP + FONT_GAP;
  ctx.fillText('Список результатов:', SCORE_CONTAINER_X + (GAP * 3), SCORE_CONTAINER_Y + lineGap);
  lineGap = lineGap + GAP + FONT_GAP;

  var renderBar = function (barColor, fontColor, textUnderBar, textOverBar, barWidth, barHeight) {
    ctx.fillStyle = barColor;
    ctx.fillRect((GAP * 3) + SCORE_CONTAINER_X + ((barWidth + BAR_GAP) * i), SCORE_CONTAINER_Y + GAP + lineGap + barHeight, barWidth, (-barHeight * times[i]) / maxScore);
    ctx.fillStyle = fontColor;
    ctx.fillText(textUnderBar, SCORE_CONTAINER_X + (GAP * 3) + ((barWidth + BAR_GAP) * i), SCORE_CONTAINER_Y + GAP + lineGap + barHeight + GAP * 2);
    ctx.fillText(Math.floor(textOverBar), SCORE_CONTAINER_X + (GAP * 3) + ((barWidth + BAR_GAP) * i), SCORE_CONTAINER_Y + lineGap + barHeight - (barHeight * times[i]) / maxScore);
  };

  for (var i = 0; i < names.length; i++) {
    var isMyScore = names[i] === 'Вы';
    var barColor = isMyScore ? MY_SCORE_COLOR : getRandomColor();
    renderBar(barColor, '#000', names[i], times[i], BAR_WIDTH, BAR_HEIGHT);
  }
};
