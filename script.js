        // 1. Event Listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Interactive box events
            const interactiveBox = document.getElementById('interactiveBox');
            
            interactiveBox.addEventListener('click', function() {
                interactiveBox.style.backgroundColor = '#00ff00';
                interactiveBox.innerHTML = '<h2>Clicked!</h2><p>Event Listener has been activated!</p>';
            });

            interactiveBox.addEventListener('mouseover', function() {
                interactiveBox.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
            });

            interactiveBox.addEventListener('mouseout', function() {
                interactiveBox.style.boxShadow = 'none';
            });

            // Form submission event
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                if (validateForm()) {
                    showConfirmation();
                }
            });
        });

        // 2. Form Validation
        function validateForm() {
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Clear previous errors
            document.querySelectorAll('.error').forEach(e => e.textContent = '');

            // Name validation
            if (name.value.trim() === '') {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }

            // Message validation
            if (message.value.trim() === '') {
                document.getElementById('messageError').textContent = 'Message is required';
                isValid = false;
            }

            return isValid;
        }

        // 3. Interactive Elements
        function showConfirmation() {
            const name = document.getElementById('name').value;
            const confirmation = document.getElementById('confirmation');
            
            confirmation.innerHTML = `
                <h3>Thank you, ${name}!</h3>
                <p>Your form has been submitted successfully.</p>
                <button id="resetBtn">Submit Another</button>
            `;
            
            confirmation.style.display = 'block';
            
            // Reset button functionality
            document.getElementById('resetBtn').addEventListener('click', function() {
                document.getElementById('contactForm').reset();
                confirmation.style.display = 'none';
            });
        }