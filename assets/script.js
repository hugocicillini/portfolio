function openNav() {
    document.getElementById("myNav").style.width = 'calc(100vw - 12rem)';
    document.getElementById("myNav").style.height = '50%';
}

function closeNav() {
    document.getElementById("myNav").style.width = 0;
}

if (window.innerWidth < 701) {
    function openNav() {
        document.getElementById("myNav").style.width = '100%';
        document.getElementById("myNav").style.height = '60%';
        document.getElementById("myNav").style.right = '0';
    }
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});