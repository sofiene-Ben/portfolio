// Validation code for inputs

var lastname = document.forms['form']['lastname'];
var firstname = document.forms['form']['firstname'];
var email = document.forms['form']['email'];
var phone = document.forms['form']['phone'];
var password = document.forms['form']['password'];


var lastname_error = document.getElementById('lastname_error');
var firstname_error = document.getElementById('firstname_error');
var email_error = document.getElementById('email_error');
var phone_error = document.getElementById('phone_error');
var pass_error = document.getElementById('pass_error');


email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', pass_verify);
lastname.addEventListener('textInput', lastname_verify);
firstname.addEventListener('textInput', firstname_verify);
phone.addEventListener('textInput', phone_verify);

function validated(){
    if (lastname.value.length < 3 ){
        lastname.style.border = "1px solid red";
        lastname_error.style.display = "block";
        lastname.focus();
        return false;
     }

    if (firstname.value.length < 3 ){
        firstname.style.border = "1px solid red";
        firstname_error.style.display = "block";
        firstname.focus();
        return false;
        }


     if (email.value.length < 9){
         email.style.border = "1px solid red";
         email_error.style.display = "block";
         email.focus();
         return false;
     }
     
     if (phone.value.length < 3 ){
         phone.style.border = "1px solid red";
         phone_error.style.display = "block";
         phone.focus();
         return false;
     }

     if (password.value.length < 6 ){
         password.style.border = "1px solid red";
         pass_error.style.display = "block";
         password.focus();
         return false;
     }




}

function email_verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver ";
        email_error.style.display = "none ";
        return true;
    }

}

function pass_verify(){
    if (password.value.length >= 5){
        password.style.border = "1px solid silver ";
        pass_error.style.display = "none ";
        return true;
    }

}

function lastname_verify(){
    if (lastname.value.length >= 3){
        lastname.style.border = "1px solid silver ";
        lastname_error.style.display = "none ";
        return true;
    }

}

function firstname_verify(){
    if (firstname.value.length >= 3){
        firstname.style.border = "1px solid silver ";
        firstname_error.style.display = "none ";
        return true;
    }
}

function phone_verify(){
    if (phone.value.length >= 10){
        phone.style.border = "1px solid silver ";
        phone_error.style.display = "none ";
        return true;
    }

}