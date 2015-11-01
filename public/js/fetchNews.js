$(document).ready(function() {

  var apiKey = "9wur7sdh84azzazdt3ye54k4";
  var guardianAPI = "https://content.guardianapis.com/search?api-key=" + apiKey;
  var guardianOptions = {
    section: "uk-news",
    "show-fields": "trailText",
    format: "json"
  };

  function initialData(data) {
    var newsResults = data.response.results
    var newsFeedHTML = "";

    $.each(newsResults.slice(0,5), function(i, item) {
        newsFeedHTML +=   '<li> <a href="' 
                          + item.webURL + '">' 
                          + item.webTitle + '</a><p>' 
                          + item.fields.trailText + '</p></li>';
    });

    $('#uk-news-feed').html(newsFeedHTML);
  };

  $.getJSON(guardianAPI, guardianOptions, initialData);
})