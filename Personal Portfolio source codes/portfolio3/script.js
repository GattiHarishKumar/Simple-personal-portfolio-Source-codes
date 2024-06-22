document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent!'); // Replace this with actual form handling code
    });

    // Basic animation example (fade-in sections)
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});