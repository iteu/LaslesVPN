
(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());


$('.comments-items').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<img src='../img/left.png' class='prev' alt='1'>",
    nextArrow: "<img src='../img/right.png' class='next' alt='2'>",
});