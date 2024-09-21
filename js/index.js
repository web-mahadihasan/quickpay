
document.getElementById("btn-login").addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumber = getInputTextValue("input-phone");
    const inputPin = getInputTextValue("input-pin");
    
    if ((!isNaN(inputNumber)) & (inputPin === demoPin)) {
        window.location.href = "/home.html";
    }else{
        const alterInfo = document.getElementById("alert-info");
        alterInfo.innerText = 'Invalid Phone or PIN number!'
        alertShow("alert");
    }
});


