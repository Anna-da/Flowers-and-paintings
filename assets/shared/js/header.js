(function () {
  const headerContainer = document.querySelector('#js-Header_Container');
  const basaURL = location.host === 'anna-da.github.io' ? `${location.protocol}//${location.host}/Flowers-and-paintings` : '';

  fetch(basaURL + '/assets/shared/templates/header.html')
    .then((response) => response.text())
    .then((html) => {
      headerContainer.insertAdjacentHTML('afterend', html);

      const root = document.querySelector('#js-sw-Header');
      const anchorList = root.querySelectorAll('a[href]');
      const headerLogoImgList = document.querySelectorAll('.js-sw-Header_LogoImg');

      anchorList.forEach(anchor => {
        const href = anchor.getAttribute('href');
        anchor.href = basaURL + href;
      });

      headerLogoImgList.forEach(headerLogoImg => {
        headerLogoImg.src = basaURL + '/assets/shared/images/header-logo-0.png';
      });
    });
})();