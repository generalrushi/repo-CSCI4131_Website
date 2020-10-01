function field_check()
{
    var event = document.getElementById("event").value;
    var day = document.getElementById("day").value;
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;
    var phone = document.getElementById("phone").value;
    var location = document.getElementById("location").value;
    var info = document.getElementById("info").value;
    var url = document.getElementById("URL").value;

    var specialCharacters = /[^a-zA-Z0-9 ]/g;

    /*
    QUESTIONS: 

    How do you throw error msg while user is typing?
    */

    // All fields are required to be filled out
    if (event === "" || day === "" || start === "" 
    || end === "" || phone === "" || location === ""
    || info === "" || url === "")
    {
        window.alert("Field is empty. Please fill this out.");
        return false;
    }
    
    // Checks for special characters
    if (event.match(specialCharacters))
    {
        window.alert("Special Characters not allowed!");
        return false;
    }

    // checks for www. and .com or .net or .gov
    if ( !((url.includes("https://www.") || url.includes("http://www.") 
    || url.includes("www.")) && (url.includes(".com")
    || url.includes(".net") || url.includes(".gov"))))
    {
        window.alert("Format url syntatically correctly.");
        return false;
    }
    return true;
}

function clear() 
{
    document.getElementById("form").reset();
}
