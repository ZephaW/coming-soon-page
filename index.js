// Attach event listener to form
document.querySelector(".form").addEventListener("submit", handleFormSubmission);

// function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); //this prevents the default form submission behaviour

  var email = document.getElementById("email").value;
  var emailError = document.getElementById("email-error");

  if (email.trim() === "") { // this checks if email is empty
      emailError.textContent = "Please provide an email address.";
      emailError.style.display = "block";
      return; // this exits the function early to prevent form submission
  }

  var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expression to check email format
  if (!emailFormat.test(email)) { // If the email format is incorrect, display an error message
      emailError.textContent = "Please provide a valid email address.";
      emailError.style.display = "block";
      return; // Exit the function early to prevent form submission
  }

  emailError.style.display = "none"; //if everything is valid, hide the error message and submit the form
}