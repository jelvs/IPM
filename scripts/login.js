$(document).ready(function () {

    /*function loginValidation() {
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
    }*/


    function validateUser(usernameEmail) {
        if (usernameEmail.length == 0) {
            swal({
                title: "Please insert some username or email...",
                type: 'error'
            });
            return false;
        }
        else if(usernameEmail != document.loginForm.usernameEmail){
            swal({
                title: "It seems your username isn't registed in the system :(",
                type: 'error'
            });
            return false;
        }
        return true;
    }


    function validatePassword(password) {
        if (password == username.loginForm.password) {
            return true;
        }
        else if (email.length == 0) {
            swal({
                title: "Please insert some email...",
                type: 'error'
            });
            return false;
        }
        else {
            swal({
                title: "It seems your password is incorrect :(",
                type: 'error'
            });
            return false;
        }
    }    

    function getNameOfUser() {
        var name = document.loginForm.usernameEmail;

        var j = "jos";
        var m = "mar";
        var r = "rod";

        if (name.includes(j)) {
            return "José";
        }
        else if (name.includes(m)) {
            return "Maria";
        }
        else if (name.includes(r)) {
            return "Rodrigo";
        }
    }


    $("#loginBtn").click(function (e) {
        e.preventDefault();
        var usernameEmail = $("#validationUsernameEmail").val();
        var password = $("#validationPassword").val();
        if (validateUser(usernameEmail)) {
            if (validatePassword(password)) {
                swal({
                    title: "Login Successfully!",
                    type: 'success'
                });
                window.location.replace("dashboard.html?username="+usernameEmail);
            }
        }
    });

/*  if(usernameEmail === Maria){
       window.open("dashboard.html?username=Maria");
  }
 else if(usernameEmail === Jose){
      window.open("dashboard.html?username=Jose");
  }
  else if(usernameEmail === Rodrigo){
      window.open("dashboard.html?username=Rodrigo");
  }
*/

    function validate() {
      'use strict';

      window.addEventListener('load', function() {
        var form = document.getElementById('needs-validation');
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      }, false);
    };

});
