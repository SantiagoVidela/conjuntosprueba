const headerContainer = document.getElementById('header-container');

const xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (xhr.status === 200) {
    headerContainer.innerHTML = xhr.responseText;
  }
};
xhr.open('GET', 'header.html');
xhr.send();