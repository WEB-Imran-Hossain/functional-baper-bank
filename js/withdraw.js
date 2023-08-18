// 1. add withdraw button event handler
// 2. get withdraw amount by using getInputFieldValueById function
// 3. get previous withdraw amount by using getTextElementValueById function
// 4. calculate new withdraw total and set the value
// 4.1. set new withdraw total by using setTextElementValueId function
// 5. get previous balanced total by using getTextElementValueById function
// 6. calculate new balanced total
// 7. set balanced total using setTextElementValueById

document.getElementById('withdraw-btn').addEventListener('click', function () {
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');
  const previousWithdrawTotal = getTextElementValueById('withdraw-total');
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById('withdraw-total', newWithdrawTotal);
  const previousBalancedTotal = getTextElementValueById('balanced-total');
  const newBalancedTotal = previousBalancedTotal - newWithdrawAmount;
  setTextElementValueById('balanced-total', newBalancedTotal);
});
