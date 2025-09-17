// JavaScript for GeoPs Landing Page

// Global variables
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeFAQ();
    initializeScrollAnimations();
    initializeMobileMenu();
    initializeHorizontalCarousels();
});

// Carousel Functions
function initializeCarousel() {
    if (slides.length > 0) {
        showSlide(0);
        
        // Auto-advance carousel every 5 seconds
        setInterval(() => {
            nextSlide();
        }, 5000);
    }
}

function showSlide(index) {
    const indicators = document.querySelectorAll('.indicator');
    
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === index) {
            indicator.classList.add('active');
        }
    });
    
    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function goToSlide(index) {
    showSlide(index);
}

// Horizontal Carousel Functions
function initializeHorizontalCarousels() {
    const carouselSections = document.querySelectorAll('.carousel-section');
    
    carouselSections.forEach((section, sectionIndex) => {
        const carousel = section.querySelector('.horizontal-carousel');
        const items = section.querySelectorAll('.carousel-item');
        
        if (!carousel || !items.length) return;
        
        let currentIndex = 0;
        
        // Add click handlers to all items
        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (index !== currentIndex) {
                    currentIndex = index;
                    showHorizontalItems(items, currentIndex);
                    updateHorizontalIndicators(section, currentIndex);
                }
            });
        });
        
        // Initially show the first set of items
        showHorizontalItems(items, currentIndex);
        
        // Create dots for each item
        createDotsForCarousel(section, items.length);
        
        // Add click handlers to dots
        const indicators = section.querySelectorAll('.h-indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                showHorizontalItems(items, currentIndex);
                updateHorizontalIndicators(section, currentIndex);
            });
        });
        
        // Auto-scroll functionality
        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            showHorizontalItems(items, currentIndex);
            updateHorizontalIndicators(section, currentIndex);
        }, 4000); // Change item every 4 seconds
    });
}

function createDotsForCarousel(section, itemCount) {
    const indicatorsContainer = section.querySelector('.horizontal-carousel-indicators');
    if (!indicatorsContainer) return;
    
    // Clear existing indicators
    indicatorsContainer.innerHTML = '';
    
    // Add new indicators for each item
    for (let i = 0; i < itemCount; i++) {
        const indicator = document.createElement('span');
        indicator.className = `h-indicator ${i === 0 ? 'active' : ''}`;
        indicatorsContainer.appendChild(indicator);
    }
}

function showHorizontalItems(items, activeIndex) {
    const totalItems = items.length;
    
    items.forEach((item, index) => {
        // Calculate positions: previous, current, next
        const prevIndex = (activeIndex - 1 + totalItems) % totalItems;
        const nextIndex = (activeIndex + 1) % totalItems;
        
        // Reset all items
        item.style.display = 'block';
        item.style.transition = 'all 0.4s ease';
        item.style.transform = 'translateX(-50%) scale(1)';
        item.style.opacity = '1';
        item.style.zIndex = '1';
        
        if (index === activeIndex) {
            // Current/center item
            item.style.transform = 'translateX(-50%) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '3';
            item.classList.add('center-item');
            item.classList.remove('side-item');
        } else if (index === prevIndex) {
            // Previous/left item
            item.style.transform = 'translateX(-180%) scale(1)';
            item.style.opacity = '0.7';
            item.style.zIndex = '2';
            item.classList.add('side-item');
            item.classList.remove('center-item');
        } else if (index === nextIndex) {
            // Next/right item
            item.style.transform = 'translateX(80%) scale(1)';
            item.style.opacity = '0.7';
            item.style.zIndex = '2';
            item.classList.add('side-item');
            item.classList.remove('center-item');
        } else {
            // Hidden items
            item.style.transform = 'translateX(-50%) scale(1)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
            item.classList.remove('center-item', 'side-item');
        }
    });
}

function updateHorizontalIndicators(section, activeIndex) {
    const indicators = section.querySelectorAll('.h-indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === activeIndex);
    });
}

// FAQ Accordion Functions
function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFAQ(this);
        });
    });
}

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sectionsToAnimate = document.querySelectorAll('.brands-section, .about-section, .plans-section, .carousel-section, .cta-section, .faq-section, .know-more-section');
    
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
}

// Mobile Menu Functions
function initializeMobileMenu() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down - hide header
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Add transition for smooth header hide/show
    header.style.transition = 'transform 0.3s ease-in-out';
}

// Horizontal Scroll for Carousels
function initializeHorizontalScroll() {
    const horizontalCarousels = document.querySelectorAll('.horizontal-carousel');
    
    horizontalCarousels.forEach(carousel => {
        // Add touch/mouse drag scrolling
        let isDown = false;
        let startX;
        let scrollLeft;
        
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.style.cursor = 'grabbing';
        });
        
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        
        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
        
        // Add wheel scrolling
        carousel.addEventListener('wheel', (e) => {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
        });
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Validation (if forms are added later)
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Loading Animation
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-overlay';
    loadingDiv.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Cargando...</p>
        </div>
    `;
    document.body.appendChild(loadingDiv);
}

function hideLoading() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.remove();
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeHorizontalScroll();
    initializeSmoothScrolling();
    
    // Add scroll listener for navbar background
    const header = document.querySelector('.header');
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, 100));
    
    // Handle window resize for horizontal carousels
    window.addEventListener('resize', debounce(() => {
        initializeHorizontalCarousels();
    }, 250));
});

// Add CSS for scroll effects and animations
const additionalStyles = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .header.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .horizontal-carousel {
        cursor: grab;
        scrollbar-width: thin;
        scrollbar-color: var(--primary-color) transparent;
    }
    
    .horizontal-carousel::-webkit-scrollbar {
        height: 6px;
    }
    
    .horizontal-carousel::-webkit-scrollbar-track {
        background: transparent;
    }
    
    .horizontal-carousel::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 3px;
    }
    
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }
    
    .loading-spinner {
        text-align: center;
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid var(--border-color);
        border-top: 4px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2) !important;
    }
    
    /* Mobile responsive improvements */
    @media (max-width: 768px) {
        .horizontal-carousel {
            -webkit-overflow-scrolling: touch;
        }
        
        .carousel-btn {
            display: none;
        }
        
        .hero-carousel {
            padding: 0 var(--spacing-md);
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Export functions for global access
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.toggleFAQ = toggleFAQ;
window.goToSlide = goToSlide;