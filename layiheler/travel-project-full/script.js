// 1. Initialize Swiper.js Auto Carousel
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.mySwiper', {
        loop: true, // Infinite loop
        autoplay: {
            delay: 4000, // Slides switch every 4 seconds
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: "fade", // Modern fade transition between slides
    });
});

// 2. "Click to Load More" Functionality
const loadMoreBtn = document.getElementById('load-more-btn');
const hiddenCards = document.querySelectorAll('.hidden-card');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
        hiddenCards.forEach(card => {
            // Remove the hidden class to display the cards
            card.style.display = 'block'; 
            // Optional fade-in animation
            card.animate([
                { opacity: 0, transform: 'translateY(20px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], {
                duration: 500,
                fill: 'forwards'
            });
        });
        
        // Hide the button after loading the items
        loadMoreBtn.style.display = 'none';
    });
}

// 3. Popup Banner after a certain number of seconds (e.g., 5 seconds)
const popup = document.getElementById('promo-popup');
const closePopupBtn = document.getElementById('close-popup');

// Show popup after 5000 milliseconds (5 seconds)
setTimeout(() => {
    if(popup) {
        popup.classList.remove('hidden');
    }
}, 5000);

// Close popup on button click
if(closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
}

// Close popup if clicked outside the white box
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.add('hidden');
    }
});