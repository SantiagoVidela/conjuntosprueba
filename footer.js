const footerContainer = document.getElementById('footer-container');

fetch('footer.html')
  .then(response => response.text())
  .then(footerHTML => {
    footerContainer.innerHTML = footerHTML;
  })
  .catch(error => console.error('Error fetching footer:', error));