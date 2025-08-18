// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your commission request! I will contact you within 24 hours to discuss the details.');
        bookingForm.reset();
    });
}

// Gallery filtering
const filterButtons = document.querySelectorAll('[role="group"] button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        filterButtons.forEach(btn => btn.classList.remove('bg-secondary', 'text-white', 'border-secondary'));
        filterButtons.forEach(btn => btn.classList.add('bg-white', 'text-gray-900', 'border-gray-200'));
        
        this.classList.remove('bg-white', 'text-gray-900', 'border-gray-200');
        this.classList.add('bg-secondary', 'text-white', 'border-secondary');
    });
});
