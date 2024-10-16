//mobile-nav-toggle
const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const mobileNavToggleClose = document.querySelector('.mobile-nav-toggle-close');

// Mobile navigation toggle functionality
navToggle.addEventListener('click', () => {
  const isVisible = primaryNav.getAttribute('data-visible') === 'true';
  
  navToggle.setAttribute('aria-expanded', !isVisible);
  primaryNav.setAttribute('data-visible', !isVisible);
  primaryHeader.toggleAttribute('data-overlay');
});

mobileNavToggleClose.addEventListener('click', () => {
  primaryNav.removeAttribute('data-visible'); // Remove the data-visible attribute
  navToggle.setAttribute('aria-expanded', 'false'); // Update aria-expanded state
  primaryHeader.removeAttribute('data-overlay'); // Optionally remove overlay if used
});


// sticky header
window.onscroll = function() {
  const header = document.querySelector(".primary-header");

  if (window.scrollY > 300) {
      header.classList.add("sticky-header"); // Add class when scrolled down
  } else {
      header.classList.remove("sticky-header"); // Remove class when scrolled up
  }
};  



