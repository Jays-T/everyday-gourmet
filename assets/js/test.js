$(".chat-box-textarea_2V28W").click(function () {
  console.log($(".chat-box-textarea_2V28W").val());
});

    /* 
    
    const URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?" + inputPrice + inputMenu;

    var inputPrice = "maxPrice=" + document.getElementById("max-price").value;
    var inputMenu = "&food=" + document.getElementById("my-food").value;

      function getWine() {
        fetch(
          URL,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
              "x-rapidapi-key":
                "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a",
            },
          }
        )
          .then((response) => {
            document.getElementById("data-wine-suggestion").innerHTML(response);
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      $("#get-wine-pairing").click(getWine);







// XMLRequest for spoonacular API  
/*
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?" + inputPrice + inputMenu);
xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a");

xhr.send(data);

*/

function getWine(pairingURL) {
        fetch(pairingURL, {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a",
          },
        })
          .then(function (response) {
            if (response.status !== 200) {
              console.log(
                "Looks like there was a problem. Status Code: " +
                  response.status
              );
              return;
            }

            /* Examine the text in the response THIS IS WHERE THE CODE CURRENTLY BREAKS */
            response(function (text) {
              console.log(text);
            });
          })
          .catch(function (err) {
            console.log("Fetch Error :-S", err);
          });
      }