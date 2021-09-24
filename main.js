const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
       nav.classList.toggle('show')
    })
}


const links = document.querySelector('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {

    })
}

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})


/* Testimonials carousel slider swiper */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mouseWheel: true,
    keyboard: true
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
    origin: 'top', 
    distance: '30px', 
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .txt, #home .image,
    #about .img, #about .text, 
    #services header, #services .card, 
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `, 
    { interval: 100 }
)