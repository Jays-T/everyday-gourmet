<span class="btn contact-icons hvr-color-adapt" data-toggle="modal" data-target="#suggestion-modal">

<button type="button" class="">Shop</button>

<!-- Modal -->
	<div class="modal fade" id="suggestion-modal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
						<!-- Modal body -->
			<div class="modal-content-text">

				<h4 class="story-heading modal-elements-margin">Suggested Wines
					<button type="button" class="close close-modal" data-dismiss="modal">×</button></h4>
						<ul id="pairedWines">
                        </ul>
                            <p id="pairingText">
                            </p>
                                                    
						

					</div>

				</div>
			</div>
		</div>
			<!-- End of Modal -->



function getMenu() {
        let inputMenu = document.getElementById("my-food").value;
        let pairingURL =
          baseURL + basePrice + inputPrice + baseMenu + inputMenu;
        console.log(basePrice);
        console.log(baseMenu);
        console.log(inputPrice);
        console.log(inputMenu);
        console.log(pairingURL);
      }

      if $("inputGroupSelect.value" !== "") {
            document.getElementById("pairedWines").innerHTML("<h1 class="font-montserrat">Oops! Did you forget to select a food?</h1>")
        }
    });

// getting my project to interface fully with the spoonacular api proved to be beyond 
// my current skill level. I'm storing the initial script here as I plan to continue 
// working on this project until I get it right. 


        //   variables to store the base url and standard params to be passed to the url 
      var baseURL =
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?";
      var basePrice = `maxPrice=`;
      var baseMenu = `&food=`;

        // variables to store the data returned from the API

        // variables on the page to pass the date to 
      let wineSuggestion = document.getElementById("data-wine-suggestion");

      // function to get the value of the input areas in the form and store them in variables 

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

      // function to pass all parameters stored in variables to pairingURL and send a GET request to the API 
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
          .then(response => {
              // console logs the response without any problems
        console.log(response);
        })
        .then(err => {
            console.log(err);
        });
      }

    
      $("#get-wine-pairing").click(function () {
        getMenu();
        getWine();
      });
    
    