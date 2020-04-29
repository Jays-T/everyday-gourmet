// data for wine suggestions stored in variables

let steakWine = ["Merlot", "Cabernet Sauvignon", "Pino Noir"]
let steakText = "Merlot, Cabernet Sauvignon, and Pinot Noir are our top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. "
let steakImage = image

let fishWine = ["Pinot Grigio", "Gruener Veltliner", "Pinot Noir"]
let fishText = "Pinot Grigio, Gruener Veltliner, and Pinot Noir are our top picks for Fish. Fish is as diverse as wine, so it's hard to pick wines that go with every fish. A crisp white wine, such as a pinot grigio or Grüner Veltliner, will suit any delicately flavored white fish. Meaty, strongly flavored fish such as salmon and tuna can even handle a light red wine, such as a pinot noir."
let fishImage = image

let lobsterWine = ["Chablis", "Chardonnay"]
let lobstertext = "Lobster works really well with Chablis and Chardonnay. Chablis is perfect with lobster, but a chardonny from other regions is bound to hit the spot too."
let lobsterImage = image

let cheeseWine = ["Cabernet Savignon", "Port", "Sparkling White Wine"]
let cheeseText = "The best wine for cheese definitely depends on the cheese. Aged cheeses and other intense cheeses go best with bold red wines, such as cabernet sauvignon or Nero d'Avola. Blue cheeses go well with sweet port wines. Soft cheeses like brie and camembert usually taste great with sparkling white wine."
let cheeseImage = image

let italianWine = ["Chianti", "Trebbiano", "Verdicchio"]
let italianText = "Italian cuisine can be paired with Chianti, Trebbiano, and Verdicchio. Italians know food and they know wine. Trebbiano and Verdicchio are Italian white wines that pair well with fish and white meat, while Chianti is a great Italian red for heavier, bolder dishes."
let italianImage = image

let spanishWine = ["Tempranillo", "Grenache", "Albarino"]
let spanishText = "Spanish cuisine on the menu? Try pairing with Tempranillo, Grenache, and Albarino. When pairing wine with Spanish dishes, why not follow the rule 'what grows together goes together'? We recommend albariño for white wine and garnachan and tempranillo for red."
let spanishImage = image

let frenchWine = ["Bordeaux", "Champagne", "White Burgundy"]
let frenchText = "French cuisine works really well with Bordeaux, Champagne, and White Burgundy. French wine is just as diverse as French food, but you rarely go wrong with champagne. If your meal calls for a white wine, you might also try a white burgundy. For a red, try a red bordeaux blend."
let frenchImage = image

let sAfricanWine = ["Pinotage", "Riesling", "Chenin Blanc"]
let sAfricanText = "The best wine for African dishes will depend on the dish, but a fruity, aromatic white wine is a safe bet for spicy dishes while pinotage would be a traditional match for South African cuisine."
let sAfricanImage = image


function getFoodId() {
    let foodID = $("#foodSelect option:selected").val();
    console.log(foodID);
};
    
function giveSuggestion(foodID) {
    if (foodID !== "") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $('#suggestion-modal').find('#pairingText').append('<h3 class="font-montserrat">Oops! Did you forget to select a food?</h3>');
        });
    } else if (foodID === "1") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $('#suggestion-modal').find('#pairingText').append('<p class="font-lora">Pinot Noir is one of our top picks for Steak</p>');
        });
        
    };
};

$("#getWine").click(function(){
    getFoodId();
    giveSuggestion();
});


