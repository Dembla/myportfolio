// Component loader function
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', async function () {
    // Load all components
    await Promise.all([
        loadComponent('navigation', 'components/navigation.html'),
        loadComponent('hero-section', 'components/hero.html'),
        loadComponent('skills-section', 'components/skills.html'),
        loadComponent('experience-section', 'components/experience.html'),
        loadComponent('education-section', 'components/education.html'),
        loadComponent('projects-section', 'components/projects.html'),
        loadComponent('certificates-section', 'components/certificates.html'),
        loadComponent('hackathons-section', 'components/hackathons.html'),
        loadComponent('contact-section', 'components/contact.html'),
        loadComponent('footer-section', 'components/footer.html')
    ]);

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active state to navigation on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    setTimeout(() => {
        const menuToggle = document.getElementById('mobile-menu');
        const navLinksContainer = document.querySelector('.nav-links');

        if (menuToggle && navLinksContainer) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('is-active');
                navLinksContainer.classList.toggle('active');
            });

            // Close menu when a link is clicked
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('is-active');
                    navLinksContainer.classList.remove('active');
                });
            });
        }
    }, 500); // 500ms delay to ensure component is loaded
});