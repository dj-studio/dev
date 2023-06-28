

function calculatePadding() {
  // Get the width of the browser window
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Subtract 1320px from the window width
  var remainingWidth = windowWidth - 1320;

  // Divide the remaining width by 2
  var padding = remainingWidth / 2;

  // Set the minimum padding to 24px
  var minimumPadding = 24;

  // Apply the calculated padding as left padding on elements with the class .mega-menu-container
  var elements = document.getElementsByClassName('mega-menu-container');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.paddingLeft = Math.max(padding, minimumPadding) + 'px';
  }
}

// Calculate the padding initially on page load
calculatePadding();

// Add an event listener to recalculate the padding whenever the window is resized
window.addEventListener('resize', calculatePadding);




    // Initialize ScrollTrigger
    
    gsap.registerPlugin(ScrollTrigger);
    
    
    // Animate Navbar Background on Scroll
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
        end: "+=50%",
        scrub: true,
      }
    });

    timeline.to(".scroll-background", { height: "72px", duration: 1 });
    

// JavaScript code
const linkWraps = document.querySelectorAll('.link-wrap');
const navbar = document.querySelector('.navbar');
const navbarBackground = document.querySelector('.navbar-background');
const navReveal = document.querySelector('.nav-reveal');
const megaLinkWraps = document.querySelectorAll('.mega-link-wrap');
const whiteDesktopNavLink = document.querySelectorAll('.white-desktop-nav-link');
const whiteNavbarLogo = document.querySelectorAll('.white-navbar-logo');
const whiteSignIn = document.querySelectorAll('.white-sign-in');
const whiteCTAButton = document.querySelectorAll('.white-cta-button');
let currentOpenLink = null; // Variable to store the reference to the currently open link

linkWraps.forEach(linkWrap => {
  const desktopNavLink = linkWrap.querySelector('.desktop-nav-link');
  const megaMenuDropdown = linkWrap.querySelector('.mega-menu-dropdown');
  const carrotSpan = linkWrap.querySelector('.carrot-span');
  const megaLinkColumns = linkWrap.querySelectorAll('.mega-menu-link-column'); // Select the mega menu link columns

  // Initial state setup
  gsap.set(megaMenuDropdown, { opacity: 0 });
  gsap.set(navbarBackground, { height: 0 });
  gsap.set(navReveal, { height: '72px' });
  gsap.set(megaLinkWraps, { opacity: 0 });
  gsap.set(carrotSpan, { rotation: 180 });
  gsap.set(whiteDesktopNavLink, { filter: 'invert(0)' });
  gsap.set(whiteNavbarLogo, { filter: 'invert(0)' });
  gsap.set(whiteSignIn, { filter: 'invert(0)' });
  gsap.set(whiteCTAButton, { filter: 'invert(0)' });

  desktopNavLink.addEventListener('click', () => {
    const isOpen = linkWrap.classList.contains('open');

    if (isOpen) {

      // Close the mega menu if the link is already open
      linkWrap.classList.remove('open');
      gsap.to(megaMenuDropdown, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
      });
      gsap.to(carrotSpan, {
        rotation: 180, // Reset rotation to 180 degrees
        duration: 0.4,
        ease: 'power4.inOut', // Easing option for Carrot Span animation
      });
      gsap.to(whiteDesktopNavLink, {
        filter: 'invert(0)', // Reset filter to none
        ease: 'power4.inOut', // Easing option
      });
     gsap.to(whiteNavbarLogo, {
        filter: 'invert(0)', // Reset filter to none
        ease: 'power4.inOut', // Easing option
      });
     gsap.to(whiteSignIn, {
        filter: 'invert(0)', // Reset filter to none
        duration: 0.2, 
      });
     gsap.to(whiteCTAButton, {
        filter: 'invert(0)', // Reset filter to none
        duration: 0.2, 
      });

      if (currentOpenLink === linkWrap) {
        // Reset the current open link if it's the same link that was clicked
        currentOpenLink = null;
        gsap.to(navReveal, {
          height: '72px',
          duration: 0.4,
          ease: 'power4.Out', // Easing option for Nav Reveal animation
        });
        gsap.to(navbarBackground, {
          height: 0,
          duration: 0.4,
          delay: 0.05,
          ease: 'power4.inOut', // Easing option for Navbar Background animation
        });
        gsap.to(carrotSpan, {
          rotation: 180, // Reset rotation to 0 degrees
          duration: 0.4,
          ease: 'power4.inOut', // Easing option for Carrot Span animation
        });
        gsap.to(desktopNavLink, {
          fontWeight: 400, // Reset font-weight to 400
          duration: 0.4,
          ease: 'power4.inOut', // Easing option for Desktop Nav Link animation
          onComplete: resetOpacity, // Call the function to reset the stagger animation
        });
        gsap.to(whiteDesktopNavLink, {
          filter: 'invert(0)', // Reset filter to none
          ease: 'power4.inOut', // Easing option
        });
         gsap.to(whiteNavbarLogo, {
            filter: 'invert(0)', // Reset filter to none
            ease: 'power4.inOut', // Easing option
          });
         gsap.to(whiteSignIn, {
          filter: 'invert(0)', // Reset filter to none
          duration: 0.2,
         
          });
         gsap.to(whiteCTAButton, {
          filter: 'invert(0)', // Reset filter to none
          duration: 0.2,
        });
      }
    } else {

      // Reset the previous link's state if it exists

      if (currentOpenLink) {
        const previousMegaMenuDropdown = currentOpenLink.querySelector('.mega-menu-dropdown');
        const previousCarrotSpan = currentOpenLink.querySelector('.carrot-span');
        const previousDesktopNavLink = currentOpenLink.querySelector('.desktop-nav-link');
        gsap.to(previousMegaMenuDropdown, {
          opacity: 0,
          duration: 0.4,
        });
        currentOpenLink.classList.remove('open');
        gsap.to(previousCarrotSpan, {
          rotation: 180, // Reset rotation to 180 degrees
          duration: 0.4,
          ease: 'power4.inOut',
        });
        gsap.to(previousDesktopNavLink, {
          fontWeight: 400, // Reset font-weight to 400
          duration: 0.4,
          ease: 'power4.inOut',
        });
      }

      linkWrap.classList.add('open');
      currentOpenLink = linkWrap;

      updateNavbarBackgroundHeight();

      gsap.to(megaMenuDropdown, {
        opacity: 1,
        display: 'block',
        duration: 0.4,
        delay: 0.2,
      });

      if (navReveal.clientHeight === 72) {
        // Animate Nav Reveal to 100vh if it's not already open
        gsap.to(navReveal, {
          height: '100vh',
          duration: 0.4,
          ease: 'power4.Out', // Easing option for Nav Reveal animation
        });
      }

      gsap.to(carrotSpan, {
        rotation: 0, // Rotate the Carrot Span 180 degrees
        duration: 0.4,
        ease: 'power4.inOut', // Easing option for Carrot Span animation
      });

      gsap.to(desktopNavLink, {
        fontWeight: 600, // Set font-weight to 600
        duration: 0,
        ease: 'power4.inOut', // Easing option for Desktop Nav Link animation
      });

      gsap.to(whiteDesktopNavLink, {
        filter: 'invert(1)', // Reset filter to none
        ease: 'power4.inOut', // Easing option
      });
      gsap.to(whiteNavbarLogo, {
        filter: 'invert(1)', // Reset filter to none
        ease: 'power4.inOut', // Easing option
      });
     gsap.to(whiteSignIn, {
        filter: 'invert(1)', // Reset filter to none
        duration: 0.2,      
      });
     gsap.to(whiteCTAButton, {
        filter: 'invert(1)', // Reset filter to none
        duration: 0.2,     
      });

      megaLinkColumns.forEach(column => {
        const megaLinkWrapsInColumn = column.querySelectorAll('.mega-link-wrap');
        gsap.to(megaLinkWrapsInColumn, {
          opacity: 1,
          duration: 0.4,
          stagger: 0.1, // Stagger effect for animating Mega Link Wraps within each column
          ease: 'power4.inOut', // Easing option for Mega Link Wraps animation
        });
      });
    }
  });


  desktopNavLink.addEventListener('mouseenter', () => {
    if (!linkWrap.classList.contains('open')) {
      gsap.to(desktopNavLink, {
        fontWeight: 600, // Set font-weight to 600 on hover
        duration: 0,
      });
    }
  });

  desktopNavLink.addEventListener('mouseleave', () => {
    if (!linkWrap.classList.contains('open')) {
      gsap.to(desktopNavLink, {
        fontWeight: 400, // Reset font-weight to 400 on hover out
        duration: 0,
      });
    }
  });
});

// Recalculate the height of Navbar Background
function updateNavbarBackgroundHeight() {
  if (!currentOpenLink) {
    return; // Exit early if mega menu is closed
  }

  const navbarHeight = navbar.offsetHeight;
  const megaMenuHeight = currentOpenLink.querySelector('.mega-menu-dropdown').offsetHeight;
  const totalHeight = navbarHeight + megaMenuHeight;

  gsap.to(navbarBackground, {
    height: totalHeight,
    duration: 0.4,
    ease: 'power4.inOut', // Easing option for Navbar Background animation
  });
}

// Function to reset the animation of mega-link-wrap elements
function resetOpacity() {
  const megaLinkWraps = document.querySelectorAll('.mega-link-wrap');
  
  megaLinkWraps.forEach(megaLinkWrap => {
    megaLinkWrap.style.opacity = '0';
  });
}


// Listen for the window resize event
window.addEventListener('resize', () => {
  if (currentOpenLink) {
    updateNavbarBackgroundHeight();
  }
});



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

