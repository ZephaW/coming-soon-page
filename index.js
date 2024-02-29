const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];
  
  if (email.value === '') {
    messages.push('Email address is required');
  } 
  
  else if (!isValidEmail(email.value)) {
    messages.push('Please enter a valid email address');
  }

  if (messages.length > 0) {
    e.preventDefault(); // prevents form from submitting
    errorElement.innerText = messages;
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regular expression for basic email validation
  return emailRegex.test(email);
}