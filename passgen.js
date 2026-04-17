function genPass() 
{
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
    pass = ""

    for (i = 0, n = charset.length; i < passLen; ++i) 
    {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    return pass
}

slider = document.getElementById("inputSlider")
passLen = slider.value

slider.oninput = function() 
{
    passLen = this.value
    document.getElementById("sliderValue").innerHTML = passLen
}