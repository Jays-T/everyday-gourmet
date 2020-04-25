
// Front page animated arrow scroll functions 


$(".arrow").click(function() {
  $("#headline-one")[0].scrollIntoView({
        behavior: "smooth", 
        block: "center" 
    });
})

// XMLRequest for spoonacular API  

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food=fish");
xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a");

xhr.send(data);

// 

const Url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?";

$('#get-wine-sug').click(function(xhr) {
    $.get(Url, function(data,status){
        console.log(`$data`);
    });
});