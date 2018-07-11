var angle = 0;
function galleryspin(sign) {
    spinner = document.querySelector(".wrapper__article__carousel-spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function openContacts() {
    $('.wrapper__article')[0].style.display = 'none';
    $('.wrapper__delivery')[0].style.display = 'none';
    $('.wrapper__newCarousel')[0].style.display = 'none';
    $('.wrapper__contacts')[0].style.display = 'block';
}
function openDelivery(){
    $('.wrapper__article')[0].style.display = 'none';
    $('.wrapper__delivery')[0].style.display = 'block';
    $('.wrapper__contacts')[0].style.display = 'none';
    $('.wrapper__newCarousel')[0].style.display = 'none';
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
        $('.header__about__log-login').css("display", "none");
        $('.header__about__log-register').css("display", "none");
        $('.header__about__log-logout').css({"display":"block", "margin-top":"25px", "cursor": "pointer"});
        $('.user-name').text(enter.firstName);
        $('.user-name').css("text-shadow", "5px 5px 5px red");
        $('.header__about-down').css({"margin":"20px 0px 0px -18px", "cursor": "pointer"});
    } else {
        $('.header__about__log-login').css("display", "block");
        $('.header__about__log-register').css("display", "block");
        $('.header__about__log-logout').css("display", "none");
        $('.user-name').text('');
        $('.header__about-down').css("style", "none");
    }
}
checkUser();

function logout() {
    localStorage.setItem('data', JSON.stringify(Object.assign(enter, { login: false })));
    checkUser();
}

    
    var top_show = 150; 
    var delay = 1000; 
    $(document).ready(function() {
        $('#top').removeAttr("style").hide();
        $(window).scroll(function () { 
            
            if ($(this).scrollTop() > top_show) $('#top').fadeIn();
            else $('#top').fadeOut();
        });
        $('#top').click(function () { 
           
            $('body, html').animate({
                scrollTop: 0
            }, delay);
        });
    });


// BASKET

 $(document).ready(function() {
    $('#basket').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400, 
            function(){ 
                $('#modal_form') 
                    .css({'display': 'flex', 'flex-direction': 'column'}) 
                    .animate({opacity: 1, top: '50%'}, 200); 
        });
    });
   
    $('#modal_close, #overlay').click( function(){ 
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); 
                    $('#overlay').fadeOut(400); 
                }
            );
    });
});

var basketItems = [];
var currentItem = {};

function showItem(id){
    for(var i =0; i< products.length; i++){
        if(id === products[i].id){
            currentItem = products[i];
            var pName = products[i].name;
            var price = products[i].price;
            $("#name").html(name);
            $("#price").html(price + " $");
        }
    }
}
function addToBasket(){
    basketItems.push(currentItem);
    console.log(basketItems);
}
function getProductsList(list, element){
    list.map(function(element, index){
        return;
    })
}
