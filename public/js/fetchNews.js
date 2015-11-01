$(document).ready(function() {

  var apiKey = "9wur7sdh84azzazdt3ye54k4";
  var guardianAPI = "https://content.guardianapis.com/search?api-key=" + apiKey;
  var guardianInitialOptions = {
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

  $.getJSON(guardianAPI, guardianInitialOptions, initialData);


  $(".news-tab").click(function() {
    var sectionSelected = event.target.id;
    var sectionContentEl = "#" + sectionSelected + "-feed";
    var guardianUpdateOptions = {
      "section": sectionSelected,
      "show-fields": "trailText",
      "format": "json"
    };
    function updateTabData(data) {
      var newsResults = data.response.results
      var newsFeedHTML = "";

      $.each(newsResults.slice(0,5), function(i, item) {
          newsFeedHTML +=   '<li> <a href="' 
                            + item.webURL + '">' 
                            + item.webTitle + '</a><p>' 
                            + item.fields.trailText + '</p></li>';
      });

      $(sectionContentEl).html(newsFeedHTML);
    };

    console.log(event.target.id);
    $.getJSON(guardianAPI, guardianUpdateOptions, updateTabData);
  })
})