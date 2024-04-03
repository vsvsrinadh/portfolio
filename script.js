// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Event listener for "Contact" link
document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("contact");
});

// Event listener for "Back to Top" button
document.getElementById("backToTopBtn").addEventListener("click", function(event) {
    event.preventDefault();
    scrollToSection("home");
});

// Show/hide "Back to Top" button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
