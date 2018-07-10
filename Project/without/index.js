function openContacts() {
    $('.wrapper__article').css("display", "none");
    $('.wrapper__delivery').css("display", "none");
    $('.wrapper__contacts').css("display", "block");
}
function openDelivery(){
    $('.wrapper__article').css("display", "none");
    $('.wrapper__delivery').css("display", "block");
    $('.wrapper__contacts').css("display", "none");
}

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
                function(){
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