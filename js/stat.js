'use strict';

var renderFigure = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  return ctx;
};

var getColoredText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  return ctx;
};

var renderBar = function (ctx, x, y, barWidth, barHeight, barColor, fontColor, textUnderBar, textOverBar, textOverBarY) {
  var GAP = 10;
  renderFigure(ctx, x, y, barWidth, barHeight, barColor);
  getColoredText(ctx, textUnderBar, x, y + (GAP * 2), fontColor);
  getColoredText(ctx, textOverBar, x, textOverBarY, fontColor);
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
  var fontColor = '#000';

  var SCORE_CONTAINER_SHADOW_WIDTH = 420;
  var SCORE_CONTAINER_SHADOW_HEIGHT = 270;
  var SCORE_CONTAINER_SHADOW_X = SCORE_CONTAINER_X + GAP;
  var SCORE_CONTAINER_SHADOW_Y = SCORE_CONTAINER_Y + GAP;
  var SCORE_CONTAINER_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var MY_SCORE_COLOR = 'rgba(255, 0, 0, 1)';
  var SCORE_CONTAINER_FONT = '16px PT Mono';

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

  ctx.fillStyle = fontColor;

  var maxScore = getMaxElement(times);
  var lineGap = GAP + FONT_GAP;
  ctx.font = SCORE_CONTAINER_FONT;
  getColoredText(ctx, 'Ура вы победили!', SCORE_CONTAINER_X + (GAP * 3), SCORE_CONTAINER_Y + lineGap, fontColor);
  lineGap = lineGap + GAP + FONT_GAP;
  getColoredText(ctx, 'Список результатов:', SCORE_CONTAINER_X + (GAP * 3), SCORE_CONTAINER_Y + lineGap, fontColor);
  lineGap = lineGap + GAP + FONT_GAP;

  for (var i = 0; i < names.length; i++) {
    var isMyScore = names[i] === 'Вы';
    var barColor = isMyScore ? MY_SCORE_COLOR : getRandomColor();
    renderBar(
        ctx,
        (GAP * 3) + SCORE_CONTAINER_X + ((BAR_WIDTH + BAR_GAP) * i),
        SCORE_CONTAINER_Y + GAP + lineGap + BAR_HEIGHT,
        BAR_WIDTH,
        (-BAR_HEIGHT * times[i]) / maxScore,
        barColor,
        fontColor,
        names[i],
        Math.floor(times[i]),
        SCORE_CONTAINER_Y + lineGap + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxScore
    );
  }
};
