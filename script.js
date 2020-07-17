var searchTerm = document.getElementById("search-term");
var numRecords = document.getElementById("records-number");
var searchBtn = document.getElementById("search-button");
var articles = document.getElementById("articles");
var beginDate = document.getElementById("start-year");
var endDate = document.getElementById("end-year");
var queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"


function getArticles(event) {
    event.preventDefault();

    var searchTermValue = searchTerm.value;
    var beginDateValue = beginDate.value;
    var endDateValue = endDate.value;

    queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTermValue + "&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"

    if (beginDateValue === "" && endDateValue === "") {

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            for (var i = 0; i < numRecords.value; i++) {
                var headline = response.response.docs[i].headline.main;
                var abstract = response.response.docs[i].abstract;
                var webURL = response.response.docs[i].web_url;
                var newDiv = $("<div>").addClass("articles").appendTo(articles);
                $("<h3>").text(headline).appendTo(newDiv);
                $("<p>").text(abstract).appendTo(newDiv);
                $("<a>").text(webURL).attr("href", webURL).appendTo(newDiv);
            }
        })
    }

    else if (beginDateValue !== "") {
        queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTermValue + "&begin_date=" + beginDateValue + "0101" + "&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for (var i = 0; i < numRecords.value; i++) {
                var headline = response.response.docs[i].headline.main;
                var abstract = response.response.docs[i].abstract;
                var webURL = response.response.docs[i].web_url;
                var newDiv = $("<div>").addClass("articles").appendTo(articles);
                $("<h3>").text(headline).appendTo(newDiv);
                $("<p>").text(abstract).appendTo(newDiv);
                $("<a>").text(webURL).attr("href", webURL).appendTo(newDiv);
            }
        })
    }

    else if (beginDateValue !== "" && endDateValue !== "") {
        queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTermValue + "&begin_date=" + beginDateValue + "0101" + "&end_date=" + endDateValue + "0101" + "&api-key=HwqTp5SCNfIrHYSw4JfpCnoPD7A2FeqB"
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for (var i = 0; i < numRecords.value; i++) {
                var headline = response.response.docs[i].headline.main;
                var abstract = response.response.docs[i].abstract;
                var webURL = response.response.docs[i].web_url;
                var newDiv = $("<div>").addClass("articles").appendTo(articles);
                $("<h3>").text(headline).appendTo(newDiv);
                $("<p>").text(abstract).appendTo(newDiv);
                $("<a>").text(webURL).attr("href", webURL).appendTo(newDiv);
            }
        })
    }
}

$(searchBtn).on("click", getArticles);