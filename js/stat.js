'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  var lineGap = GAP + FONT_GAP;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + (GAP * 3), CLOUD_Y + lineGap);
  lineGap = lineGap + GAP + FONT_GAP;
  ctx.fillText('Список результатов:', CLOUD_X + (GAP * 3), CLOUD_Y + lineGap);
  lineGap = lineGap + GAP + FONT_GAP;

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      var randomSaturation = Math.floor(Math.random() * 100);
      ctx.fillStyle = 'hsl(240,' + --randomSaturation + '%,' + '50%)';
    }
    ctx.fillRect(CLOUD_X + (GAP * 3) + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + GAP + lineGap + BAR_HEIGHT, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + (GAP * 3) + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + GAP + lineGap + BAR_HEIGHT + GAP * 2);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + (GAP * 3) + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + lineGap + BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime);
  }
};
