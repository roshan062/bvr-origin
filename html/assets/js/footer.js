// footer.js
const footerContainer = document.getElementById('footer-container');

// Fetch the navbar HTML and insert it into the container
fetch('footer.html')
    .then(response => response.text())
    .then(footerHtml => {
        footerContainer.innerHTML = footerHtml;
    });
