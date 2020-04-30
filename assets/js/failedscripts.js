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
                    

                    $('#suggestion-modal').modal('show'); // open/show modal
                    $('#suggestion-modal').on('shown.bs.modal', function(){
                        const wineArray = (result['pairedWines']);
                        wineArray.forEach(myFunc => console.log(myFunc.charAt(0)));
                        console.log(wineArray);
                        
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