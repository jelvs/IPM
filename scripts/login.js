function loginValidation() {
    {
        var usernameEmail = document.loginForm.usernameEmail;
        var password = document.loginForm.password;

        if (validateUser(usernameEmail)) {
            if (validatePassword(password)) {
                //alert('Form Succesfully Submitted');
                swal({
                    title: "Login successfully!",
                    type: 'success'
                
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
    else if (usernameEmail.value.length === 0) {
        swal({
            title: "Please insert some username or email...",
            type: 'error'
        });
        return false;
    }
    else {
        //alert("It seems the username is already in use :(");
        swal({
            title: "It seems your username isn't registed in the system :(",
            type: 'error'
        });
        //username.focus();
        return false;
    }
}


function validatePassword(password) {
    if (password === username.getPassword()) {
        return true;
    }
    else if (email.value.length === 0) {
        swal({
            title: "Please insert some email...",
            type: 'error'
        });
        return false;
    }
    else {
        //alert("It seems the passwords don't match :(");
        swal({
            title: "It seems your password is incorrect :(",
            type: 'error'
        });
        //password.focus()
        return false;
    }
}

function getNameOfUser() {
    var name = document.loginForm.usernameEmail;
    
    var j = "jos";
    var m = "mar";
    var r = "rod";

    if(name.includes(j)) {
        return "José";
    }
    else if(name.includes(m)) {
        return "Maria";
    }
    else if(name.includes(r)){
        return "Rodrigo";
    }
}





(function () {
    'use strict';

    window.addEventListener('load', function () {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    }, false);
})();
