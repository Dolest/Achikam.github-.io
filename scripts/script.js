//Achikam Cohen 207775644
//Daniel Zhur  315058818 



document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Remove any existing error messages
        document.querySelectorAll('.error').forEach(function(element) {
            element.remove();
        });

        // Validate input fields
        let isValid = true;
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();



        // Check if password length is at least 8 characters
        if (password.length < 8) {
            showErrorMessage('Password must be at least 8 characters long.', 'password');
            isValid = false;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            showErrorMessage('Passwords do not match.', 'confirmPassword');
            isValid = false;
        }

          //Check is phone number is 10 digit long.

        // If all validations pass, submit the form
        if (isValid) {
            registrationForm.submit();
            // Alert user of successful registration
            alert("You have successfully registered!");
        }
    });

    // Function to display error messages
    function showErrorMessage(message, fieldId) {
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.style.color = 'red';
        errorElement.textContent = message;

        // If fieldId provided, display error next to the specific field, else display at the top of the form
        if (fieldId) {
            const field = document.getElementById(fieldId);
            field.style.borderColor = 'red';
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        } else {
            registrationForm.prepend(errorElement);
        }
    }
});
