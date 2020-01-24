//
//eventHandlers.js -- This file defines the JavaScript functions necessary to
//update the app in response to user interaction.
//

//document click: When the user clicks anywhere in the doc and the menu is open
//we need to close it and toggle menu state variable.
document.addEventListener("click",function(e) {
  if (menuOpen) {
    document.getElementById("menuBtnIcon").classList.remove("fa-times"); 
    //Change hamburger to X when menu open
    document.getElementById("menuBtnIcon").classList.add("fa-bars");
    document.getElementById("sideMenu").style.width = "0px"; //close menu
    menuOpen = false;
  }
});
 
//menuBtn click: When the top-left side menu button is clicked and the menu
//is closed, we need to open it and toggle menu state variable.
document.getElementById("menuBtn").addEventListener("click",function(e) {
  if (!menuOpen) {
    document.getElementById("menuBtnIcon").classList.remove("fa-bars"); 
    //Change hamburger to X when menu open
    document.getElementById("menuBtnIcon").classList.add("fa-times");
    document.getElementById("sideMenu").style.width = "250px"; //open up menu
    menuOpen = true;
    //toggleInputDisabled(true);
    e.stopPropagation();
  }
});                                                        

var bottomBarBtnClick = function() {
  if (mode != this.id) {
    document.getElementById(mode).classList.remove("menuItemSelected");

    document.getElementById(mode + "Div").style.display = "none";

    this.classList.add("menuItemSelected");
    let menuItems = document.getElementsByClassName(mode + "Item");
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.display = "none";
    }
    mode = this.id;
    document.getElementById("topBarTitle").textContent = modeToTitle[mode];
    document.getElementById(mode + "Div").style.display = "block";
    menuItems = document.getElementsByClassName(mode + "Item");
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.display = "block";
    }
  }
}


//event for side bar
var sideBtnClick = function() {
  if (mode != this.id) {
    console.log(mode);

    // keep bottombar highlight
    let a = document.getElementById(mode).classList.value
    console.log(a);
    if(a != "bottomBarBtn menuItemSelected"){
      document.getElementById(mode).classList.remove("menuItemSelected");//
    }
    document.getElementById(mode + "Div").style.display = "none";//

    this.classList.add("menuItemSelected");//

    let menuItems = document.getElementsByClassName(mode + "Item");

    mode = this.id;//
    document.getElementById("topBarTitle").textContent = modeToTitle[mode];//

    //hard code home page of each area
    if(mode == "About"){mode = "AboutMode";}
    else if(mode == "Portfolio"){mode = "PortfolioMode";}
    else if(mode == "Hobbies"){mode = "HobbiesMode";}

    document.getElementById(mode + "Div").style.display = "block";
    menuItems = document.getElementsByClassName(mode + "Item");
    for (let i = 0; i < menuItems.length; ++i) {
      menuItems[i].style.display = "block";
    }
  }
}


document.getElementById("AboutMode").addEventListener("click",bottomBarBtnClick);
document.getElementById("PortfolioMode").addEventListener("click",bottomBarBtnClick);
document.getElementById("HobbiesMode").addEventListener("click",bottomBarBtnClick);


document.getElementById("About").addEventListener("click",sideBtnClick);
document.getElementById("About2").addEventListener("click",sideBtnClick);
document.getElementById("About3").addEventListener("click",sideBtnClick);
document.getElementById("Portfolio").addEventListener("click",sideBtnClick);
document.getElementById("Portfolio2").addEventListener("click",sideBtnClick);
document.getElementById("Portfolio3").addEventListener("click",sideBtnClick);
document.getElementById("Hobbies").addEventListener("click",sideBtnClick);
document.getElementById("Hobbies2").addEventListener("click",sideBtnClick);
document.getElementById("Hobbies3").addEventListener("click",sideBtnClick);