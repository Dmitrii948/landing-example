$(document).ready(function () {
    //скрипт для показа/скрытия выпадающего меню на смартфонах
    // Создаем переменые для кнопки и для меню
    var pull = $("#navigation-toggle");
    var nav = $('.navigation ul');
    // Описываем событие при нажатии на кнопку
    $(pull).on("click", function (e) {
        // Отменяем стандартное поведение ссылки в браузере
        e.preventDefault();
        // Открываем/Скрываем меню
        $(nav).slideToggle();
        // Добавляем модификатор --active
        $(this).toggleClass('navigation__toggle-button--active');
    });
    // Скрываем меню при клике на него на смартфоне и планшете
    // По клику на ссылку в меню запускаем ф-ю fnstart();
    $('nav.navigation a').on("click", function () {
        fnstart();
    });

    // В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
    // тогда убираем класс модификатор --active у кнопки pull
    // и сворачиваем/скрываем меню 
    function fnstart() {
        if ($("#navigation-toggle").hasClass("navigation__toggle-button--active")) {
            pull.toggleClass('navigation__toggle-button--active');
            nav.slideToggle();
        }
    };


    //карусель для слайдера
    $("#owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        loop: true,
        navText: ["<img src='/apollo-404/img/icons/arrow-left.png'>", "<img src='/apollo-404/img/icons/arrow-right.png'>"],
    });


    //плавный скрол до якоря
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector: "nav a"
    });
    // $('.navigation__ul__li').on('click', function (e) {
    //   $('html,body').stop().animate({
    //     scrollTop: $('#footer').offset().top
    //}, 1000);
    //e.preventDefault();
    //});
});
