
// function to handle form submission
function handleFormSubmission(event) {

   event.preventDefault(); //prevent the default form submission behaviour

   var email = document.getElementById("email").value;
 
   if (email.trim() === " ") { //perfrim validation is email is empty
  alert ("please proivde an email address")
   }

   var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expression to check email format
   if (!emailFormat.test(email)) { // If the email format is incorrect, display an error message
       alert("Please provide a valid email address.");
       return; // Exit the function early to prevent form submission
   }
}

//note; The trim() method in JavaScript is used to remove whitespace characters from both ends of a string. Whitespace characters include spaces, tabs, and newline characters.