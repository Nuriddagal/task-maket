let dark = document.querySelector('.light-themes');
let thButton = document.querySelector('.theme-button');

thButton.onclick = function() {
    dark.classList.toggle('dark-themes');
}