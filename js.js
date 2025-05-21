let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .porfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-contect', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Especialista en climatizacion HVAC.', 'Reparaciones de calderas murales de doble servicio', 'Tecnico en refrigeracion trifasica y monofasica con tecnologia inverter.', ' Desarrollo web Front-End Developer.', 'Marketing digital y Desarrollo de contenidos .', 'Ventas en plataformas digitales y sitios web', 'Agente comercial, gestiones adminstrativas y cobranzas.', 'Solidas habilidades en atención al cliente y postventa.'],
    typeSpeed: 100,
    BackSpeed: 200,
    backDelay: 1000,
    loop: true
});




