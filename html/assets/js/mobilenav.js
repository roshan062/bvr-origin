const mobileNavbarContainer = document.getElementById('mobile-navbar-container');

fetch('mobilenav.html')
    .then(response => response.text())
    .then(navbarHtml => {
        mobileNavbarContainer.innerHTML = navbarHtml;
    });
