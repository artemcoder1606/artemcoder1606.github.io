
// если шапка уходит наверх, меняются стили для контента внутри шапки
const headerElement = document.querySelector('.header');

if(headerElement) {
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
        } else {
            headerElement.classList.add('_scroll');
        }
    };
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);
}

// provide smooth transition to section
    function goToSection() {
        // get all elements with attibute data-goto
        const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
        if (menuLinks.length > 0) { //add click on each element
            for (let i = 0; i < menuLinks.length; i++) {
                const clickItem = menuLinks[i]
                clickItem.addEventListener('click', onMenuClick)
            }
            function onMenuClick(e) { //do smooth transition to section
                const menuLink = e.target
                if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                    const gotoBlock = document.querySelector(menuLink.dataset.goto)
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__row').offsetHeight
                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: "smooth"
                    })
                }
                e.preventDefault()
            }
        }
    }

    goToSection()


    // закрывеет мобильное меню при клике на ссылку из этого меню
    if(document.querySelectorAll('.menu__link').length !== 0) {
        document.querySelectorAll('.menu__link').forEach(item  => {
            item.addEventListener('click', () => {
                document.querySelector('.menu').classList.remove('_active')
                document.querySelector('.menu__icon ').classList.remove('_active')
                document.querySelector('body').classList.remove('_lock')
            })
        })
    }