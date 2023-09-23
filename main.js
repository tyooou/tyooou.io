
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
    document.getElementById("darkModeToggle").classList.toggle('lightModeIcon');

    document.getElementById("darkModeTitle").classList.toggle('darkModeText');
    var allText = document.getElementsByTagName('button');
        for (var i=0; i<allText.length; i++) {
            allText[i].classList.toggle('darkModeText');
        }
    var allText = document.getElementsByTagName('button');
}