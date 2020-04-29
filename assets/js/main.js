// Main scroll functions 

$(document).ready(function(){

  // Targetting all links 

  $("a").on('click', function(event) {

    // Make sure this.hash has a value 
    if (this.hash !== "") {
      // Prevent default anchor click behavior if this.hash has a value
      event.preventDefault();

      var hash = this.hash;

      // Using jQuery's scrollIntoView() method with "smooth" behavior for smooth scrolling
      $(hash)[0].scrollIntoView({
        behavior: "smooth",
        block: "center"
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

$('body').scrollspy({ target: '#navbar-example' })



// Blur effect using addClass

// When hovering on Wine Pairing

$('#wine-pairing').mouseenter(function(){
    $(this).addClass('light-border-thin');
    $('#contact, #home-icon, .main-headlines').addClass('blur');
});

$('#wine-pairing').mouseleave(function(){
    $(this).removeClass('light-border-thin');
    $('#contact, #home-icon, .main-headlines').removeClass('blur');
});

// When hovering on Contact

$('#contact').mouseenter(function(){
    $(this).addClass('light-border-thin');
    $('#wine-pairing, #home-icon, .main-headlines').addClass('blur');
});

$('#contact').mouseleave(function(){
    $(this).removeClass('light-border-thin');
    $('#wine-pairing, #home-icon, .main-headlines').removeClass('blur');
});

// When hovering on Home Icon

$('#home-icon').mouseenter(function(){
    $(this).addClass('light-border-thin');
    $('#wine-pairing, #contact, .main-headlines').addClass('blur');
});

$('#home-icon').mouseleave(function(){
    $(this).removeClass('light-border-thin');
    $('#wine-pairing, #contact, .main-headlines').removeClass('blur');
});
