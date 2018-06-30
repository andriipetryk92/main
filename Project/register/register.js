
function validate(event) {
    event.preventDefault();
    var validate = true;
    var firstName = document.getElementById('form__fname').value;
    var secondName = document.getElementById('form__sname').value;
    var email = document.getElementById('form__email').value;
    var password = document.getElementById('form__password').value;
    var phone = document.getElementById('form__phone').value;
    if (!firstName.length) {
        document.getElementById('namef').innerHTML = '*This field is required';
        validate = false;
    }
    if (!secondName.length) {
        document.getElementById('snamef').innerHTML = '*This field is required';
        validate = false;
    }
    if (password.length < 6) {
        document.getElementById('passwordf').innerHTML = '*More than 6 wods';
        validate = false;
    }
    if (document.getElementById('form__password').value !== document.getElementById('form__pass').value) {
        document.getElementById('passf').innerHTML = '*Different passwords';
        validate = false;
    }
    if (phone.length < 7) {
        document.getElementById('phonef').innerHTML = '*Where is a number?';
        validate = false;
    }
    if (!/^\+3/.test(phone)) {
        document.getElementById('phonef').innerHTML = '*Enter correct number';
        validate = false;
    }
    if (!email.length) {
        document.getElementById('emailf').innerHTML = '*This field is required'
        validate = false;
        // return false;
    }
    dog = email.indexOf("@");
    dot = email.indexOf(".");
    if (dog < 1 || dot < 1) {
        document.getElementById('emailf').innerHTML = '*Email is not correct';
        validate = false;
    }
    if (validate) {
        var user = {
            firstName: firstName, phone: phone, email: email, password: password
        };
        var localData = JSON.stringify(user);
        localStorage.setItem("data", localData);
        window.open('../login/login.html', '_self');
    }
}
