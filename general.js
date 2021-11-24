document.getElementById("defaultOpenAbout").click();

/* ABOUT TABS */
/* ABOUT TABS */
/* ABOUT TABS */
function openAboutTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

/* OPEN AND CLOSE OVERLAYS */
/* OPEN AND CLOSE OVERLAYS */
/* OPEN AND CLOSE OVERLAYS */
let codingButton = document.getElementById("heading-left");
let codingOverlay = document.getElementById("coding");
let closeCodingOverlay = document.getElementById("close-coding");

let designButton = document.getElementById("heading-right");
let designOverlay = document.getElementById("design");
let closeDesignOverlay = document.getElementById("close-design");

codingButton.addEventListener("click", function(){ 
	document.getElementById("defaultOpenCoding").click();
	codingOverlay.style.display = "block";
	codingOverlay.style.transform = "translateX(0%)";
	document.documentElement.classList.add("overlayActive");
});
closeCodingOverlay.addEventListener("click", function(){ 
	document.getElementById("defaultOpenAbout").click();
	codingOverlay.style.display = "none";
	codingOverlay.style.transform = "translateX(-100%)";
	document.documentElement.classList.remove("overlayActive");
});

designButton.addEventListener("click", function(){ 
	document.getElementById("defaultOpenDesign").click();
	designOverlay.style.display = "block";
	designOverlay.style.transform = "translateX(0%)";
	document.documentElement.classList.add("overlayActive");
});
closeDesignOverlay.addEventListener("click", function(){ 
	document.getElementById("defaultOpenAbout").click();
	designOverlay.style.display = "none";
	designOverlay.style.transform = "translateX(100%)";
	document.documentElement.classList.remove("overlayActive");
});
/* CODING TABS */
/* CODING TABS */
/* CODING TABS */
function openCodingTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}
/* DESIGN TABS */
/* DESIGN TABS */
/* DESIGN TABS */
function openDesignTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10", "mySlides11", "mySlides12", "mySlides13"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}