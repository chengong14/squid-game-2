// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Like functionality
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const likeCount = this.querySelector('span');
        let count = parseInt(likeCount.textContent);
        count++;
        likeCount.textContent = count;
        
        // Add animation effect
        this.querySelector('i').style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.querySelector('i').style.transform = 'scale(1)';
        }, 200);
    });
});

// Social sharing functionality
document.querySelectorAll('.social-button').forEach(button => {
    button.addEventListener('click', function() {
        const text = encodeURIComponent('Come play Squid Game 2! An exciting survival challenge game!');
        const hashtags = encodeURIComponent('season2squidgame,squidgame,SquidChallenge');
        const url = encodeURIComponent(window.location.href);
        
        let shareUrl = '';
        if (this.classList.contains('twitter')) {
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}&url=${url}`;
        } else if (this.classList.contains('facebook')) {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (this.classList.contains('whatsapp')) {
            shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
        }
        
        window.open(shareUrl, '_blank');
    });
});

// Navigation bar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Game iframe loading optimization
// window.addEventListener('load', () => {
//     const iframe = document.querySelector('.game-frame iframe');
//     iframe.style.opacity = '0';
//     iframe.addEventListener('load', () => {
//         iframe.style.opacity = '1';
//         iframe.style.transition = 'opacity 0.3s ease';
//     });
// });

// Add page loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
}); 