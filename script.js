window.addEventListener('load', start);

var inputRangeRed = document.querySelector('#inputRangeRed');
var inputRangeGreen = document.querySelector('#inputRangeGreen');
var inputRangeBlue = document.querySelector('#inputRangeBlue');
var inputRed = document.querySelector('#inputRed');
var inputGreen = document.querySelector('#inputGreen');
var inputBlue = document.querySelector('#inputBlue');
var areaColorSelect = document.querySelector('#areaColorSelect');
var valueRed = 0,
  valueGreen = 0,
  valueBlue = 0;

function start() {
  console.log('Start');
  inputRangeRed.addEventListener('input', handleRangeRedValueChange);
  inputRangeGreen.addEventListener('input', handleRangeGreenValueChange);
  inputRangeBlue.addEventListener('input', handleRangeBlueValueChange);
  changeColor(valueRed, valueGreen, valueBlue);
}

function handleRangeRedValueChange(event) {
  valueRed = event.target.value;
  inputRed.value = valueRed;
  console.log('Red', valueRed);
  changeColor();
}
function handleRangeGreenValueChange(event) {
  valueGreen = event.target.value;
  inputGreen.value = valueGreen;
  console.log('Green', valueGreen);
  changeColor();
}
function handleRangeBlueValueChange(event) {
  valueBlue = event.target.value;
  inputBlue.value = valueBlue;
  console.log('Blue', valueBlue);
  changeColor();
}

function changeColor() {
  var areaColor = document.querySelector('#areaColorSelect');
  var cabColor = document.querySelector('#cabPag');
  console.log(valueRed, valueGreen, valueBlue);
  areaColor.style.backgroundColor =
    'rgb(' + [valueRed, valueGreen, valueBlue].join() + ')';
  cabColor.style.color =
    'rgb(' + [valueRed, valueGreen, valueBlue].join() + ')';

  // teste para quando o fundo ficar escuro a letra ficar branca
  if (valueRed <= 150 && valueGreen <= 150) {
    areaColor.style.color = 'rgb(255,255,255)';
  } else {
    areaColor.style.color = 'rgb(0,0,0)';
  }
}
