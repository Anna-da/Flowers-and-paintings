const footerContainer = document.querySelector('#js-Footer_Container');

fetch('assets/shared/templates/footer.html')
  .then((response) => response.text())
  .then((html) => {
    footerContainer.insertAdjacentHTML('afterend', html);
  });
