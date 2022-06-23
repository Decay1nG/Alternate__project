$(function () {

    $(".rateYo").rateYo({
        rating: 3.5,
        halfStar: true,
        spacing: "2px"
    })

    var mixer = mixitup('.blog__list')

    $('.button__filter').on('click', function () {
        $('.button__filter').removeClass('button__filter--active')
        $(this).addClass('button__filter--active')
    })

    $('.accordeon__link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('accordeon__link--active')
        $(this).children('.accordeon-text__hidden').slideToggle()
    })

    $('.comments__slaider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: false,
        waitForAnimate: false,
        appendDots: $('.comments__dots'),
        responsive:
            [
                {
                    breakpoint: 687,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
    })

    $('.control__arrow-wrapper--prev').on('click', function (e) {
        e.preventDefault()
        $('.comments__slaider').slick('slickPrev')
    })

    $('.control__arrow-wrapper--next').on('click', function (e) {
        e.preventDefault()
        $('.comments__slaider').slick('slickNext')
    })

    $(".navbar__links, .background__content").on("click", "a", function (event) {
        event.preventDefault()
        var id = $(this).attr('href'),
        top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 1000)
    })
    

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.navbar').hasClass('navbar--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);
    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.navbar').toggleClass('navbar--open')
        $('.overlay').toggleClass('overlay--open')
    })
})
