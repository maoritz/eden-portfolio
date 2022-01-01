(function responsiveMenu(){
  const toggleButton = document.getElementsByClassName("toggle-button")[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  
  toggleButton.addEventListener('click' , function (e) {
      navbarLinks.classList.toggle('active')
      e.preventDefault();
  })
})()


function showDate(){
  const today = new Date();
  document.getElementById('date-today').innerHTML = today;
}

//form mandatory values
function validateForm() {
    let x = document.forms["contact-me"]["name"].value;
    if (x == "") {
      alert("All fields must be filled out");
      return false;
    }
    return true;
  }


// preload images
var images = new Array();
function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){
         images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }

}
preloadImages("me.jpg", "main-pic.jpg", "logo.jpg");

// some random quotes

const writeRandomQuote = function () {
    const quotesElement =  document.getElementsByClassName("quotes")[0]
   
    const quotes = new Array();
    quotes[0] = `"Action is the real measure of intelligence."`; 
    quotes[1] = `"Remember the two benefits of failure. First, if you do fail, you learn what does'nt work; and second, the failure gives you the opportunity to try a new approach."`;
    quotes[2] = `"Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind."`;
    quotes[3] = `"A good head and a good heart are always a formidable combination."`;
    const rand = Math.floor(Math.random()*quotes.length);

    quotesElement.innerHTML = quotes[rand]
  }
  writeRandomQuote();