// Component loader function
async function loadComponent(elementId, componentPath) {
    try {
        const element = document.getElementById(elementId);
        if (!element) return;

        const response = await fetch(componentPath);
        const html = await response.text();
        element.innerHTML = html;
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

    // Handle navigation links for different pages
    if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
        // If we are NOT on index.html (e.g. on til.html), ensure nav links point to index.html
        // The links in navigation.html are now "index.html#section", which works for external pages.
        // But for index.html itself, we might want to strip "index.html" to avoid reloads/url changes if desired,
        // although "index.html#section" is valid.
        // However, since I updated navigation.html to have 'index.html#...', 
        // they will work fine from til.html.
        // But on index.html, they might cause a reload if not handled or just standard anchor behavior.
        // Smooth scroll listener below handles 'a[href^="#"]', so we need to make sure
        // on index.html we treat 'index.html#hash' as just '#hash' for smooth scroll.
    }


    // Add smooth scrolling for navigation links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Check if it's a hash link OR a link to index.html#hash and we are on index
            const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

            if (href.startsWith('#') || (isIndex && href.includes('index.html#'))) {
                const hash = href.includes('#') ? '#' + href.split('#')[1] : null;
                if (hash) {
                    e.preventDefault();
                    const target = document.querySelector(hash);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        // Update URL without reload
                        history.pushState(null, null, hash);

                        // Close mobile menu if open
                        const menuToggle = document.getElementById('mobile-menu');
                        const navLinksContainer = document.querySelector('.nav-links');
                        if (menuToggle && navLinksContainer && menuToggle.classList.contains('is-active')) {
                            menuToggle.classList.remove('is-active');
                            navLinksContainer.classList.remove('active');
                        }
                    }
                }
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
            const href = link.getAttribute('href');
            // Match if href is exactly the hash or ends with the hash (for index.html#section)
            if (href === `#${current}` || href.endsWith(`#${current}`)) {
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