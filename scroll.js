// Get all the sections and the nav menu links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a, #mobile-menu a');

// Function to remove 'active' class from all links
function removeActiveLink() {
    navLinks.forEach(link => link.classList.remove('!text-green-500'));
}

// Function to activate the link corresponding to the visible section
function activateLinkForSection(sectionId) {
    removeActiveLink();
    const activeLink = document.querySelector(`nav a[href="${sectionId}"]`);
    console.log(activeLink);
    if (activeLink) {
        activeLink.classList.add('!text-green-500');
    }
}

// Function to determine which section is in view
function onScroll() {
    
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop - sectionHeight / 3 && scrollY < sectionTop + sectionHeight / 3) {
            currentSection = `#${section.id}`;
        }
    });

    if (currentSection) {
        console.log(currentSection);
        activateLinkForSection(currentSection);
    }
}

// Listen for scroll events
window.addEventListener('scroll', onScroll);

// Set the initial active link when the page loads
onScroll();
