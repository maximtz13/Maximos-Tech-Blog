const logout = require("./logout");

function idleLogout() {
  var t;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer; // catches touchscreen presses as well
  window.ontouchstart = resetTimer; // catches touchscreen swipes as well
  window.ontouchmove = resetTimer; // required by some devices
  window.onclick = resetTimer; // catches touchpad clicks as well
  window.onkeydown = resetTimer;
  window.addEventListener("scroll", resetTimer, true);

  logout();

  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(logout, 10); // time is in milliseconds
  }
}
idleLogout();

window.onload = function () {
  idleLogout();
};
