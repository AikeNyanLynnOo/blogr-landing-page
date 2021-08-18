var menuIcon = document.getElementById("menu-btn");
var popUp = document.getElementById("popup");

var connectLg = document.getElementById("connect-lg");
var optionConnectLg = document.getElementById("opt-connect-lg");

var connectSm = document.getElementById("connect-sm");
var optionConnectSm = document.getElementById("opt-connect-sm");

optionConnectLg.style.visibility = "hidden";
optionConnectLg.style.opacity = "0";

optionConnectSm.style.display = "none";

menuIcon.addEventListener("click", () => {
  var current = menuIcon.src.split("/").slice(-1)[0];
  if (current === "icon-hamburger.svg") {
    menuIcon.src = "images/icon-close.svg";
    menuIcon.style.height = 25 + "px";
    menuIcon.style.width = 25 + "px";
    popUp.style.opacity = 1;
    popUp.style.visibility = "visible";
  } else {
    menuIcon.src = "images/icon-hamburger.svg";
    menuIcon.style.height = 20 + "px";
    menuIcon.style.width = 25 + "px";
    popUp.style.opacity = 0;
    popUp.style.visibility = "hidden";
  }
});

connectLg.addEventListener("click", () => {
  optionConnectLg.style.visibility =
    optionConnectLg.style.visibility === "hidden" ? "visible" : "hidden";
  optionConnectLg.style.opacity =
    optionConnectLg.style.opacity === "0" ? "1" : "0";
  if (connectLg.querySelector("i").className === "fa fa-chevron-down") {
    connectLg.querySelector("i").className = "fa fa-chevron-up";
  } else {
    connectLg.querySelector("i").className = "fa fa-chevron-down";
  }
});
connectSm.addEventListener("click", () => {
  optionConnectSm.style.display =
    optionConnectSm.style.display === "none" ? "block" : "none";
  if (connectSm.querySelector("i").className === "fa fa-chevron-down") {
    connectSm.querySelector("i").className = "fa fa-chevron-up";
  } else {
    connectSm.querySelector("i").className = "fa fa-chevron-down";
  }
});
