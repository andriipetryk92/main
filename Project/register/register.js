
function validate(event) {
    event.preventDefault();
    var validate = true;
    var firstName = $('#form__fname').val();
    var secondName = $('#form__sname').val();
    var email = $('#form__email').val();
    var password = $('#form__password').val();
    var phone = $('#form__phone').val();
    if (!firstName.length) {
        $("#namef").text('*This field is required');
        validate = false;
    }
    if (!secondName.length) {
        $('#snamef').text('*This field is required');
        validate = false;
    }
    if (password.length < 6) {
        $('#passwordf').text('*More than 6 wods');
        validate = false;
    }
    if ($('#form__password').val() !== $('#form__pass').val()) {
        $('#passf').text('*Different passwords');
        validate = false;
    }
    if (phone.length < 7) {
        $('#phonef').text('*Where is a number?');
        validate = false;
    }
    if (!/^\+3/.test(phone)) {
        $('#phonef').text('*Enter correct number');
        validate = false;
    }
    if (!email.length) {
        $('#emailf').text('*This field is required');
        validate = false;
    }
    dog = email.indexOf("@");
    dot = email.indexOf(".");
    if (dog < 1 || dot < 1) {
        $('#emailf').text('*Email is not correct');
        validate = false;
    }
    if (validate) {
        var user = {
            firstName: firstName, secondName: secondName, phone: phone, email: email, password: password
        };
        var localData = JSON.stringify(user);
        localStorage.setItem("data", localData);
        window.open('../login/login.html', '_self');
    }
}
