function checkPassword(password) 
{
    var strength = 0;
    if (password.length < 8)
    {
        document.getElementById("result").innerHTML = "Too Short..."
    }
    if (password.length > 7)
    {
        strength += 1;
    }
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) 
    {
        strength += 1;
    }
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))
    {
        strength += 1;
    }
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))
    {
        strength += 1;
    }
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/))
    {
        strength += 1;
    }
    if (strength < 2)
    {
        document.getElementById("result").innerHTML = "Weak";
    }
    else if (strength < 3)
    {
        document.getElementById("result").innerHTML = "Decent";
    }
    else if (strength < 4)
    {
        document.getElementById("result").innerHTML = "Good";
    }
    else
    {
        document.getElementById("result").innerHTML = "Strong";
    }
}