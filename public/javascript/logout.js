async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

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

  function resetTimer() {
    clearTimeout(t);
    t = setTimeout(logout, 900000); // time is in milliseconds
  }
}
idleLogout();

window.onload = function () {
  idleLogout();
};

document.querySelector("#logout").addEventListener("click", logout);
