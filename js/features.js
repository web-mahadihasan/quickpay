
/**
 * getInputNumberValue
 * getInputTextValue
 * getInnerText
*/
// get value callback function
const demoPin = '1234';

function getInputNumberValue(id) {
  const getValue = document.getElementById(id).value;
  const getNumberValue = parseFloat(getValue);
  return getNumberValue;
}

function getInputTextValue(id) {
  const textValue = document.getElementById(id).value;
  return textValue;
}

function getInnerText(id){
    const innerTextValue = document.getElementById(id).innerText;
    const innerTextNumber = parseFloat(innerTextValue);
    return innerTextNumber;
}
// get value callback function

// delete input 
function deleteInput(id){
    let deleteInput = document.getElementById(id)
     deleteInput.value = "";
}
// delete input 

// display hidden function 

function alertShow(id){
    const getAlert = document.getElementById(id);
    getAlert.classList.remove('hidden');
}
/**
 * const addMoneyContainer = 
 * const cashoutContainer = 
 * const transferContainer = 
 * const bonusContainer = 
 * const payBillContainer = 
 * const transactionContainer = 
 */
function cardDisplay(id){
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("transfer-form").classList.add("hidden");
    document.getElementById("bonus-form").classList.add("hidden");
    document.getElementById("pay-bill-form").classList.add("hidden");
    document.getElementById("transaction-form").classList.add("hidden");

    document.getElementById(id).classList.remove("hidden")
}


// History creator 

function historyCreator(icon, title, input, sign){
  const historyContainer = document.getElementById("history-container");
  const createHistory = document.createElement("div");
  const getTime = new Date().toLocaleTimeString();
  
  createHistory.innerHTML = `
                <div class="flex justify-between items-center bg-white p-4 rounded-xl">
                    <div class="flex items-center gap-4">
                        <div><img src="${icon}" alt="" class="bg-history-bg p-2 rounded-full"></div>
                        <div>
                          <h4>${title}</h4>
                          <p class="text-xs text-secondary-text">Today <span>${getTime}</span></p>
                        </div>
                    </div>
                    <div class = "flex items-center">
                      <p id="text-color-depends" class ="font-bold text-lg mr-2"> ${sign} ${input}</p>
                      <img src="./images/3dot.svg" alt="" class="p-2 rounded-full hover:bg-history-bg duration-300">
                    </div>
                </div>
              `;

  historyContainer.appendChild(createHistory);
  // set amount color depends on transaction
    const textColor = document.querySelectorAll("#text-color-depends");

   for(const color of textColor){
     if (sign === "-") {
       color.classList.add("text-orange-600");
     } else {
       color.classList.add("text-green-600");
     }
   }
};