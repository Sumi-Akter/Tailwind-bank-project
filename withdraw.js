//  add event handler with the withdraw buttton
document.getElementById("btn-withdraw ").addEventListener('click',function(){
// get the withdraw ammount
const withdrawField=document.getElementById("withdraw-field");
const newWithdrawFieldAmountString=withdrawField.value ;
const newWithdrawFieldAmount=parseFloat(newWithdrawFieldAmountString);
// clear the withdraw input field
withdrawField.value='';
// previous withdraw total
const withdrawTotalElement=document.getElementById("withdraw-total");
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

// calculate total withdraw amount and set it to the totalwithdraw element
const nweWitdrawTotal=previousWithdrawTotal+newWithdrawFieldAmount;
withdrawTotalElement.innerText=nweWitdrawTotal;

// get previous balance
const balanceElement=document.getElementById('balance-total');
const previousBalanceTotalString=balanceElement.innerText;
const previousBalanceTotal=parseFloat(previousBalanceTotalString);
// calculate new balaance
const newBalanceTotal=previousBalanceTotal-nweWitdrawTotal;
 balanceElement.innerText=newBalanceTotal;
})