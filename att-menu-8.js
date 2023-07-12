// Function to close the mega menu dropdown
function closeMegaMenu() {
  const openMenus = document.querySelectorAll('.link-wrap.open');

  openMenus.forEach(menu => {
    const dropdown = menu.querySelector('.mega-menu-dropdown');
    const carrotSpan = menu.querySelector('.carrot-span');
    const desktopNavLink = menu.querySelector('.desktop-nav-link');

    gsap.to(dropdown, {
      opacity: 0,
      duration: 0.4,
      onComplete: function() {
        dropdown.style.display = 'none';
      }
    });

    menu.classList.remove('open');

    gsap.to(carrotSpan, {
      rotation: 180,
      duration: 0.4,
      ease: 'power4.inOut'
    });

    gsap.to(desktopNavLink, {
      fontWeight: 400,
      duration: 0.4,
      ease: 'power4.inOut'
    });
  });

  const whiteDesktopNavLinks = document.querySelectorAll('.white-desktop-nav-link');
  const whiteNavbarLogos = document.querySelectorAll('.white-navbar-logo');
  const whiteSignIns = document.querySelectorAll('.white-sign-in');
  const whiteCTAButtons = document.querySelectorAll('.white-cta-button');

  gsap.to(whiteDesktopNavLinks, {
    filter: 'invert(0)',
    ease: 'power4.inOut'
  });

  gsap.to(whiteNavbarLogos, {
    filter: 'invert(0)',
    ease: 'power4.inOut'
  });

  gsap.to(whiteSignIns, {
    filter: 'invert(0)',
    duration: 0.2
  });

  gsap.to(whiteCTAButtons, {
    filter: 'invert(0)',
    duration: 0.2
  });

  const navReveal = document.querySelector('.nav-reveal');
  const navbarBackground = document.querySelector('.navbar-background');

  gsap.to(navReveal, {
    height: '72px',
    duration: 0.4,
    ease: 'power4.Out'
  });

  gsap.to(navbarBackground, {
    height: 0,
    duration: 0.4,
    delay: 0.05,
    ease: 'power4.inOut'
  });
}
