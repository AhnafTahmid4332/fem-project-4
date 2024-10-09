const priceToggleCheckbox = document.querySelector('input[type="checkbox"]');
const priceToggleLabel = document.querySelector('.price-toggle');
const displayedPrice = document.querySelectorAll('.displayed-price');
const priceDuration = document.querySelectorAll('.price-duration');
const actualPrice = document.querySelectorAll('.actual-price');

priceToggleLabel.addEventListener('click', () => {
  // Toggle the checked state of the checkbox
  priceToggleCheckbox.checked = !priceToggleCheckbox.checked;
  
  // Add or remove the class for styling
  priceToggleLabel.classList.toggle('price-toggle-checked');

  if (priceToggleCheckbox.checked) {
    displayedPrice.innerHTML = '160'
  } else {
    displayedPrice.innerHTML = '86'
  }

  if (priceToggleCheckbox.checked) {
    priceDuration.innerHTML = '/year'
  } else {
    priceDuration.innerHTML = '/mo'
  }

});