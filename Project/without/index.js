function openContacts() {
    document.getElementsByClassName('wrapper__article')[0].style.display = 'none';
    document.getElementsByClassName('wrapper__delivery')[0].style.display = 'none';
    document.getElementsByClassName('wrapper__newCarousel')[0].style.display = 'none';
    document.getElementsByClassName('wrapper__contacts')[0].style.display = 'block';
}
function openDelivery(){
    document.getElementsByClassName('wrapper__article')[0].style.display = 'none';
    document.getElementsByClassName('wrapper__delivery')[0].style.display = 'block';
    document.getElementsByClassName('wrapper__contacts')[0].style.display = 'none';
    document.getElementsByClassName('wrapper__newCarousel')[0].style.display = 'none';
}

var loginParseData;
var enter;
function checkUser() {
    loginParseData = localStorage.getItem('data');
    enter = JSON.parse(loginParseData);
    if (enter && enter.email && enter.login) {
        document.getElementsByClassName('header__about__log-login')[0].style.display = 'none';
        document.getElementsByClassName('header__about__log-register')[0].style.display = 'none';
        document.getElementsByClassName('header__about__log-logout')[0].style.cssText= 'display:block; margin-top:25px; cursor: pointer';
        document.getElementsByClassName('user-name')[0].innerHTML = enter.email;
        document.getElementsByClassName('user-name')[0].style.cssText='text-shadow: 5px 5px 5px red';
        document.getElementsByClassName('header__about-down')[0].style.cssText= 'margin:-19px 0 0 97px;; cursor: pointer';
    } else {
        document.getElementsByClassName('header__about__log-login')[0].style.display = 'block';
        document.getElementsByClassName('header__about__log-register')[0].style.display = 'block';
        document.getElementsByClassName('header__about__log-logout')[0].style.display = 'none';
        document.getElementsByClassName('user-name')[0].innerHTML = '';
        document.getElementsByClassName('header__about-down')[0].style.cssText='none';
    }
}
checkUser();

function logout() {
    localStorage.setItem('data', JSON.stringify(Object.assign(enter, { login: false })));
    checkUser();
}

    var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(document).ready(function() {
        $(window).scroll(function () { // При прокрутке попадаем в эту функцию
            /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
            if ($(this).scrollTop() > top_show) $('#top').fadeIn();
            else $('#top').fadeOut();
        });
        $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
            /* Плавная прокрутка наверх */
            $('body, html').animate({
                scrollTop: 0
            }, delay);
        });
    });
