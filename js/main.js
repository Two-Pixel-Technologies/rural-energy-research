// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const linksToggle = document.getElementById('linksToggle');
    const linksDropdown = document.getElementById('linksDropdown');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a nav link (except dropdown toggle)
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Handle dropdown toggle click
    if (linksToggle) {
        linksToggle.addEventListener('click', function(e) {
            e.preventDefault();
            // On mobile, toggle the dropdown menu visibility
            if (window.innerWidth <= 768) {
                linksDropdown.classList.toggle('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Don't apply smooth scroll to dropdown toggle link
            if (href === '#' && this.classList.contains('nav-dropdown-toggle')) {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


