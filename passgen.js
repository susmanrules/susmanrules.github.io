output = document.getElementById("izvade")

function genPass() 
{
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
    pass = ""

    for (i = 0, n = charset.length; i < passLen; ++i) 
    {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    document.getElementById("passout").innerHTML = pass
    return pass
}

slider = document.getElementById("inputSlider")
passLen = slider.value

slider.oninput = function() 
{
    passLen = this.value
    document.getElementById("sliderValue").innerHTML = passLen
}

// šeit kodam ir kļūme ka parole tiek uzģenerēta nepilna vai var nebūt vēlamā garumā jo "charset" satur gan javascript gan html rakstzīmes kas maina kodu
