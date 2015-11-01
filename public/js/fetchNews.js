$(document).ready(function() {

  var apiKey = "9wur7sdh84azzazdt3ye54k4";
  var guardianAPI = "https://content.guardianapis.com/search?api-key=" + apiKey;
  var guardianOptions = {
    section: "uk-news",
    format: "json"
  };

  function initialData(data) {
    console.log(data);
  };

  $.getJSON(guardianAPI, guardianOptions, initialData);
})