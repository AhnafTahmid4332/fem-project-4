// Select header elements and nav toggle
const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// Mobile navigation toggle functionality
navToggle.addEventListener('click', () => {
  const isVisible = primaryNav.getAttribute('data-visible') === 'true';
  
  navToggle.setAttribute('aria-expanded', !isVisible);
  primaryNav.setAttribute('data-visible', !isVisible);
  primaryHeader.toggleAttribute('data-overlay');
});

// FAQ section toggle functionality
const faqIcons = document.querySelectorAll('.faq-icon');
const faqAnswers = document.querySelectorAll('.js-faq-answer');

faqIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    faqAnswers[index].classList.toggle('faq-answer-show');
  });
});

// type effect

const textArray = ["a better community", "a better environment", "hyper workflow,", "engaing projects,", "life changing experiences"];
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

  // Check if the page has been scrolled more than 500px
  if (window.scrollY > 300) {
      header.classList.add("sticky-header"); // Add class when scrolled down
  } else {
      header.classList.remove("sticky-header"); // Remove class when scrolled up
  }
};  



