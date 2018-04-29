var CountriesAndStates = (function() {
  function getStates(callback) {
    var url = "data/states.json";
    $.getJSON(url, function(data) {
      var listItems = '';
      $.each(data, function(key, value) {
        listItems += '<option value=' +
          value.code+ ', ' + value.name + '>' +
          value.code+ ', ' + value.name + '</option>';
      });
      callback(listItems)
    });
  }

  function getCountries(callback) {
    var url = "data/countries.json";
    $.getJSON(url, function(data) {
      var listItems = '';
      $.each(data, function(key, value) {
        listItems += '<option value=' +
          value.name+ ', ' + value.code + '>' +
          value.name+ ', ' + value.code + '</option>';
      });
      callback(listItems)
    });
  }

  return function(selectBox) {
    getStates(function(states) {
      getCountries(function(countries) {
        selectBox.append(states);
        selectBox.append(countries)
      })
    });
  }
    
})();