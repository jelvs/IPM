function loginValidation() {
    {
        var usernameEmail = document.loginForm.usernameEmail;
        var password = document.loginForm.password;

        if (validateUser(usernameEmail)) {
            if (validatePassword(password)) {
                //alert('Form Succesfully Submitted');
                swal({
                    title: "Login successfully!",
                    width: 600,
                    padding: 100,
                });
                return true;
            }
        }
    }
}

function validateUser(usernameEmail) {
    var existent;
    if (usernameEmail === existent) {
        return true;
    }
    //alert("It seems the username is already in use :(");
    swal({
        title: "It seems your username isn't registed in the system :(",
        width: 600,
        padding: 100,
    });
    //username.focus();
    return false;
}

function validatePassword(password) {
    if (password === username.getPassword()) {
        return true;
    }
    //alert("It seems the passwords don't match :(");
    swal({
        title: "It seems your password is incorrect :(",
        width: 600,
        padding: 100,
    });
    //password.focus()
    return false;
}
