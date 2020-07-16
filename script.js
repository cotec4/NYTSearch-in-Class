// API Key - HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB


var queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"


$.ajax( {
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    var article1,
        article2,
        article3,
})