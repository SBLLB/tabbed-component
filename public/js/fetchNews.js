$(document).ready(function() {

  var apiKey = "9wur7sdh84azzazdt3ye54k4";
  var guardianAPI = "https://content.guardianapis.com/search?api-key=" + apiKey;
  var guardianOptions = {
    section: "uk-news",
    format: "json"
  };

  function initialData(data) {
    console.log(data);
    var newsResults = data.response.results
    var newsFeedHTML = "";

    $.each(newsResults.slice(0,6), function(i, item) {
        newsFeedHTML += "<li>" + item.webTitle + "</li>"
    });

    console.log(newsFeedHTML);

    $('#uk-news-feed').html(newsFeedHTML);
  };

  $.getJSON(guardianAPI, guardianOptions, initialData);
})