
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");

    document.getElementById("darkModeTitle").classList.toggle('darkModeText');
    var allText = document.querySelectorAll('button, p');
    for (var i=0; i<allText.length; i++) {
        allText[i].classList.toggle('darkModeText');
    }
}



function darkModeIconToggle() {
    var icon = document.getElementById('darkModeIconToggle');

    if (icon.getAttribute('src') == './Icons/darkmode_icon.png') {
        icon.src = './Icons/lightmode_icon.png';
        icon.style = 'zoom: 5%; filter: brightness(0) invert(1);';
    } else {
        icon.src = './Icons/darkmode_icon.png';
        icon.style = 'zoom: 5%; filter: brightness(0.3)';
    }
}
