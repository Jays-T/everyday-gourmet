$(document).ready(function() {
    
      $("#foodSelect").change(function () {
           alert($("#foodSelect").text().toLowerCase());
            $.ajax({
                url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food="+$("#foodSelect option:selected").text().toLowerCase(),
                headers: { "x-rapidapi-host":
                    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key":
                    "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a" },
                type: "GET",
                success: function(result) { 
                    console.log(result['pairedWines']);
                    console.log(result['pairedWines'][0]);
                    console.log(result['pairedWines'][1]);
                    console.log(result['pairedWines'][2]);
                    console.log(result['pairingText']);

                    $('#suggestion-modal').modal('show'); // open/show modal
                    $('#suggestion-modal').on('shown.bs.modal', function(result){
                        $(this).find('#wine-text').empty().html('this will be your'+ $(result['pairedWines'],[0]), +'see');
                    });
                    
                },
                error: function (request, status, error) {
                    alert(request.responseText);
                }
        });
      });
});

/*
function getWine(pairingURL) {
    
    
    fetch(pairingURL, {
        method: "GET", pairingURL
        headers: {
        "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key":
            "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a",
        },
    })
        .then(response => {
            // console logs the response without any problems
    console.log(response);
    })
    .then(err => {
        console.log(err);
    });
    }

}


function getMenu() {
    let inputPrice = document.getElementById("max-price").value;
    let inputMenu = document.getElementById("my-food").value;
    let pairingURL =
        baseURL + basePrice + inputPrice + baseMenu + inputMenu;
    console.log(basePrice);
    console.log(baseMenu);
    console.log(inputPrice);
    console.log(inputMenu);
    console.log(pairingURL);
}

*/