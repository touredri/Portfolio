function scrollToSection(targetId) {
  const target = document.getElementById(targetId);
  window.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth',
  });
}

const links = document.querySelectorAll('.scroll');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// menu content display

const hamburgerToggler = document.querySelector('.hamburger');
const log = document.querySelector('.logo');
const navLinksContainer = document.querySelector('.nav_links');
const clo = document.querySelectorAll('.scroll');
const toggleNav = () => {
  hamburgerToggler.classList.toggle('open');
  const ariaToggle = hamburgerToggler.getAttribute('aria-expanded') === 'true'
    ? 'false'
    : 'true';
  hamburgerToggler.setAttribute('aria-expanded', ariaToggle);
  navLinksContainer.classList.toggle('open');
  if (ariaToggle === 'true') {
    log.style.visibility = 'hidden';
    clo.forEach((element) => {
      element.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        hamburgerToggler.classList.remove('open');
        hamburgerToggler.setAttribute('aria-expanded', 'false');
        log.style.visibility = 'visible';
      });
    });
  } else {
    log.style.visibility = 'visible';
  }
};
hamburgerToggler.addEventListener('click', toggleNav);
