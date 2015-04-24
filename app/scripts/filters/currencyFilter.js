//todo cleanup code

// To declare a filter we pass in two parameters to app.filter

// The first parameter is the name of the filter
// second is a function that will return another function that does the actual work of the filter

angular.module('vodaApp').filter('currency', function() {
  var defaultCurrency = '$';
  return function(input, currencySymbol) {
    var out = "";
    currencySymbol = currencySymbol || defaultCurrency;

    switch(currencySymbol) {
      case '£':
        out = 0.609273137 * input; // google
        break;

      case 'USD$':
        out = 1 * input; // google
        break;

      case 'AUD$':
        out = 1.29 * input; // google
        break;

      case 'EUR€':
        out = 0.93 * input; // google
        break;

      default:
        out = input;
    }

    return currencySymbol + ' ' +out;
  }
});
