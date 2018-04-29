$(function() {
  $('#hamburgerBtn').click(function() {
    $('#primaryNav').toggleClass('hide');
  });
  CountriesAndStates($("[name='stateOrCountry']"));
  CurrentDate();
});