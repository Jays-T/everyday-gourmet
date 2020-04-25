
// Front page animated arrow scroll functions 


$(".arrow").click(function() {
  $("#headline-one")[0].scrollIntoView({
        behavior: "smooth", 
        block: "center" 
    });
})

