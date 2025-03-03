


window.onload = function() {
    document.getElementById("form").reset();
};
function showSubCards(service) {
    // Hide main service cards
    document.querySelector(".main-cards-container").style.display = "none";

    // Hide all sub-cards
    document.querySelectorAll(".sub-cards-container").forEach(container => {
        container.style.display = "none";
    });

    // Show the selected sub-cards container
    document.getElementById(service + "-subcards").style.display = "block";

    // Show the back button
    document.querySelector(".back-btn").style.display = "block";
}

function showMainCards() {
    // Show main service cards
    document.querySelector(".main-cards-container").style.display = "block";

    // Hide all sub-cards
    document.querySelectorAll(".sub-cards-container").forEach(container => {
        container.style.display = "none";
    });

    // Hide the back button
    document.querySelector(".back-btn").style.display = "none";
}



function scrollToServices() {
            const servicesSection = document.getElementById('services');
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }












        // Smooth scrolling for navigation links
        document.addEventListener('DOMContentLoaded', function() {
            // Handle navbar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.custom-navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Initialize Bootstrap collapse
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });

            // Handle smooth scrolling and mobile menu collapse
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // If navbar is expanded on mobile, collapse it
                    if (navbarCollapse.classList.contains('show')) {
                        bsCollapse.hide();
                    }

                    // Smooth scroll to section
                    const targetId = this.getAttribute('href');
                    if (targetId !== '#') {
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            targetSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });

            // Add active class to current nav item
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });


        // Animate elements on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        });

        document.querySelectorAll('.service-card').forEach(card => {
            observer.observe(card);
        });


        function showSubCards(service) {
            // Hide main cards container
            document.querySelector('.main-cards-container').classList.add('hidden');
            
            // Hide all sub-cards containers
            document.querySelectorAll('.sub-cards-container').forEach(container => {
                container.classList.remove('active');
            });
            
            // Show selected sub-cards container
            document.getElementById(`${service}-subcards`).classList.add('active');
            
            // Show back button
            document.querySelector('.back-btn').classList.add('active');
        }

        






        document.querySelector('a[href="#internship"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('internshipPopup').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close popup when clicking X
document.querySelector('.close-popup').addEventListener('click', function() {
    document.getElementById('internshipPopup').style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
});

// Close popup when clicking outside
document.getElementById('internshipPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Show apply button when clicking card
function showApplyButton(card) {
    // Hide all other apply buttons first
    document.querySelectorAll('.apply-btn').forEach(btn => {
        btn.style.display = 'none';
        btn.classList.remove('show');
    });
    
    // Show and animate the clicked card's apply button
    const applyBtn = card.querySelector('.apply-btn');
    applyBtn.style.display = 'block';
    setTimeout(() => applyBtn.classList.add('show'), 10);
}









document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                // Get the navbar collapse element
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                // If navbar is expanded (shown), collapse it
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }

                // Scroll to the section
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Keep the rest of your existing JavaScript code unchanged
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                }
            });
        });

        document.querySelectorAll('.service-card').forEach(card => {
            observer.observe(card);
        });

        function showSubCards(service) {
            document.querySelector('.main-cards-container').classList.add('hidden');
            document.querySelectorAll('.sub-cards-container').forEach(container => {
                container.classList.remove('active');
            });
            document.getElementById(`${service}-subcards`).classList.add('active');
            document.querySelector('.back-btn').classList.add('active');
        }

        // Internship popup related code
        document.querySelector('a[href="#internship"]').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('internshipPopup').style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        document.querySelector('.close-popup').addEventListener('click', function() {
            document.getElementById('internshipPopup').style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        document.getElementById('internshipPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        function showApplyButton(card) {
            document.querySelectorAll('.apply-btn').forEach(btn => {
                btn.style.display = 'none';
                btn.classList.remove('show');
            });
            const applyBtn = card.querySelector('.apply-btn');
            applyBtn.style.display = 'block';
            setTimeout(() => applyBtn.classList.add('show'), 10);
        }









        window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Trigger initial reveal
reveal();



  