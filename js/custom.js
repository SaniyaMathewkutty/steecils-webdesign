
/* (Poor) attempt at counter script for checkout*/
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);

/* Custom JS */

// custom.js 
// some basic functionality for login, checkout, userdetail


// set the checkout figure
if (localStorage.getItem('checkout') == null) {  
  localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

// run to update login/
var logout = document.getElementById('loginlogout');
// add a listener for add to cart if such a button id is pressed
logout.addEventListener("click", Logout);

function Logout() {
  // if user is logged in them log them out and redirect to home page
  var loggedin=localStorage.getItem('loggedIn'); 
  if (loggedin==1) {
      localStorage.setItem('loggedIn',0);
      window.location.href = "home.html";
  } else {
      window.location.href = "login.html";
  }
}


// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {
  
  var loggedin=localStorage.getItem('loggedIn'); 
  var element = document.getElementById("userdetails");
  if (loggedin==1) {
      // change the text from Login to Logout
      document.querySelector('#loginlogout').innerHTML="Logout";
      element.classList.remove("d-none");        
      element.classList.add("d-show");      
  } else{
      // use add to hide the display of User Details
      element.classList.add("d-none");        
      element.classList.remove("d-show");
      document.querySelector('#loginlogout').innerHTML="Login"; 
      element = document.getElementById("loginlogout");
      element.setAttribute("href", "login.html");
  } 

}







