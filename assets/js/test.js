let price = document.getElementById("max-price");
let menu = document.getElementById("my-food");

document.querySelector('form.form-group').addEventListener('#get-wine-pairing', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(price.value, menu.value);    
});




/*let inputPrice = `maxPrice=${document.getElementById("max-price").value}`;
let inputMenu = `&food=${document.getElementById("my-food").value}`;
    
console.log(inputPrice);
console.log(inputMenu);
    
    
    
 $("#get-wine-pairing").click(console.log(inputPrice, inputMenu));
    */
    
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



function buildURL() {

    let baseURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?";
    let inputPrice = "maxPrice=" + document.getElementById("max-price").value;
    let inputMenu = "&food=" + document.getElementById("my-food").value;



  if (inputPrice = isEmpty) {
    return = 'Add a maximum price';
  } else {
    return = `${inputPrice.value}`;
  }
}

let output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster

*/



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