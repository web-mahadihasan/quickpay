
const inputLogInNumber = document.getElementById("log-input-phone").value;
// console.log(logInNumber);

document.getElementById("btn-login").addEventListener("click", function (event) {
    event.preventDefault();
    const inputNumber = getInputTextValue("log-input-phone");
    const inputPin = getInputTextValue("input-pin");
    
    if (!isNaN(inputNumber) && inputPin === demoPin && inputNumber.length === 11) {
      window.location.href = "/home.html";
    } else {
      const alterInfo = document.getElementById("alert-info");
      alterInfo.innerText = "Invalid Phone or PIN number!";
      alertShow("alert");
    }
});



