var myInput = document.getElementById("password");
var result = document.getElementByTagName("span");
var myProgressBar = document.getElementById("progressBar");
var progress = myProgressBar.style.width;

myInput.onkeyup = function() {
    var passStrength = checkPassword(myInput.value);
    result.innerHTML = passStrength;
};

function checkPassword(password) 
{
    var strength = 0;
    console.log(strength);
    if (password.length < 8)
    {
        result.removeAttribute("id");
        result.setAttribute("class", "short");
        return "Too short";
    }
    // contains more than 7 characters
    if (password.length > 7)
    {
        strength += 1;
        progress += 20 + "%";
        console.log(strength);
    }
    // contains upper and lower case values
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) 
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
        result.removeAttribute("id");
        result.setAttribute("class", "weak");
        return "Weak";
    }
    else if (strength < 4)
    {
        result.removeAttribute("id");
        result.setAttribute("class", "good");
        return "Good";
    }
    else
    {
        result.removeAttribute("id");
        result.setAttribute("class", "strong");
        return "Strong";
    }
}