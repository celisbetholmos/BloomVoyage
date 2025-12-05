// ============================================
// BLOOMVOYAGE - NAVIGATION
// Navigation and routing functionality
// ============================================

// Navigation data
const navigationData = {
    home: 'index.html',
    destinations: 'destinations.html',
    experiences: 'experiences.html',
    romanticSpots: 'romantic-spots.html',
    tips: 'tips.html',
    about: 'about.html',
    contact: 'contact.html',
    login: 'login.html',
    signup: 'signup.html'
};

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    highlightActivePage();
});

// ===== Initialize Navigation =====
function initNavigation() {
    // Add click handlers to navigation links
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Handle internal navigation
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href);
            }
        });
    });
}

// ===== Highlight Active Page =====
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
            link.style.color = 'var(--primary-color)';
        }
    });
}

// ===== Smooth Scroll =====
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// ===== Navigate to Page =====
function navigateTo(page) {
    if (navigationData[page]) {
        window.location.href = navigationData[page];
    }
}

// ===== Back Button =====
function goBack() {
    window.history.back();
}

// ===== Get URL Parameters =====
function getUrlParams() {
    const params = {};
    const urlParams = new URLSearchParams(window.location.search);
    
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
    
    return params;
}

// ===== Set URL Parameter =====
function setUrlParam(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}

// ===== Remove URL Parameter =====
function removeUrlParam(key) {
    const url = new URL(window.location);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
}

