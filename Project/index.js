var angle = 0;
function galleryspin(sign) {
    spinner = document.querySelector(".wrapper__article__carousel-spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

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
var controls = document.querySelectorAll('.wrapper__newCarousel__buttons-controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('.wrapper__newCarousel__slides .wrapper__newCarousel__slides-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'wrapper__newCarousel__slides-slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'wrapper__newCarousel__slides-slide showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};
var loginParseData;
var enter;
function checkUser() {
    loginParseData = localStorage.getItem('data');
    enter = JSON.parse(loginParseData);
    if (enter && enter.email && enter.login) {
        document.getElementsByClassName('header__about__log-login')[0].style.display = 'none';
        document.getElementsByClassName('header__about__log-register')[0].style.display = 'none';
        document.getElementsByClassName('header__about__log-logout')[0].style.cssText= 'display:block; margin-top:25px; cursor: pointer';
        document.getElementsByClassName('user-name')[0].innerHTML = enter.firstName;
        document.getElementsByClassName('user-name')[0].style.cssText='text-shadow: 5px 5px 5px red';
        document.getElementsByClassName('header__about-down')[0].style.cssText= 'margin:20px 0 0 -41px; cursor: pointer';
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

    var top_show = 15; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(document).ready(function() {
        $('#top').removeAttr("style").hide();
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
