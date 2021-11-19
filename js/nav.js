
const navBtn = document.querySelector('.nav-toggle');
const ul = document.querySelector('#topnav ul');
const btn = document.querySelector('#topnav #btn');
const linksContainer = document.querySelector('#topnav');

navBtn.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight =
      ul.getBoundingClientRect().height + 130 +
      btn.getBoundingClientRect().height;
  
    if (containerHeight === 0) {
      linksContainer.style.height = `${linksHeight}px`;
    } else {
      linksContainer.style.height = 0;
    }
  });