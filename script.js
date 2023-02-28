$(document).ready(function () {
  $('.scroll').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });
});

// menu content display

const hamburgerToggler = document.querySelector('.hamburger');
const log = document.querySelector('.logo');
const navLinksContainer = document.querySelector('.nav_links');
const clo = document.querySelectorAll('.scroll');
const toggleNav = () => {
  hamburgerToggler.classList.toggle('open');
  const ariaToggle =
    hamburgerToggler.getAttribute('aria-expanded') === 'true'
      ? 'false'
      : 'true';
  hamburgerToggler.setAttribute('aria-expanded', ariaToggle);
  navLinksContainer.classList.toggle('open');
  if (ariaToggle === 'true') {
    log.style.visibility = 'hidden';
    clo.forEach((element) => {
      element.addEventListener('click', function () {
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
