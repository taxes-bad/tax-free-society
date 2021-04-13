//toggles between light and dark mode (ew light mode).
//saves whether the user prefers dark or light mode.
var theme = "light";
function changeTheme() {
  if (theme = "light") {
    var theme = "dark";
  }
  else {
    theme = "light";
  }
  document.body.classList.toggle('theme-toggle');
}
window.onload = changeTheme();