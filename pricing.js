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

  displayedPrice.forEach((price, index) => {
      if (index === 1) {
      // For Paid plan
      price.innerHTML = priceToggleCheckbox.checked ? '1400' : '120';
    } else if (index === 2) {
      // For Premium plan
      price.innerHTML = priceToggleCheckbox.checked ? '1890' : '160';
    }
  });

  priceDuration.forEach(duration => {
    if (priceToggleCheckbox.checked) {
      duration.innerHTML = '/year';
    } else {
      duration.innerHTML = '/mo';
    }
  });

  actualPrice.forEach(price => {
    if (price.classList.contains('hidden')) {
      price.classList.remove('hidden');
    } else {
      price.classList.add('hidden');
    }
  });
});

// FAB
const messageIcon = document.getElementById('messageIcon');
const messagePopup = document.getElementById('messagePopup');
const closePopup = document.getElementById('closePopup');

// Toggle the popup when the message icon is clicked
messageIcon.addEventListener('click', () => {
    const container = messageIcon.parentElement;
    container.classList.toggle('active');
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    const container = messageIcon.parentElement;
    container.classList.remove('active');
});



