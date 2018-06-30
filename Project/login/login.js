function login() {
    var email = document.getElementById('form__email').value;
    var password = document.getElementById('form__password').value;
    var error = document.getElementById('error');
    error.style.color = 'red';
    var loginParseData = localStorage.getItem('data');
    var enter = JSON.parse(loginParseData);
    if (email === enter.email && password === enter.password) {
        localStorage.setItem('data', JSON.stringify(Object.assign(enter, {login: true})));
        window.open('../index.html', "_self");
    } else {
        error.innerHTML = 'Email or password is wrong';
    }
}
