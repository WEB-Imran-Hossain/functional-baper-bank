function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
  }
  
  function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const textElementValue = parseFloat(elementValueString);
    return textElementValue;
  }
  
  function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue
  }
  document.getElementById("deposit-btn").addEventListener("click", function () {
    // get the element by Id
    // get the value from the element
    // convert string value to a number
    // -------------------------------------------------------------
    const newDepositAmount = getInputFieldValueById("deposit-field");
    const previousDepositTotal = getTextElementValueById("deposit-total")
    
    // new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount
  
    // set the deposit total value
    setTextElementValueById('deposit-total', newDepositTotal)
  
    // get previous balanced by using th function
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalancedTotal = previousBalanceTotal + newDepositAmount
    setTextElementValueById('balance-total', newBalancedTotal)
  });
  