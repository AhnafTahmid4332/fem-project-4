// Select header elements and nav toggle
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


// FAQ section toggle functionality
const openButtons = document.querySelectorAll('.faq-icon');
const faqAnswers = document.querySelectorAll('.js-faq-answer');

openButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Check if the clicked answer is already open
    const isActive = faqAnswers[index].classList.contains('faq-answer-show');

    // Close all answers
    faqAnswers.forEach(answer => {
      answer.classList.remove('faq-answer-show');
    });

    // If the clicked answer was not active, open it
    if (!isActive) {
      faqAnswers[index].classList.add('faq-answer-show');
    }
  });
});


// type effect

const textArray = ['build', 'scale', 'rise'];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textArray[currentTextIndex];
    const displayText = isDeleting ? currentText.substring(0, currentCharIndex--) : currentText.substring(0, currentCharIndex++);

    document.querySelector('.typing-effect').textContent = displayText;

    if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && currentCharIndex < 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % textArray.length; // Move to next text
    }

    const typingSpeed = isDeleting ? 100 : 100;// Adjust speeds
    setTimeout(type, typingSpeed);
}

type();

// sticky header
  window.onscroll = function() {
  const header = document.querySelector(".primary-header");

  if (window.scrollY > 300) {
      header.classList.add("sticky-header"); // Add class when scrolled down
  } else {
      header.classList.remove("sticky-header"); // Remove class when scrolled up
  }
};  



