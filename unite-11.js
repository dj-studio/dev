gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    start: "top+=20 viewport",
    end: "+=20 center",
    scrub: false,
    onEnter: () => timeline.play(),
    onLeaveBack: () => timeline.reverse(),
  }
});

timeline.to(".scroll-background", { height: "100px", duration: 0.3, ease: "power2.out" });

const linkWraps = document.querySelectorAll('.link-wrap');
const navbar = document.querySelector('.navbar');
const navbarBackground = document.querySelector('.navbar-background');
const navReveal = document.querySelector('.nav-reveal');
const megaLinkWraps = document.querySelectorAll('.mega-link-wrap');
const whiteDesktopNavLink = document.querySelectorAll('.light-nav-link');
const whiteNavbarLogo = document.querySelectorAll('.white-navbar-logo');
const whiteSignIn = document.querySelectorAll('.white-sign-in');
const whiteCTAButton = document.querySelectorAll('.white-cta-button');
let currentOpenLink = null;

linkWraps.forEach(linkWrap => {
  const desktopNavLink = linkWrap.querySelector('.desktop-nav-link');
  const megaMenuDropdown = linkWrap.querySelector('.mega-menu-dropdown');
  const carrotSpan = linkWrap.querySelector('.carrot-span');
  const megaLinkColumns = linkWrap.querySelectorAll('.mega-menu-link-column');
  const megaMenuAd = linkWrap.querySelectorAll('.mega-menu-webinar-column');

  gsap.set(megaMenuDropdown, { opacity: 0, display: 'none' });
  gsap.set(navbarBackground, { height: 0 });
  gsap.set(navReveal, { height: '100px' });
  gsap.set(megaLinkWraps, { opacity: 0 });
  gsap.set(carrotSpan, { rotation: 180 });
  gsap.set(whiteDesktopNavLink, { color: 'rgba(255,255,255,1)' });
  gsap.set(whiteNavbarLogo, { filter: 'invert(0)' });
  gsap.set(whiteSignIn, { filter: 'invert(0)' });
  gsap.set(whiteCTAButton, { filter: 'invert(0)' });
  gsap.set(megaMenuAd, { opacity: 0 });

  desktopNavLink.addEventListener('mouseenter', () => {
    const isOpen = linkWrap.classList.contains('open');

    if (!isOpen) {
      closeAllMegaMenus();

      linkWrap.classList.add('open');
      currentOpenLink = linkWrap;

      showMegaMenu(megaMenuDropdown, carrotSpan, desktopNavLink);
      gsap.to(desktopNavLink, {
        fontWeight: 600,
        duration: 0,
      });
    }
  });

  desktopNavLink.addEventListener('mouseleave', () => {
    if (linkWrap === currentOpenLink) {
      closeMegaMenu(linkWrap, megaMenuDropdown, carrotSpan, desktopNavLink);
      gsap.to(desktopNavLink, {
        fontWeight: 400,
        duration: 0,
      });
    }
  });
});

function closeMegaMenu(linkWrap, megaMenuDropdown, carrotSpan, desktopNavLink) {
  const previousMegaMenuDropdown = linkWrap.querySelector('.mega-menu-dropdown');
  const previousCarrotSpan = linkWrap.querySelector('.carrot-span');
  const previousDesktopNavLink = linkWrap.querySelector('.desktop-nav-link');
  gsap.to(previousMegaMenuDropdown, {
    display: 'none',
    opacity: 0,
    duration: 0.4,
  });
  linkWrap.classList.remove('open');
  gsap.to(previousCarrotSpan, {
    rotation: 180,
    duration: 0.4,
    ease: 'power4.inOut',
  });
  gsap.to(previousDesktopNavLink, {
    fontWeight: 400,
    duration: 0.4,
    ease: 'power4.inOut',
  });
}

function showMegaMenu(megaMenuDropdown, carrotSpan, desktopNavLink) {
  gsap.to(megaMenuDropdown, {
    display: 'block',
    duration: 0,
    delay: 0,
    onComplete: function() {
      gsap.to(megaMenuDropdown, {
        opacity: 1,
        duration: 0.4,
        delay: 0.1,
        onStart: updateNavbarBackgroundHeight,
        onComplete: function() {
          gsap.to(megaMenuAd, {
            opacity: 1,
            duration: 0.4
          });
        }
      });
    }
  });

  if (navReveal.clientHeight === 100) {
    gsap.to(navReveal, {
      height: '100vh',
      duration: 0.4,
      ease: 'power4.Out',
    });
  }

  gsap.to(carrotSpan, {
    rotation: 0,
    duration: 0.4,
    ease: 'power4.inOut',
  });

  gsap.to(desktopNavLink, {
    fontWeight: 600,
    duration: 0,
    ease: 'power4.inOut',
  });

  gsap.to(whiteDesktopNavLink, {
    color: 'rgba(24,44,79,1)',
    ease: 'power4.inOut',
  });
  gsap.to(whiteNavbarLogo, {
    filter: 'invert(1)',
    ease: 'power4.inOut',
  });
  gsap.to(whiteSignIn, {
    filter: 'invert(1)',
    duration: 0.2,
  });
  gsap.to(whiteCTAButton, {
    filter: 'invert(1)',
    duration: 0.2,
  });

  megaLinkColumns.forEach(column => {
    const megaLinkWrapsInColumn = column.querySelectorAll('.mega-link-wrap');
    gsap.to(megaLinkWrapsInColumn, {
      opacity: 1,
      delay: 0.2,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power4.inOut',
    });
  });
}

function closeAllMegaMenus() {
  const openMenus = document.querySelectorAll('.link-wrap.open');

  openMenus.forEach(menu => {
    const dropdown = menu.querySelector('.mega-menu-dropdown');
    const carrotSpan = menu.querySelector('.carrot-span');
    const desktopNavLink = menu.querySelector('.desktop-nav-link');

    currentOpenLink = null;

    gsap.to(dropdown, {
      display: 'none',
      opacity: 0,
      duration: 0.4,
    });

    menu.classList.remove('open');

    gsap.to(carrotSpan, {
      rotation: 180,
      duration: 0.4,
      ease: 'power4.inOut',
    });

    gsap.to(desktopNavLink, {
      fontWeight: 400,
      duration: 0.4,
      ease: 'power4.inOut',
    });
  });

  gsap.to(whiteDesktopNavLink, {
    color: 'rgba(255,255,255,1)',
    ease: 'power4.inOut',
  });

  gsap.to(whiteNavbarLogo, {
    filter: 'invert(0)',
    ease: 'power4.inOut',
  });

  gsap.to(whiteSignIn, {
    filter: 'invert(0)',
    duration: 0.2,
  });

  gsap.to(whiteCTAButton, {
    filter: 'invert(0)',
    duration: 0.2,
  });

  gsap.to(navReveal, {
    height: '100px',
    duration: 0.4,
    ease: 'power4.Out',
  });

  gsap.to(navbarBackground, {
    height: 0,
    duration: 0.4,
    delay: 0.05,
    ease: 'power4.inOut',
  });
}

function updateNavbarBackgroundHeight() {
  if (!currentOpenLink) {
    return;
  }

  const navbarHeight = navbar.offsetHeight;
  const megaMenuHeight = currentOpenLink.querySelector('.mega-menu-dropdown').offsetHeight;
  const totalHeight = navbarHeight + megaMenuHeight;

  gsap.to(navbarBackground, {
    height: totalHeight,
    duration: 0.2,
    ease: 'power4.inOut',
  });
}

window.addEventListener('resize', () => {
  if (currentOpenLink) {
    updateNavbarBackgroundHeight();
  }
});

function handleResize() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  if (windowWidth <= 991) {
    closeAllMegaMenus();
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// Hamburger Dropdown functions
function toggleDropdown(menuItem) {
  const dropdown = menuItem.querySelector('.hamburger-dropdown');
  const carrotSpan = menuItem.querySelector('.hamburger-carrot-span');

  if (dropdown) {
    const isOpen = menuItem.classList.contains('open');

    if (isOpen) {
      hideSubmenu(menuItem);
      gsap.to(menuItem, { height: '60px', duration: 0.8, ease: 'power4.inOut' });
      gsap.to(carrotSpan, { rotation: 0, duration: 0.4, ease: 'power4.inOut' }); // Rotate back to default position
    } else {
      closeAllDropdowns();
      showSubmenu(menuItem);
      const submenuHeight = dropdown.offsetHeight;
      gsap.to(menuItem, { height: submenuHeight, duration: 0.8, ease: 'power4.inOut' });
      gsap.to(carrotSpan, { rotation: 180, duration: 0.4, ease: 'power4.inOut' }); // Rotate 180 degrees
      
      // Animate scrolling to the top of the .hamburger-menu-wrap element
      const menuWrap = document.querySelector('.hamburger-menu-wrap');
      const scrollOptions = {
        top: 0,
        behavior: 'smooth' // Use smooth scrolling behavior
      };
      menuWrap.scrollTo(scrollOptions);
    }
  }
}

function closeAllDropdowns() {
  const openMenus = document.querySelectorAll('.hamburger-container .hamburger-menu-item.open');

  openMenus.forEach((menu) => {
    const submenu = menu.querySelector('.hamburger-dropdown');
    const carrotSpan = menu.querySelector('.hamburger-carrot-span');
    gsap.to(menu, { height: '60px', duration: 0.8, ease: 'power4.inOut', onComplete: () => hideSubmenu(menu) });
    gsap.to(carrotSpan, { rotation: 0, duration: 0.4, ease: 'power4.inOut' }); // Rotate back to default position
  });
}

function hideSubmenu(menuItem) {
  menuItem.classList.remove('open');
}

function showSubmenu(menuItem) {
  menuItem.classList.add('open');
}

const menuItems = document.querySelectorAll('.hamburger-container .hamburger-menu-item');

menuItems.forEach((menuItem) => {
  const menuHeader = menuItem.querySelector('.hamburger-heading');
  menuHeader.addEventListener('click', () => {
    toggleDropdown(menuItem);
  });
});
