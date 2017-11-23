$(document).ready(function () {
    function user(pic, username, email, pwd, pwd2, birth) {
        this.pic = pic;
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.pwd2 = pwd2;
        this.birth = birth;
    }
    var accounts = [];
    accounts.push(new user(null, "musicflow", "musicflow@gmail.com", "xpto1234", "xpto1234", null))

    $("input").keyup(function () {
        var input = $("input").val();
    });

    $("button").click(function () {
        $.post("demo_test_post.asp",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function (data, status) {
                alert("Account successfully created!");
            });
    });
});


function submitRegister() {
    document.getElementById("registerForm").submit();
    alert(document.registerForm.username);
}


function registerValidation() {
    {
        var uid = document.registration.userid;
        var passid = document.registration.passid;
        var uname = document.registration.username;
        var uadd = document.registration.address;
        var ucountry = document.registration.country;
        var uzip = document.registration.zip;
        var uemail = document.registration.email;
        var umsex = document.registration.msex;
        var ufsex = document.registration.fsex;

        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}


function ValidateEmail(email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}  