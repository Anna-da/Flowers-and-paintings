const footerContainer = document.querySelector('#js-Footer_Container');
const basaURL = location.host === 'anna-da.github.io' ? `${location.protocol}//${location.host}/Flowers-and-paintings/` : '/';

fetch(basaURL + 'assets/shared/templates/footer.html')
  .then((response) => response.text())
  .then((html) => {
    footerContainer.insertAdjacentHTML('afterend', html);

    const footerHeaderHeadingImg = document.querySelector('#js-sw-FooterHeader_HeadingImg');

    footerHeaderHeadingImg.src = basaURL + 'assets/shared/images/footer-icon-0.png';
  });
