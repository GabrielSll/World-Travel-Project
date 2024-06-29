const linksInternosMenu = document.querySelectorAll('.js-menu a[href^="#"]');
const linksInternosSections = document.querySelectorAll('.js-section a[href^="#"]')

function initScrollSuave() {
    
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternosMenu.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })

    linksInternosSections.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}

initScrollSuave();