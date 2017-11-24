/*$(document).ready(function () {
    function user(pic, username, email, password, password2, birth) {
        this.pic = pic;
        this.username = username;
        this.email = email;
        this.password = password;
        this.password2 = password2;
        this.birth = birth;
    }
    var accounts = [];
    accounts.push(new user(null, "José", "jose@gmail.com", "test123", "test123", null))

    $("input").keyup(function () {
        var input = $("input").val();
    });

    $("button").click(function () {
        $.post("demo_test_post.asp",
            {
            },
            function (data, status) {
                alert("Account successfully created!");
            });
    });
});*/


/*function submitRegister() {
    document.getElementById("registerForm").submit();
    alert(document.registerForm.username);
}*/


function registerValidation() {
    {
        var username = document.registerForm.username;
        var email = document.registerForm.email;
        var password = document.registerForm.password;
        var password2 = document.registerForm.password2;

        if (validateUser(username)) {
            if (validateEmail(email)) {
                if (validatePassword(password, password2)) {
                    //alert('Form Succesfully Submitted');
                    swal({
                        title: "Account created successfully!",
                        width: 600,
                        padding: 100,
                    });
                    return true;

                }
            }
        }
    }
}

function validateUser(username) {
    var existent;
    if (username === existent) {
        //alert("It seems the username is already in use :(");
        swal({
            title: "It seems the username is already in use :(",
            width: 600,
            padding: 100,
        });
        //username.focus();
        return false;
    }
    if (username.length === 0) {
        swal({
            title: "Please insert some username..",
            width: 600,
            padding: 100,
        });
        return false;
    }
    return true;
}

function validateEmail(email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
        return true;
    }
    else if (email.length === 0) {
        swal({
            title: "Please insert some email..",
            width: 600,
            padding: 100,
        });
        return false;
    }
    else {
        //alert("It seems the email is invalid :(");
        swal({
            title: "It seems the email is invalid :(",
            width: 600,
            padding: 100,
        });
        //email.focus();
        return false;
    }
}

function validatePassword(password, password2) {
    if (password === password2) {
        return true;
    }
    else if (password.length === 0) {
        swal({
            title: "Please insert some password..",
            width: 600,
            padding: 100,
        });
        return false;
    }
    else {
        //alert("It seems the passwords don't match :(");
        swal({
            title: "It seems the passwords don't match :(",
            width: 600,
            padding: 100,
        });
        //password.focus()
        return false;
    }
}
