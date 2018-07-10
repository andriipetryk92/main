function login() {
    var email = $('#form__email').val();
    var password = $('#form__password').val();
    var loginParseData = localStorage.getItem('data');
    var enter = JSON.parse(loginParseData);
    if (email === enter.email && password === enter.password) {
        localStorage.setItem('data', JSON.stringify(Object.assign(enter, {login: true})));
        window.open('../index.html', "_self");
    } else {
        $('#error').text('Email or password is wrong');
        $('#error').css({"color": "red", "text-align": "center"});
    }
}
