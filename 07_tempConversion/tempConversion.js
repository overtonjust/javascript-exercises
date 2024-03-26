const convertToCelsius = function(fahrenheit) {
  //  fahrenheit to celsius => (fahrenheit - 32) / 1.8 
  return Number(((fahrenheit - 32) / 1.8).toFixed(1));

};

const convertToFahrenheit = function(celsius) {
  // celsius to fahrenheit => (celsius * 1.8) + 32
  return Number(((celsius * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
