var q = $()
var queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + q +  "&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(repsonse) {
    console.log(response);
})