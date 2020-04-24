
// Front page animated arrow scroll function 

$(".arrow").click(function() {
  $("#headline-one")[0].scrollIntoView({
        behavior: "smooth", 
        block: "center" 
    });
})


// Spoonacular API xml request


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        document.getElementById("data").innerHTML = this.responseText;
		console.log(JSON.parse(this.responseText));
	}
});

xhr.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
//xhr.open("GET", baseURL + food + '=' + $document.getElementById("inputMeal");
xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "KEY HERE");

xhr.send();




