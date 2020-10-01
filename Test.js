/*
$(document).ready(function() {
    $('#password').keyup(function() {
    $('#result').html(checkStrength($('#password').val()))
    })
    function checkStrength(password) {
    var strength = 0
    if (password.length < 6) {
    $('#result').removeClass()
    $('#result').addClass('short')
    return 'Too short'
    }
    if (password.length > 7) strength += 1
    // If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
    // If it has numbers and characters, increase strength value.
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
    // If it has one special character, increase strength value.
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // If it has two special characters, increase strength value.
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // Calculated strength value, we can return messages
    // If value is less than 2
    if (strength < 2) {
    $('#result').removeClass()
    $('#result').addClass('weak')
    return 'Weak'
    } else if (strength == 2) {
    $('#result').removeClass()
    $('#result').addClass('good')
    return 'Good'
    } else {
    $('#result').removeClass()
    $('#result').addClass('strong')
    return 'Strong'
    }
    }
    }); 
    */

var myInput = document.getElementById("password");
var result = document.getElementsByTagName('Span');
//var myProgressBar = document.getElementById("progressBar");
//var progress = myProgressBar.style.width;

myInput.onkeyup = function() {
    var passStrength = checkPassword(myInput.value);
    result.innerHTML = passStrength;
}
// document.querySelector("#result").addEventListener("keyup", checkPassword(myInput.value));

function checkPassword(password) 
{
    var strength = 0;
    if (password.length < 8)
    {
        result.classList.add("short");
        return "Too short";
    }
    // contains more than 7 characters
    if (password.length > 7)
    {
        strength += 1;
    }
    // contains upper and lower case values
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) 
    {
        strength += 1;
    }
    // number + characters
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
    {
        strength += 1;
    }
    // contains a special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))
    {
        strength += 1;
    }
    // contains 2 special characters
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))
    {
        strength += 1;
    }
    if (strength < 2)
    {
        result.classList.add("weak");
        return "Weak";
    }
    else if (strength < 4)
    {
        result.classList.add("good");
        return "Good";
    }
    else
    {
        result.classList.add("strong");
        return "Strong";
    }
}