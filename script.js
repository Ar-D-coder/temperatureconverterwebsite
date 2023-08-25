
document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperature");
  const unitFromSelect = document.getElementById("unitFrom");
  const convertToCelsiusButton = document.getElementById("convertToCelsius");
  const convertToFahrenheitButton = document.getElementById("convertToFahrenheit");
  const convertToKelvinButton = document.getElementById("convertToKelvin");
  const resultDiv = document.getElementById("result");

  convertToCelsiusButton.addEventListener("click", function () {
    performConversion("celsius");
  });

  convertToFahrenheitButton.addEventListener("click", function () {
    performConversion("fahrenheit");
  });

  convertToKelvinButton.addEventListener("click", function () {
    performConversion("kelvin");
  });

  function performConversion(targetUnit) {
    const inputValue = parseFloat(temperatureInput.value);
    const unitFrom = unitFromSelect.value;

    if (isNaN(inputValue)) {
      resultDiv.innerText = "Please enter a valid number.";
      return;
    }

    let resultValue;
    let resultUnit;

    if (unitFrom === "celsius") {
      resultValue = convertCelsius(inputValue, targetUnit);
      resultUnit = getUnitSymbol(targetUnit);
    } else if (unitFrom === "fahrenheit") {
      resultValue = convertFahrenheit(inputValue, targetUnit);
      resultUnit = getUnitSymbol(targetUnit);
    } else if (unitFrom === "kelvin") {
      resultValue = convertKelvin(inputValue, targetUnit);
      resultUnit = getUnitSymbol(targetUnit);
    }

    resultDiv.innerHTML = `Converted temperature: <span class="animated">${resultValue} ${resultUnit}</span>`;
    animateResult();
  }

  function getUnitSymbol(unit) {
    if (unit === "celsius") {
      return "°C";
    } else if (unit === "fahrenheit") {
      return "°F";
    } else if (unit === "kelvin") {
      return "K";
    }
  }

  function convertCelsius(celsius, targetUnit) {
    if (targetUnit === "celsius") {
      return celsius;
    } else if (targetUnit === "fahrenheit") {
      return (celsius * 9/5) + 32;
    } else if (targetUnit === "kelvin") {
      return celsius + 273.15;
    }
  }

  function convertFahrenheit(fahrenheit, targetUnit) {
    if (targetUnit === "celsius") {
      return (fahrenheit - 32) * 5/9;
    } else if (targetUnit === "fahrenheit") {
      return fahrenheit;
    } else if (targetUnit === "kelvin") {
      return (fahrenheit - 32) * 5/9 + 273.15;
    }
  }

  function convertKelvin(kelvin, targetUnit) {
    if (targetUnit === "celsius") {
      return kelvin - 273.15;
    } else if (targetUnit === "fahrenheit") {
      return (kelvin - 273.15) * 9/5 + 32;
    } else if (targetUnit === "kelvin") {
      return kelvin;
    }
  }

  function animateResult() {
    const animatedElement = document.querySelector(".animated");
    animatedElement.classList.add("fadeIn");
    setTimeout(() => {
      animatedElement.classList.remove("fadeIn");
    }, 1000);
  }
});

