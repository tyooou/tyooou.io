function darkMode() {
  document.body.classList.toggle("darkMode");
  let allText = document.querySelectorAll("button, p, h1");
  let icon = document.getElementById("darkModeIconToggle");
  for (var i = 0; i < allText.length; i++) {
    allText[i].classList.toggle("darkModeText");
  }

  allIcons = document.querySelectorAll(".darkModeIcon, .btn-icon, .btn-down");
  for (let j = 0; j < allIcons.length; j++) {
    allIcons[j].style =
      icon.getAttribute("src") == "./Icons/darkmode_icon.png"
        ? "filter: brightness(0) invert(1);"
        : "filter: brightness(0.3)";
  }

  icon.src =
    icon.getAttribute("src") == "./Icons/darkmode_icon.png"
      ? "./Icons/lightmode_icon.png"
      : "./Icons/darkmode_icon.png";
}

function projectBtn() {
  document.getElementById("dropdownId").classList.toggle("show");
}

window.onload = darkMode;

window.transitionToPage = function (href) {
  document.querySelector("body").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("body").style.opacity = 1;
});
