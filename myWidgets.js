var myInput = document.getElementById("password");
var result = document.getElementById("result");
var myProgressBar = document.getElementById("progressBar");
var progress = myProgressBar.style.width;

myInput.onkeyup = function() {
    var passStrength = checkPassword(myInput);
    result.value = passStrength;
}

function checkPassword(password) 
{
    var strength = 0;
    console.log(strength);
    if (password.value.length < 8)
    {
        document.getElementById("result").innerHTML = "Too Short..."
    }
    // contains more than 7 characters
    if (myInput.value.length > 7)
    {
        strength += 1;
        progress += 20 + "%";
        console.log(strength);
    }
    // contains upper and lower case values
    if (myInput.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) 
    {
        strength += 1;
        progress += 20 + "%";
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
        return "Weak";
    }
    else if (strength < 3)
    {
        return "Decent";
    }
    else if (strength < 4)
    {
        return "Good";
    }
    else
    {
        return "Strong";
    }
}