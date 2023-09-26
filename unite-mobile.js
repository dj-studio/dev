

  




    // Initialize ScrollTrigger
    
    gsap.registerPlugin(ScrollTrigger);
    
  


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
