// Store individual links to search on wine.come for the various wine suggestions

const mylinks = [
    ["1", "https://www.wine.com/search/merlot/0", "https://www.wine.com/search/cabernet%20sauvignon/0", "https://www.wine.com/search/pinot%20noir/0"], 
    ["2", "https://www.wine.com/search/pinot%20grigio/0", "https://www.wine.com/search/gruener%20veltliner/0", "https://www.wine.com/search/pinot%20noir/0"], 
    ["3", "https://www.wine.com/search/chenin%20blanc/0", "https://www.wine.com/search/cru%20beaujolais/0", "https://www.wine.com/search/pinot%20noir/0"],
    ["4", "https://www.wine.com/search/chianti/0", "https://www.wine.com/search/trebbiano/0", "https://www.wine.com/search/verdicchio/0"],
    ["5", "https://www.wine.com/search/tempranillo/0", "https://www.wine.com/search/grenache/0", "https://www.wine.com/search/albarino/0"],
    ["6", "https://www.wine.com/search/bordeaux/0", "https://www.wine.com/search/champagne/0", "https://www.wine.com/search/white%20burgundy/0"],
    ["7", "https://www.wine.com/search/pinot%20noir/0", "https://www.wine.com/search/chablis/0", "https://www.wine.com/search/champagne/0"],
    ["8", "https://www.wine.com/search/lambrusco%20dolce/0", "https://www.wine.com/search/port/0", "https://www.wine.com/search/sauternes/0"],
    ["9", "https://www.wine.com/search/chardonnay/0", "https://www.wine.com/search/pinot%20noir/0", "https://www.wine.com/search/sauvignon%20blanc/0"]
];



$(document).ready(function() {
    
      $("#foodSelect").change(function () {  // check which food option is selected
           // Send the GET request to the API
            $.ajax({
                url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food="+$("#foodSelect option:selected").text().toLowerCase(),
                headers: { "x-rapidapi-host":
                    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key":
                    "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a" },
                type: "GET",
                success: function(result) { 
                    
                    $('#suggestion-modal').modal('show'); // open/show modal
                    $('#suggestion-modal').on('shown.bs.modal', function(){
                        
                        console.log($("#foodSelect option:selected").text());
                        console.log($("#foodSelect option:selected").val());
                        console.log(mylinks);

                        $(this).find('#wine-one').empty().html((result['pairedWines'][0]));
                        $(this).find('#wine-two').empty().html((result['pairedWines'][1]));
                        $(this).find('#wine-three').empty().html((result['pairedWines'][2]));
                        $(this).find('#wine-text').empty().html((result['pairingText']));
                    });
                    
                },
                error: function (request, status, error) {
                    alert(request.responseText);
                }
        });
      });
});