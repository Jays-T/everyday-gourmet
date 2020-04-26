
// Main page scroll functions 

$(".arrow").click(function() {
  $("#headline-one")[0].scrollIntoView({
        behavior: "smooth", 
        block: "center" 
    });
});

// Blur effect using addClass

// When hovering on Wine Pairing

$('#wine-pairing').mouseenter(function(){
    $('#contact, #home-icon, .main-headlines').addClass('blur');
});

$('#wine-pairing').mouseleave(function(){
    $('#contact, #home-icon, .main-headlines').removeClass('blur');
});

// When hovering on Contact

$('#contact').mouseenter(function(){
    $('#wine-pairing, #home-icon, .main-headlines').addClass('blur');
});

$('#contact').mouseleave(function(){
    $('#wine-pairing, #home-icon, .main-headlines').removeClass('blur');
});

// When hovering on Home Icon

$('#home-icon').mouseenter(function(){
    $('#wine-pairing, #contact, .main-headlines').addClass('blur');
});

$('#home-icon').mouseleave(function(){
    $('#wine-pairing, #contact, .main-headlines').removeClass('blur');
});
