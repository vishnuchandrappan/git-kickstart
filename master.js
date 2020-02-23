var menu = document.getElementById("menu");
var item = document.getElementById("togglemenu");

function toggle() {
  if (item.className == "nav-item") {
    item.className = "nav-item-toggle";
    menu.className = "rotate90";
  } else {
    item.className = "nav-item";
    menu.className = "rotate0";
  }
}
