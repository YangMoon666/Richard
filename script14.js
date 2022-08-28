// Меню
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.navbar');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
//Навигатор
const menuLinks = document.querySelectorAll('.navigator_system[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

//слайдер jq
const owl = $('.owl-carousel.s');
owl.owlCarousel({
    items: 1
});


//анимация
const animItems = document.querySelectorAll('.special__body_contant_box_block');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_look');
            } else {
                animItem.classList.remove('_look');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}


const animItems2 = document.querySelectorAll('.info__body');

if (animItems2.length > 0) {
    window.addEventListener('scroll', animOnScroll2);
    function animOnScroll2() {
        for (let index = 0; index < animItems2.length; index++) {
            const animItem2 = animItems2[index];
            const animItemHeight2 = animItem2.offsetHeight;
            const animItemOffset2 = offset2(animItem2).top;
            const animStart2 = 4;

            let animItemPoint2 = window.innerHeight - animItemHeight2 / animStart2;

            if (animItemHeight2 > window.innerHeight) {
                animItemPoint2 = window.innerHeight - window.innerHeight / animStart2;
            }
            if ((pageYOffset > animItemOffset2 - animItemPoint2) && pageYOffset < (animItemOffset2 + animItemHeight2)) {
                animItem2.classList.add('_look');
            } else {
                animItem2.classList.remove('_look');
            }
        }
    }
    function offset2(el2) {
        const rect2 = el2.getBoundingClientRect(),
            scrollLeft2 = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop2 = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect2.top + scrollTop2, left: rect2.left + scrollLeft2 }
    }
    animOnScroll2();
}