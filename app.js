const navbar = document.querySelector("#mainNavbar");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled')
    } else { navbar.classList.remove('scrolled') }
})
//

