

function calculatePadding() {
  // Get the width of the browser window
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Subtract 1320px from the window width
  var remainingWidth = windowWidth - 1340;

  // Divide the remaining width by 2
  var padding = remainingWidth / 2;

  // Set the minimum padding to 24px
  var minimumPadding = 24;

  // Apply the calculated padding as left padding on elements with the class .mega-menu-container
  var elements = document.getElementsByClassName('mega-menu-container');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.paddingLeft = Math.max(padding, minimumPadding) + 'px';
  }

  var webelements = document.getElementsByClassName('mega-menu-webinar-column');
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.paddingRight = Math.max(padding, minimumPadding) + 'px';
  }
}

// Calculate the padding initially on page load
calculatePadding();

// Add an event listener to recalculate the padding whenever the window is resized
window.addEventListener('resize', calculatePadding);




    // Initialize ScrollTrigger
    
    gsap.registerPlugin(ScrollTrigger);
    
    
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "body", // Use the body element as the trigger
    start: "top+=20 viewport", // Animation starts when the top of the viewport is 20 pixels below the top of the body
    end: "+=20 center", // Animation ends when the center of the viewport is 20 pixels below its initial position
    scrub: false, // Disable scrub feature
    onEnter: () => timeline.play(), // Play the animation when entering the trigger
    onLeaveBack: () => timeline.reverse(), // Reverse the animation when leaving the trigger in the backward direction
  }
});

timeline.to(".scroll-background", { height: "72px", duration: 0.3, ease: "power2.out" });




    

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
  const megaMenuAd = linkWrap.querySelectorAll('.mega-menu-webinar-column'); // Select the mega menu link columns

  // Initial state setup
  gsap.set(megaMenuDropdown, { opacity: 0, display: 'none' });
  gsap.set(navbarBackground, { height: 0 });
  gsap.set(navReveal, { height: '72px' });
  gsap.set(megaLinkWraps, { opacity: 0 });
  gsap.set(carrotSpan, { rotation: 180 });
  gsap.set(whiteDesktopNavLink, { filter: 'invert(0)' });
  gsap.set(whiteNavbarLogo, { filter: 'invert(0)' });
  gsap.set(whiteSignIn, { filter: 'invert(0)' });
  gsap.set(whiteCTAButton, { filter: 'invert(0)' });
  gsap.set(megaMenuAd, { opacity: 0 });

  desktopNavLink.addEventListener('click', () => {
    const isOpen = linkWrap.classList.contains('open');

    if (isOpen) {

      // Close the mega menu if the link is already open
      linkWrap.classList.remove('open');
      gsap.to(megaMenuDropdown, {
        display: 'none',
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
     gsap.to(megaMenuAd, {
        opacity: 0,
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
         gsap.to(megaMenuAd, {
            opacity: 0,
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
          display: 'none',          
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


      gsap.to(megaMenuDropdown, {
        display: 'block',
        duration: 0,
        delay: 0,
        onComplete: function() {
          // Animation to run after the first animation completes
          gsap.to(megaMenuDropdown, {
            opacity: 1,
            duration: 0.4,
            delay: 0.1,
            onStart: updateNavbarBackgroundHeight,
            onComplete: function() {
              // Animation to run after the second animation completes
              gsap.to(megaMenuAd, {
                opacity: 1,
                duration: 0.4
              });
            }
          });
        }
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
          delay: 0.2,
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




// Define a function to handle the resize event
function handleResize() {
  // Get the window width
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check if the window width is 991px or below
  if (windowWidth <= 991) {
    // Reverse the animations and set filter back to invert(0)
    gsap.to(whiteDesktopNavLink, {
      filter: 'invert(0)',
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
  }
}

// Add event listener for the resize event
window.addEventListener('resize', handleResize);

// Call the handleResize function initially to check the window width on page load
handleResize();





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
    duration: 0.2,
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



// Function to close the mega menu dropdown
function closeMegaMenu() {
  const openMenus = document.querySelectorAll('.link-wrap.open');

  openMenus.forEach(menu => {
    const dropdown = menu.querySelector('.mega-menu-dropdown');
    const carrotSpan = menu.querySelector('.carrot-span');
    const desktopNavLink = menu.querySelector('.desktop-nav-link');

    currentOpenLink = null;

    gsap.to(dropdown, {
      display: 'none',
      opacity: 0,
      duration: 0.4
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




// Add event listener to close mega menu on click outside
window.addEventListener('click', function (event) {
  const target = event.target;

  // Check if the click target is outside of the mega menu dropdown and its associated link
  if (!target.closest('.mega-menu-dropdown') && !target.closest('.desktop-nav-link')) {
    closeMegaMenu();
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
