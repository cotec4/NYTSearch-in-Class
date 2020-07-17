var searchTerm = document.getElementById("search-term");
// searchTerm.textContent = "Atlanta";
var numRecords = document.getElementById("records-number");
// numRecords.textContent = "4";
var searchBtn = document.getElementById("search-button");
var articles = document.getElementById("articles");


var queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"


function getArticles(event) {
    event.preventDefault();
    
    var searchTermValue = searchTerm.value;
    
    queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTermValue + "&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"
        
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        console.log(numRecords.value);
        for (var i = 0; i < numRecords.value; i++) {
            var headline = response.response.docs[i].headline.main;
            var abstract = response.response.docs[i].abstract;
            var webURL = response.response.docs[i].web_url;
            var newDiv = $("<div>").addClass("articles").appendTo(articles);
            $("<h3>").text(headline).appendTo(newDiv)   ;
            $("<p>").text(abstract).appendTo(newDiv);
            $("<a>").text(webURL).attr("href",webURL).appendTo(newDiv);
        }
    })
}

var beginDate = document.getElementById("start-year");
// Make whatever value that appears concate with 0101
beginDate.textContent = "";
var endDate = document.getElementById("end-year");
// Make whatever value that appears concate with 0101
endDate.textContent = "";

if (beginDate.textContent !== "") {
    queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm.textContent + "&begin_date=" + beginDate.textContent + "0101" + "&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}
else if (beginDate.textContent !== "" && endDate.textContent !== "") {
    queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm.textContent + "&begin_date=" + beginDate.textContent + "0101" + "&end_date=" + endDate.textContent + "0101" + "&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })
}

$(searchBtn).on("click", getArticles);