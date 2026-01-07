document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
    });

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenuBtn.classList.contains('open');
            
            if (isOpen) {
                mobileMenuBtn.classList.remove('open');
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('menu-animate-enter');
            } else {
                mobileMenuBtn.classList.add('open');
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('menu-animate-enter');
            }
        });
    }

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 0) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
    });

    const phrases = ["Fullstack Programmer.", "Data Analyst.", "Web Advertiser."];
    let currentPhrase = 0;
    let isDeleting = false;
    let txt = '';
    let speed = 100;
    
    function typeWriter() {
        const currentElement = document.getElementById('typewriter');
        if (!currentElement) return;

        const fullTxt = phrases[currentPhrase];
        
        if (isDeleting) {
            txt = fullTxt.substring(0, txt.length - 1);
            speed = 50;
        } else {
            txt = fullTxt.substring(0, txt.length + 1);
            speed = 100;
        }
        
        currentElement.innerHTML = txt;
        
        if (!isDeleting && txt === fullTxt) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && txt === '') {
            isDeleting = false;
            currentPhrase++;
            if (currentPhrase === phrases.length) {
                currentPhrase = 0;
            }
            speed = 500;
        }
        
        setTimeout(typeWriter, speed);
    }

    typeWriter();
});
