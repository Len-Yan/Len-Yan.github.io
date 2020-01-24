//Start-up functions run when page is loaded.
//1. Include the HTML snippets:
includeHTML();

//Hide all pages except for About1, which is the start page.
document.getElementById("About2Div").style.display = "none";
document.getElementById("About3Div").style.display = "none";
document.getElementById("PortfolioModeDiv").style.display = "none";
document.getElementById("Portfolio2Div").style.display = "none";
document.getElementById("Portfolio3Div").style.display = "none";
document.getElementById("HobbiesModeDiv").style.display = "none";
document.getElementById("Hobbies2Div").style.display = "none";
document.getElementById("Hobbies3Div").style.display = "none";


//document.getElementsByClassName("menuItem AboutModeItem")[0].style.display = "none";
for (let i = 0; i < 3; ++i) {
document.getElementsByClassName("menuItem PortfolioModeItem")[i].style.display = "none";
document.getElementsByClassName("menuItem HobbiesModeItem")[i].style.display = "none";
}
//2. Set up UI state
var menuOpen = false; //Boolean variable to capture the state of the side menu.

var modeToTitle = {"AboutMode": "About Me",
                   "PortfolioMode": "My Education",
                   "HobbiesMode": "Things I Do"};


//On startup, set current app mode to "feedMode"
var mode = "AboutMode"; //Variable captures current UI mode
document.getElementById(mode).classList.add("menuItemSelected");
