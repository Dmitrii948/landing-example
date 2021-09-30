$(document).ready(function () {
    //********НАВИГАЦИЯ НА МОБИЛКАХ***********
    /* показ/скрытие меню накигации*/
    function navButtonToggle() {
        if ($("#navigation__button").hasClass('active')) {
            $("#navigation__button").removeClass('active')
        } else {
            $("#navigation__button").addClass('active')
        }
    }
    $("#navigation__button").on("click", function (e) {
        e.preventDefault();
        $('.navigation__list').toggleClass('navigation__list--open');
        navButtonToggle();
    })
    //закрываем меню после клика по ссмылке
    $('.navigation__list a').on('click', function () {
        if ($('.navigation__list').hasClass('navigation__list--open')) {
            navButtonToggle();
        }
        $('.navigation__list').removeClass('navigation__list--open');
    })
    //********НАВИГАЦИЯ НА МОБИЛКАХ END***********

    //плавная прокрутка по ссылкам внутри страницы
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
    //MixItUp - фильтрация работ в портфолия
    var mixer = mixitup('#portfolio-project');

    //добавление рамки активному фильтру
    $('.filter__button').on('click', function () {
        $('.filter__element').children().removeClass('filter__button--active');
        $(this).addClass('filter__button--active');
    })
    //    JQuery Validate JS
    $("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите имя",
            },
            email: {
                required: "Пожалуйста, введите ваш email",
                email: "Email адрес должен быть в формате name@domain.com. Возможно вы ввели email с ошибкой."
            },
            message: {
                required: "Пожалуйста, введите текст сообщения"
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    })
    // Функция AJAX запрса на сервер
    function ajaxFormSubmit() {
        var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

        // Формируем ajax запрос
        $.ajax({
            type: "POST", // Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие даные отправляем, в данном случае отправляем переменную string

            // Функция если все прошло успешно
            success: function (html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });
        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
        return false;
    }
});
