// VANTA.NET({
//     el: "#main-block",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0xeb3d3d,
//     backgroundColor: 0xc5c5c5,
//     points: 14.00
// })

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const burger = document.querySelector('.humburger-menu')
const menu = document.querySelector('.menu')
const menuLinksB = document.querySelectorAll('.menu-list__link')
const topBtn = document.querySelector('.btt__icon')
// const inputs = document.querySelectorAll('.formc__name')
// const labels = document.querySelectorAll('.placeholder')
// console.log(inputs)
// console.log(labels)
// inputs.forEach((label) => {
//     inputs.addEventListener('onchange', () => {
//         labels.classList.add('placeholder-active')
//     })
// })

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
        menuLink.addEventListener("click", onMenuLinkClick);

    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: gotoValue,
                behavior: "smooth"
            })
            e.preventDefault()
        }
    }
}
burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
})
menuLinksB.forEach((link) => {
    menu.classList.remove('menu-active')
})
document.addEventListener('click', (event) => {
    if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
        menu.classList.remove('menu-active')
    }
})

