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
                          type: 'success'

                        });
                        return true;

                }
            }
        }
    }
}


function validateUser(username) {
    var existent;
    if (username.value.length === 0) {
        swal({
            title: "Please insert some username...",
            type: 'error'
        });
        return false;
    }
    if (username.value === existent) {
        //alert("It seems the username is already in use :(");
        swal({
            title: "It seems the username is already in use :(",
            type: 'error'
        });
        //username.focus();
        return false;
    }
    return true;
}


function validateEmail(email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
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
        //alert("It seems the email is invalid :(");
        swal({
            title: "It seems the email is invalid :(",
            type: 'error'
        });
        //email.focus();
        return false;
    }
}

function validatePassword(password, password2) {
    if (password.value === password2.value) {
      if (password.value.length <= 6 && password2.value.length <=6) {
          swal({
              title: "Your password isn't Strong enough!!!!  Help us keep it safe Use at least 6 Characters.",
              type: 'error'
          });
          return false;
      }
      return true;
    }
    else if (password.value.length === 0) {
        swal({
            title: "Please insert some password...",
            type: 'error'
        });
        return false;
    }
    else {
        //alert("It seems the passwords don't match :(");
        swal({
            title: "It seems the passwords don't match :(",
            type: 'error'
        });
        //password.focus()
        return false;
    }
}

function show_confirm()
{
  swal({
  position: 'middle',
  type: 'success',
  title: 'Your Photo has been Saved! it will be used as your Profile Picture by Default.',
  showConfirmButton: true,

  })
}
//botao upload
/*window.onload=function(){
  document.getElementById("submit").style.display='none';
}*/
//botao upload
function showButton(){
  document.getElementById("submit").style.display="block";
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
