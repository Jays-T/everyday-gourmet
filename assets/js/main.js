
// Front page animated arrow scroll functions 

$(".arrow").click(function() {
  $("#headline-one")[0].scrollIntoView({
        behavior: "smooth", 
        block: "center" 
    });
})


$(".arrow2").click(function() {
  $("#footer-details")[0].scrollIntoView(true)({
        behavior: "smooth", 
    });
})


// Spoonacular API xml request

/* function getData(cb) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        document.getElementById("wine").innerHTML = this.responseText;
		cb(JSON.parse(this.responseText));
	    }
    });

xhr.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food=trout");
xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a");

xhr.send();

}

getData(function(data) {
    console.log(data);
});
*/





var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        document.getElementById("wine").innerHTML = this.responseText;
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food=trout");
xhr.setRequestHeader("x-rapidapi-host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a");

xhr.send(data);



