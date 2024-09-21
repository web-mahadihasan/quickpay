
// Add money 

document.getElementById("btn-add-money").addEventListener("click", function(event){
    event.preventDefault();

    let mainBalance = getInnerText("main-balance");
    const inputAddAmount = getInputNumberValue("input-add-amount");
    const getInputPin = getInputTextValue("add-money-pin");

    if (inputAddAmount <= 9){
      const alterInfo = document.getElementById("alert-info");
      alterInfo.innerText = "Add money failed. You can't add less than 10 Tk!";
      return alertShow("alert");
    }
      if (getInputPin === demoPin) {
        mainBalance = mainBalance + inputAddAmount;
        document.getElementById("main-balance").innerText = mainBalance;
        deleteInput("input-add-amount");
        deleteInput("add-money-pin");
        deleteInput("add-money-bank");
        const alterInfo = document.getElementById("alert");
        alterInfo.classList.add("hidden");

        // Create History

        const addMoneyIcon = document.getElementById("add-money-icon").src;
        const historyTitle = document.getElementById("add-money-title").innerText;

        historyCreator(addMoneyIcon, historyTitle, inputAddAmount, "+");
      } else {
        const alterInfo = document.getElementById("alert-info");
        alterInfo.innerText = "Add money failed. Invalid bank or PIN number!";
        alertShow("alert");
      }

});


// Cash out 

document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();

     let mainBalance = getInnerText("main-balance");
    const inputCashoutAmount = getInputNumberValue("input-cashout-amount");
    const inputCashoutPin = getInputTextValue("input-cashout-pin");
    const inputCashOutAgentNumber = getInputTextValue("cash-out-agent");

        if (inputCashoutAmount <= 9) {
          const alterInfo = document.getElementById("alert-info");
          alterInfo.innerText =
            "Cashout failed. You can't Cash out less 10 Tk!";
          return alertShow("alert");
        }
        if (inputCashoutAmount > mainBalance) {
          const alterInfo = document.getElementById("alert-info");
          alterInfo.innerText = "failed. Insufficient balance please add money!";
          return alertShow("alert");
        }

        if (inputCashoutPin === demoPin && inputCashOutAgentNumber.length === 11) {
          mainBalance = mainBalance - inputCashoutAmount;
          document.getElementById("main-balance").innerText = mainBalance;
          deleteInput("input-cashout-amount");
          deleteInput("input-cashout-pin");
          deleteInput("cash-out-agent");
          const alterInfo = document.getElementById("alert");
          alterInfo.classList.add("hidden");

          // Create History

          const cashOutIcon = document.getElementById("cash-out-icon").src;
          const cashOutTitle =
            document.getElementById("cash-out-title").innerText;

          historyCreator(cashOutIcon, cashOutTitle, inputCashoutAmount, "-");
        } else {
          const alterInfo = document.getElementById("alert-info");
          alterInfo.innerText = "Cash out failed. Invalid agent or PIN number!";
          alertShow("alert");
        }
});

// Transfer Money 

document.getElementById("send-money-btn").addEventListener("click", function(event){
    event.preventDefault();

    let mainBalance = getInnerText("main-balance");
    const inputTransferMoney = getInputNumberValue("input-transfer-amount");
    const inputTransferPin = getInputTextValue("input-transfer-pin");
    const inputTransferNumber = getInputTextValue("transfer-money-number");

            if (inputTransferMoney <= 9) {
              const alterInfo = document.getElementById("alert-info");
              alterInfo.innerText =
                "Send Money failed. You can't Send less 10 Tk!";
              return alertShow("alert");
            }

            if (inputTransferMoney > mainBalance) {
              const alterInfo = document.getElementById("alert-info");
              alterInfo.innerText =
                "failed. Insufficient balance please add money!";
              return alertShow("alert");
            }

            if (inputTransferPin === demoPin && inputTransferNumber.length === 11) {
              mainBalance = mainBalance - inputTransferMoney;
              document.getElementById("main-balance").innerText = mainBalance;
              deleteInput("input-transfer-amount");
              deleteInput("input-transfer-pin");
              deleteInput("transfer-money-number");
              const alterInfo = document.getElementById("alert");
              alterInfo.classList.add("hidden");

              // Create History

              const transferIcon = document.getElementById("transfer-icon").src;
              const transferTitle = "Send Money";

              historyCreator(
                transferIcon,
                transferTitle,
                inputTransferMoney,
                "-"
              );
            } else {
              const alterInfo = document.getElementById("alert-info");
              alterInfo.innerText =
                "Warning! Send money failed. Your PIN is wrong";
              alertShow("alert");
            }
});


// Get Bonus / coupon part

document.getElementById("bonus-btn").addEventListener("click", function(event){
    event.preventDefault()

    const demoCoupon = "WIN100";

    let mainBalance = getInnerText("main-balance");

    const inputCoupon = getInputTextValue("input-coupon");
    const couponAmount = 100;


    if(inputCoupon === demoCoupon){
      mainBalance = mainBalance + couponAmount;
      document.getElementById("main-balance").innerText = mainBalance;
      deleteInput("input-coupon");
      const alterInfo = document.getElementById("alert");
      alterInfo.classList.add("hidden");

      // Create History
      const couponIcon = document.getElementById("coupon-icons").src;
      const couponTitle = document.getElementById("coupon-title").innerText;

      historyCreator(couponIcon, couponTitle, couponAmount, "+");

    }else{
      const alterInfo = document.getElementById("alert-info");
      alterInfo.innerText = "Sorry! Unable to Claim. Your Coupon is wrong";
      alertShow("alert");
    }
});


// pay bill part 

document.getElementById("pay-bill-btn").addEventListener("click", function(event){
    event.preventDefault()


    let mainBalance = getInnerText("main-balance");
    const inputPayBillAmount = getInputNumberValue("input-pay-bill-amount");
    const inputPayBillPin = getInputTextValue("input-pay-bill-pin");

    if (inputPayBillAmount <= 9) {
      const alterInfo = document.getElementById("alert-info");
      alterInfo.innerText = "Warning Paybill failed. You can't pay less 10 Tk!";
      return alertShow("alert");
    }

     if (inputPayBillAmount > mainBalance) {
       const alterInfo = document.getElementById("alert-info");
       alterInfo.innerText = "failed. Insufficient balance please add money!";
       return alertShow("alert");
     }

    if (inputPayBillPin === demoPin) {
      mainBalance = mainBalance - inputPayBillAmount;
      document.getElementById("main-balance").innerText = mainBalance;
      deleteInput("input-pay-bill-amount");
      deleteInput("input-pay-bill-pin");
      deleteInput("input-pay-bill-account");
      const alterInfo = document.getElementById("alert");
      alterInfo.classList.add("hidden");

      // Create History
      const payBillIcon = document.getElementById("pay-bill-icon").src;
      const payBillCoupon = document.getElementById("select-pay-bill").value;

      historyCreator(payBillIcon, payBillCoupon, inputPayBillAmount, "-");
    }else {
      const alterInfo = document.getElementById("alert-info");
      alterInfo.innerText = "Sorry! Failed to pay your bill. Your PIN is wrong";
      alertShow("alert");
    }
});


// Card click to display

// card 1

document.getElementById("add-money-container").addEventListener("click", function(event){
    cardDisplay("add-money-form");
    event.stopPropagation()
    document.getElementById("welcome-message").classList.add("hidden");
});

// card 2

document.getElementById("cash-out-container").addEventListener("click", function(event){
    cardDisplay("cash-out-form");
    event.stopPropagation();
    document.getElementById("welcome-message").classList.remove("hidden");
    document.getElementById("welcome-p").classList.add("hidden");
});

// card 3

document.getElementById("transfer-container").addEventListener("click", function(event){
    cardDisplay("transfer-form");
    event.stopPropagation();
    document.getElementById("welcome-message").classList.remove("hidden");
    document.getElementById("welcome-p").classList.add("hidden");
});

// card 4

document.getElementById("bonus-container").addEventListener("click", function(event){
    cardDisplay("bonus-form");
    event.stopPropagation();
    document.getElementById("welcome-message").classList.remove("hidden");
    document.getElementById("welcome-p").classList.add("hidden");
});

// card 5

document.getElementById("pay-bill-container").addEventListener("click", function(event){
    cardDisplay("pay-bill-form");
    event.stopPropagation();
    document.getElementById("welcome-message").classList.add("hidden");
});

// card 6

document.getElementById("transaction-container").addEventListener("click", function(event){
    cardDisplay("transaction-form");
    event.stopPropagation();
    document.getElementById("welcome-message").classList.remove("hidden");
    document.getElementById("welcome-p").classList.add("hidden");
});


// Card active color 

let lastClick = null;
const allFeaturesCard = document.getElementsByClassName("features-card");
let lastTitleClick = null;

for (const featuresCard of allFeaturesCard) {
    featuresCard.addEventListener("click", function(){
      if (lastClick === null) {
        featuresCard.classList.add("border", "border-[#0874F2]");
        featuresCard.classList.add("bg-primary-btn", "bg-opacity-5");      
        lastClick = featuresCard;
      }else{
        lastClick.classList.remove("border", "border-[#0874F2]");
        lastClick.classList.remove("bg-primary-btn", "bg-opacity-5");

        // add 
        featuresCard.classList.add("border", "border-[#0874F2]");
        featuresCard.classList.add("bg-primary-btn", "bg-opacity-5");
        lastClick = featuresCard;
        }

          const allTitles = featuresCard.children;
          for (const titles of allTitles) {
            const title = titles.children[1];
            if (lastTitleClick === null){
              title.classList.remove("text-secondary-text2");
              title.classList.add("text-[#0874F2]");
              
              lastTitleClick = title;
            } else{
              lastTitleClick.classList.add("text-secondary-text2");
              lastTitleClick.classList.remove("text-[#0874F2]");

              title.classList.remove("text-secondary-text2");
              title.classList.add("text-[#0874F2]");

              lastTitleClick = title;
            }
          }
    });

    // for title color 
};

// log out


document.getElementById("logout-btn").addEventListener("click", function(event){
  event.preventDefault();
   window.location.href = "/index.html";
});