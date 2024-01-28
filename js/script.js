$(function () {

    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/arrow-left.svg" alt=""></button>' ,
        nextArrow: '<button type="button" class="slick-next"><img src="./img/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]
    })

    $('.menu__btn').on('click', function () {
        $('.header__top-inner').toggleClass('header__top-inner--active')
    })

    let mixer = mixitup('.portfolio__content');
})