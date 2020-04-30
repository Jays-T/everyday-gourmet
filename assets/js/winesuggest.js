const wineSug = [
  { type: 'steak', wine1: 'Merlot', wine2: 'Cabernet Sauvignon', wine3: 'Pino Noir', text: `Merlot, Cabernet Sauvignon, and Pinot Noir 
                are our top picks for Steak. After all, beef and red wine 
                are a classic combination. Generally, leaner steaks go well 
                with light or medium-bodied reds, such as pinot noir or merlot, 
                while fattier steaks can handle a bold red, such as cabernet sauvingnon.`, image: ''},
  { type: 'fish', wine1: 'Pinot Grigio', wine2: 'Gruener Veltliner', wine3: 'Pinot Noir', text: `Pinot Grigio, Gruener Veltliner, and Pinot Noir are 
                our top picks for Fish. Fish is as diverse as wine, 
                so it's hard to pick wines that go with every fish. 
                A crisp white wine, such as a pinot grigio or Grüner Veltliner, 
                will suit any delicately flavored white fish. Meaty, strongly 
                flavored fish such as salmon and tuna can even handle 
                a light red wine, such as a pinot noir.`, image: ''},
  { type: 'lobster', wine1: 'Chablis', wine2: 'Chardonnay', text: `Lobster works really well with Chablis and Chardonnay. 
                Chablis is perfect with lobster, but a chardonny 
                from other regions is bound to hit the spot too.`, image: ''},
  { type: 'cheese', wine1: 'Cabernet Savignon', wine2: 'Port', wine3: 'Sparkling White Wine', text: `The best wine for cheese definitely depends on the cheese. 
                Aged cheeses and other intense cheeses go best with bold 
                red wines, such as cabernet sauvignon or Nero d'Avola. 
                Blue cheeses go well with sweet port wines. Soft cheeses 
                like brie and camembert usually taste great with sparkling 
                white wine.`, image: ''},
  { type: 'italian', wine1: 'Chianti', wine2: 'Trebbiano', wine3: 'Verdicchio', text: `Italian cuisine can be paired with Chianti, Trebbiano, 
                and Verdicchio. Italians know food and they know wine. 
                Trebbiano and Verdicchio are Italian white wines that 
                pair well with fish and white meat, while Chianti is 
                a great Italian red for heavier, bolder dishes.`, image: ''},
  { type: 'spanish', wine1: 'Tempranillo', wine2: 'Grenache', wine3: 'Albarino', text: `Spanish cuisine on the menu? Try pairing with Tempranillo, 
                Grenache, and Albarino. When pairing wine with Spanish dishes, 
                why not follow the rule 'what grows together goes together'? 
                We recommend albariño for white wine and garnachan 
                and tempranillo for red.`, image: ''},
  { type: 'french', wine1: 'Bordeaux', wine2: 'Champagne', wine3: 'White Burgundy', text: `French cuisine works really well with Bordeaux, Champagne, 
                and White Burgundy. French wine is just as diverse as French 
                food, but you rarely go wrong with champagne. If your meal 
                calls for a white wine, you might also try a white burgundy. 
                For a red, try a red bordeaux blend.`, image: ''},
  { type: 'south african', wine1: 'Pinotage', wine2: 'Riesling', wine3: 'Chenin Blanc', text: `The best wine for African dishes will depend on the dish, 
                but a fruity, aromatic white wine is a safe bet for 
                spicy dishes while pinotage would be a traditional 
                match for South African cuisine.`, image: ''},
]

    function getFoodId() {
        // Get value of user selction store it in variable
    let foodID = $("#foodSelect option:selected").val();
    console.log(foodID);
    return foodID;
}
    // Function to print suggestion based on user selection
function giveSuggestion(foodID, steakSug) {
    if (foodID == "Choose...") {
        console.log(foodID);
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').html(`
            <div class="modal-content center-text">
            <p class="font-lora border-thin"><span class="fancy-text fancy-large">Oops</span> 
            did you forget to select a food?
            </p>
            </div>
            `);
        });

    } else if (foodID == "1") {
        
        $('#suggestion-modal').modal('show'); // open/show modal
        $('#suggestion-modal').on('shown.bs.modal', function() {
            // empty any previous content and append with new content
            // content printed consists of buttons with links to shop for suggested wines on wine.com
            // content inludes a short paragraph with the wine suggestions
            // content structure is the same for each result, only the information changes
            $(this).find('#pairingText').empty().append(`
            <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/Cabernet%20Sauvignon/0" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">C</span
            >abernet
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/Pinot%20Noir/0" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/merlot/0" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">M</span
            >erlot
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">Merlot, Cabernet Sauvignon, and Pinot Noir 
                are our top picks for Steak. After all, beef and red wine 
                are a classic combination. Generally, leaner steaks go well 
                with light or medium-bodied reds, such as pinot noir or merlot, 
                while fattier steaks can handle a bold red, such as cabernet sauvingnon.
                </p>
                </div>
            `);
        });

    } else if (foodID == "2") {
        
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').empty().append(`
             <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/Pinot%20Grigio/0" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot Grigio
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/Gruener/0" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">G</span
            >ruener
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/Pinot%20Noir/0" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot Noir
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">Pinot Grigio, Gruener Veltliner, and Pinot Noir are 
                our top picks for Fish. Fish is as diverse as wine, 
                so it's hard to pick wines that go with every fish. 
                A crisp white wine, such as a pinot grigio or Grüner Veltliner, 
                will suit any delicately flavored white fish. Meaty, strongly 
                flavored fish such as salmon and tuna can even handle 
                a light red wine, such as a pinot noir.
                </p>
                </div>
            `);
        });
    } else if (foodID == "3") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').empty().append(`
            <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">C</span
            >abernet
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">M</span
            >erlot
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">
                </p>
                </div>
            `);
        });
    } else if (foodID == "4") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').empty().append(`
            <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">C</span
            >abernet
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">M</span
            >erlot
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">
                </p>
                </div>
            `);
        });
    } else if (foodID == "5") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').empty().append(`
            <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">C</span
            >abernet
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">M</span
            >erlot
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">
                </p>
                </div>
            `);
        });
    } else if (foodID == "6") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').empty().append(`
            <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">C</span
            >abernet
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">M</span
            >erlot
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">
                </p>
                </div>
            `);
        });
    } else if (foodID == "7") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').empty().append(`
            <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">C</span
            >abernet
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">M</span
            >erlot
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">
                </p>
                </div>
            `);
        });
    } else if (foodID == "8") {
        $('#suggestion-modal').modal('show');
        $('#suggestion-modal').on('shown.bs.modal', function() {
            $(this).find('#pairingText').empty().append(`
            <div class="modal-flex-display">
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                href=""
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">C</span
            >abernet
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">P</span
            >inot
            </a>
              </button>
            <button
                class="btn btn-height btn-colors font-montserrat uppercase border-thin get-wine-btn-bg btn-font-size"
                type="button" 
              ><a class="light-text" href="https://www.wine.com/search/" target="_blank">
                <i class="fas fa-wine-bottle modal-content"></i><span class="fancy-text fancy-large">M</span
            >erlot
            </a>
              </button>
            
              </div>
            <div class="modal-content center-text">
            <p class="font-lora border-thin">
                </p>
                </div>
            `);
        });
    }
}

$("#getWine").click(function(){
    getFoodId();
    giveSuggestion(getFoodId());
});