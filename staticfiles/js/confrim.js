document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const form = document.getElementById('internshipForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const photoInput = document.getElementById('passportPhoto');
    const collegeInput = document.getElementById('college');
    const departmentInput = document.getElementById('department');
    const domainSelect = document.getElementById('domain');
    const durationSelect = document.getElementById('duration');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const paymentInput = document.getElementById('paymentScreenshot');
    const aadharInput = document.getElementById('aadharCard');
    const termsCheckbox = document.getElementById('termsAgreement');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const photoError = document.getElementById('photoError');
    const collegeError = document.getElementById('collegeError');
    const departmentError = document.getElementById('departmentError');
    const domainError = document.getElementById('domainError');
    const durationError = document.getElementById('durationError');
    const startDateError = document.getElementById('startDateError');
    const paymentError = document.getElementById('paymentError');
    const aadharError = document.getElementById('aadharError');
    const termsError = document.getElementById('termsError');
    
    // Preview elements
    const photoPreview = document.getElementById('photoPreview');
    const paymentPreview = document.getElementById('paymentPreview');
    const aadharPreview = document.getElementById('aadharPreview');
    
    // Container elements
    const applicationFormContainer = document.getElementById('applicationForm');
    const resultContainer = document.getElementById('resultContainer');
    
    // Result elements
    const resultName = document.getElementById('resultName');
    const resultEmail = document.getElementById('resultEmail');
    const resultPhone = document.getElementById('resultPhone');
    const resultCollege = document.getElementById('resultCollege');
    const resultDepartment = document.getElementById('resultDepartment');
    const resultDomain = document.getElementById('resultDomain');
    const resultDuration = document.getElementById('resultDuration');
    const resultStartDate = document.getElementById('resultStartDate');
    const resultEndDate = document.getElementById('resultEndDate');
    const resultPhoto = document.getElementById('resultPhoto');
    const resultPayment = document.getElementById('resultPayment');
    const resultAadhar = document.getElementById('resultAadhar');
    
    // New application button
    const newApplicationBtn = document.getElementById('newApplicationBtn');
    
    // Set minimum date to today for start date
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    startDateInput.min = formattedDate;
    
    // Calculate end date based on duration and start date
    function calculateEndDate() {
        if (startDateInput.value && durationSelect.value) {
            const startDate = new Date(startDateInput.value);
            const durationDays = parseInt(durationSelect.value);
            
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + durationDays);
            
            // Format date to YYYY-MM-DD
            const year = endDate.getFullYear();
            const month = String(endDate.getMonth() + 1).padStart(2, '0');
            const day = String(endDate.getDate()).padStart(2, '0');
            
            endDateInput.value = `${year}-${month}-${day}`;
        } else {
            endDateInput.value = '';
        }
    }
    
    // Format date for display
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    
    // Get duration text
    function getDurationText(days) {
        const daysNum = parseInt(days);
        if (daysNum === 15) return "15 Days";
        if (daysNum === 30) return "1 Month";
        if (daysNum === 60) return "2 Months";
        if (daysNum === 90) return "3 Months";
        if (daysNum === 180) return "6 Months";
        return days + " Days";
    }
    
    // Attach event listeners for calculating end date
    startDateInput.addEventListener('change', calculateEndDate);
    durationSelect.addEventListener('change', calculateEndDate);
    
    // Only allow numbers in phone field
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    // Preview uploaded images
    photoInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                photoPreview.src = e.target.result;
                photoPreview.classList.remove('d-none');
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
    
    paymentInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                paymentPreview.src = e.target.result;
                paymentPreview.classList.remove('d-none');
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
    
    aadharInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                aadharPreview.src = e.target.result;
                aadharPreview.classList.remove('d-none');
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
    
    // Show results
    function showResults() {
        // Fill in the result container with form data
        resultName.textContent = nameInput.value;
        resultEmail.textContent = emailInput.value;
        resultPhone.textContent = phoneInput.value;
        resultCollege.textContent = collegeInput.value;
        resultDepartment.textContent = departmentInput.value;
        resultDomain.textContent = domainSelect.options[domainSelect.selectedIndex].text;
        resultDuration.textContent = getDurationText(durationSelect.value);
        resultStartDate.textContent = formatDate(startDateInput.value);
        resultEndDate.textContent = formatDate(endDateInput.value);
        
        // Set images
        resultPhoto.src = photoPreview.src;
        resultPayment.src = paymentPreview.src;
        resultAadhar.src = aadharPreview.src;
        
        // Hide the form and show the result
        applicationFormContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Reset the application form
    function resetApplication() {
        // Show the form and hide the result
        applicationFormContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        // Reset the form
        form.reset();
        photoPreview.classList.add('d-none');
        paymentPreview.classList.add('d-none');
        aadharPreview.classList.add('d-none');
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    // Attach event listener to new application button
    newApplicationBtn.addEventListener('click', resetApplication);
    
    // Validate form on submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Reset all error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.style.display = 'none');
        
        // Validate name
        if (!nameInput.value.trim()) {
            nameError.style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Validate phone number
        if (!/^\d{10}$/.test(phoneInput.value)) {
            phoneError.style.display = 'block';
            isValid = false;
        }
        
        // Validate passport photo
        if (!photoInput.files || photoInput.files.length === 0) {
            photoError.style.display = 'block';
            isValid = false;
        }
        
        // Validate college name
        if (!collegeInput.value.trim()) {
            collegeError.style.display = 'block';
            isValid = false;
        }
        
        // Validate department name
        if (!departmentInput.value.trim()) {
            departmentError.style.display = 'block';
            isValid = false;
        }
        
        // Validate domain
        if (domainSelect.value === "") {
            domainError.style.display = 'block';
            isValid = false;
        }
        
        // Validate duration
        if (durationSelect.value === "") {
            durationError.style.display = 'block';
            isValid = false;
        }
        
        // Validate start date
        if (!startDateInput.value) {
            startDateError.style.display = 'block';
            isValid = false;
        }
        
        // Validate payment screenshot
        if (!paymentInput.files || paymentInput.files.length === 0) {
            paymentError.style.display = 'block';
            isValid = false;
        }
        
        // Validate Aadhaar card image
        if (!aadharInput.files || aadharInput.files.length === 0) {
            aadharError.style.display = 'block';
            isValid = false;
        }
        
        // Validate terms agreement
        if (!termsCheckbox.checked) {
            termsError.style.display = 'block';
            isValid = false;
        }
        
        // If form is valid, show results
        if (isValid) {
            showResults();
        }
    });
});