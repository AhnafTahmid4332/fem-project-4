const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', () => {
  primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) :  navToggle.setAttribute('aria-expanded', true)
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
}) 

// faq section
const faqIcon = document.querySelector('.faq-icon');
const faqAns = document.querySelector('.js-faq-answer');

faqIcon.addEventListener('click', (event) => {
  if (!faqAns.classList.contains('faq-answer-display-block')) {
    faqAns.classList.add('faq-answer-display-block');
  } else {
    faqAns.classList.remove('faq-answer-display-block');
  }
});
