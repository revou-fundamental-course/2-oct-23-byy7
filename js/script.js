const temperatureForm = document.getElementById("temperature-form");
const temperatureInput = document.getElementById("temperature");
const displayResult = document.getElementById("result");
const btnReverse = document.getElementById("btn-reverse");
const btnReset = document.getElementById("btn-reset");

temperatureForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateInput(temperatureInput.value)) {
    convertToCelcius();
  } else {
    displayResult.innerText = "Masukkan suhu yang valid (Celcius).";
  }
});

btnReverse.addEventListener("click", function () {
  if (validateInput(temperatureInput.value)) {
    convertToFahrenheit();
  } else {
    displayResult.innerText = "Masukkan suhu yang valid (Fahrenheit).";
  }
});

btnReset.addEventListener("click", function () {
  temperatureInput.value = "";
  displayResult.innerText = "";
});

function validateInput(input) {
  const inputPattern = /^-?\d*\.?\d+$/;
  return inputPattern.test(input);
}

function convertToCelcius() {
  const celcius = parseFloat(temperatureInput.value);
  const fahrenheit = (celcius * 9) / 5 + 32;
  displayResult.innerText = `Hasil Konversi: ${celcius} Celcius = ${fahrenheit.toFixed(2)} Fahrenheit`;
}

function convertToFahrenheit() {
  const fahrenheit = parseFloat(temperatureInput.value);
  const celcius = ((fahrenheit - 32) * 5) / 92;
  displayResult.innerText = `Hasil Konversi: ${fahrenheit} Fahrenheit = ${celcius.toFixed(2)} Celcius`;
}
