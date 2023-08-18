// navbar.js
const navbarContainer = document.getElementById('navbar-container');

fetch('navbar.html')
    .then(response => response.text())
    .then(navbarHtml => {
        navbarContainer.innerHTML = navbarHtml;
    });






