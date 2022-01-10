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
	document.documentElement.classList.add("overlayActive");
});
closeCodingOverlay.addEventListener("click", function(){ 
	document.getElementById("defaultOpenAbout").click();
	codingOverlay.style.display = "none";
	document.documentElement.classList.remove("overlayActive");
});

designButton.addEventListener("click", function(){ 
	designOverlay.style.display = "block";
	document.documentElement.classList.add("overlayActive");
});
closeDesignOverlay.addEventListener("click", function(){ 
	document.getElementById("defaultOpenAbout").click();
	designOverlay.style.display = "none";
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

/* Display and Hide Design Sections */
/* Display and Hide Design Sections */
/* Display and Hide Design Sections */
let navItems = document.querySelectorAll(".designNavItems");
let designItems = document.querySelectorAll(".designItem");

for(let i = 0; i < navItems.length; i++){
	navItems[i].addEventListener("click", function(){ 
		const removeActive = document.querySelectorAll(".activeDesign");
		for (let j = 0; j < removeActive.length; j++) {
			removeActive[j].className = removeActive[j].className.replace(" activeDesign", "");
		}
		designItems[i].classList.add("activeDesign");
	});
}

document.getElementById("mobileMenu").addEventListener("click", function(){ 

	if(document.querySelector(".openMenu")){
		document.getElementById("design-sidebar").classList.remove("openMenu");
	}else{
	document.getElementById("design-sidebar").className += "openMenu";
	}
});