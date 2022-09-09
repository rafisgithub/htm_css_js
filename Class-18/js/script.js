// function checkFirstName(){
//     var firstNameValue=$('#firstName').val();
//     var regExp=/^[a-zA-Z-\.]{2,25}$/;

//     if(regExp.test(firstNameValue)){
//         $('#firstNameError').text(' ');
//         return true;
//     }else{
//         $('#firstNameError').text('First Name Should be 2 to 25 characters');
//         return false;
//     }
// };
// function checkLastName(){
//     var lastNameValue=$('#lastName').val();
//     var regExp=/^[a-zA-Z-\.]{2,25}$/;

//     if(regExp.test(lastNameValue)){
//         $('#lastNameError').text(' ');
//         return true;
//     }else{
//         $('#lastNameError').text('Last Name Should be 3 to 23 characters');
//         return false;
//     }
// };

// function checkEmail(){
//     var emailvalue=$('#email').val();
//     if(emailvalue.length >=10 && emailvalue.length <=30){
//         $('#emailError').text(' ');
//         return true;
//     }else{
//         $('#emailError').text('Mail address Should be 10 to 30 characters');
//         return false;
//     }
// };

// function checkPassword(){
//     var passwordVlaue=$('#password').val();
//     if(passwordVlaue.length >=6 && passwordVlaue.length <=20){
//         $('#passwordError').text(' ');
//         return true;
//     }
//     else{
//         $('#passwordError').text(' password should be 6 to 20 cha');
//         return false;
//     }
// }
// function checkConfirmPassword(){
//     var passwordVlaue=$('#password').val();
//     var confirmPasswordVlaue=$('#confirmPassword').val();
    

//     if(passwordVlaue==confirmPasswordVlaue){
//         $('#confirmPasswordError').text(' ');
//         return true;
//     }
//     else{
//         $('#confirmPasswordError').text(' password should be same');
//         return false;
//     }
// }
// $('#confirmPassword').keyup(function(){
//     checkConfirmPassword();
// });
// $('#password').keyup(function(){
//     checkPassword();
// });


// $('#email').keyup(function(){
//     checkEmail();
// });


// $('#lastName').keyup(function(){
//     checkLastName();
// });
    

// $('#firstName').keyup(function(){
    
//     checkFirstName();
// });




// $('#registerForm').submit(function(){
//     // alert('ok');
//     if(checkFirstName()==true && checkLastName()==true && checkEmail()==true && checkPassword==true && checkConfirmPassword==true){
//         return true;
//     }else{
//       return false;
//     }

// });

$('#firstName').keyup(function(){
    checkFirstName();
});
function checkFirstName(){
    var firstNameValue=$('#firstName').val();
    if(firstNameValue.length >=2 && firstNameValue.length <=10){
        $('#firstNameError').text('right');
        return true;
    }else{
        $('#firstNameError').text('First Name should be 2 to 10 characters.');
        return false;
    }
}

$('#lastName').keyup(function(){
    checkLastName();
});

function checkLastName(){
    var lastNameValue=$('#lastName').val();
    if(lastNameValue.length >=2 && lastNameValue.length <=10){
        $('#lastNameError').text('right.');
        return true;
        
    }else{
        $('#lastNameError').text('last name should be 2 to 10 characters.');
        return false;
    }
}

$('#email').keyup(function(){
    checkEmail();
});

function checkEmail(){
    var lastNameValue=$('#email').val();
    if(lastNameValue.length >=10 && lastNameValue.length <=100){
        $('#emailError').text('right.');
        return true;
        
    }else{
        $('#emailError').text('last name should be 10 to 100 characters.');
        return false;
    }
}

$('#password').keyup(function(){
    checkPassword();
});
function checkPassword(){
    var passwordVlaue=$('#password').val();
    if(passwordVlaue.length >10 && passwordVlaue.length<500000000000000000000000000){
        $('#passwordError').text('Strong password.');
        return true;
    }else{
        $('#passwordError').text('Insecure password.');
        return false;
    }
}
$('#confirmPassword').keyup(function(){
    checkConfirmPassword();
})
function checkConfirmPassword(){
    var confirmPasswordVlaue=$('#confirmPassword').val();
    var passwordVlaue=$('#password').val();
    if(passwordVlaue.length==confirmPasswordVlaue.length){
        $('#confirmPasswordError').text('Matched.');
        return true;
    }else{
        $('#confirmPasswordError').text('should be matched.');
    }
}


// $('#registerForm').submit(function(){
//     // alert('ok');
//     if(checkFirstName()==true && checkLastName()==true && checkEmail()==true && checkPassword==true && checkConfirmPassword==true){
//         return true;
//     }else{
//       return false;
//     }

// });
$('#registerForm').submit(function(){
    if(checkFirstName()==true && checkLastName()==true && checkPassword==true && checkEmail()==true && checkConfirmPassword==true){
        return true;
    }else{
        return false;
    }
});