// get form and submit button elements
const paymentForm = document.querySelector('#payment-form');
const submitButton = document.querySelector('#submit-button');

// add event listener to submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  // get input field values
  const cardName = document.querySelector('#card-name').value.trim();
  const cardNumber = document.querySelector('#card-number').value.trim();
  const expiryMonth = document.querySelector('#expiry-month').value.trim();
  const expiryYear = document.querySelector('#expiry-year').value.trim();
  const cvv = document.querySelector('#cvv').value.trim();
  
  // validate input fields
  if (cardName === '') {
    alert('Please enter your name as it appears on your card.');
  } else if (cardNumber === '' || isNaN(cardNumber) || cardNumber.length !== 16) {
    alert('Please enter a valid 16-digit card number.');
  } else if (expiryMonth === '' || isNaN(expiryMonth) || expiryMonth < 1 || expiryMonth > 12) {
    alert('Please enter a valid expiry month (1-12).');
  } else if (expiryYear === '' || isNaN(expiryYear) || expiryYear.length !== 4 || expiryYear < new Date().getFullYear()) {
    alert('Please enter a valid expiry year (at least the current year).');
  } else if (cvv === '' || isNaN(cvv) || cvv.length !== 3) {
    alert('Please enter a valid 3-digit CVV.');
  } else {
    // payment is confirmed
    alert('Payment confirmed! Your tickets have been booked.');
    paymentForm.reset();
  }
});
// Get the payment form and the pay button
// const paymentForm = document.getElementById('payment-form');
// const payButton = document.getElementById('pay-btn');

// // Add an event listener to the pay button
// payButton.addEventListener('click', function(event) {
//   event.preventDefault(); // prevent the form from submitting

//   // Get the CVV input field
//   const cvvInput = document.getElementById('cvv');

//   // Check if the CVV input is valid
//   if (cvvInput.value.trim() === '') {
//     // If CVV input is empty, display an error message
//     alert('Please enter your CVV.');
//   } else {
//     // If CVV input is valid, redirect to Payment Successful dialog box
//     alert('Payment Successful!');
//     window.location.href = 'payment-successful.html';
//   }
// });





