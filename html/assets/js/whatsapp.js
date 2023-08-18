// navbar.js
const whatsappContainer = document.getElementById('whatsapp-container');

// Fetch the navbar HTML and insert it into the container
fetch('whatsapp.html')
    .then(response => response.text())
    .then(whatsappHtml => {
        whatsappContainer.innerHTML = whatsappHtml;
    });
