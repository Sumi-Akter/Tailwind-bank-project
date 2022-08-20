// 1.add event listner to the deposit button
document.getElementById("btn-deposit ").addEventListener('click',function(){
// 2.get deposit amount form deposit input fiels
// convert string deposit amount to number type
const depositField=document.getElementById("deposit-field");
const newDepositAmountString=depositField.value ;
const newDepositAmount=parseFloat(newDepositAmountString);
// step-3
depositField.value='';
// step-4
const depositTotalElement=document.getElementById("deposit-total")
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);

// step-5
const newDepositTotal=previousDepositTotal+newDepositAmount;
depositTotalElement.innerText=newDepositTotal;

// step-6 get current balance
const balanceTotalElement=document.getElementById("balance-total");
const previousBalanceAmountString=balanceTotalElement.innerText;
const previousBalanceTotalAmount=parseFloat(previousBalanceAmountString);

// step-7
const newBalaceTotal=previousBalanceTotalAmount+newDepositAmount;
balanceTotalElement.innerText=newBalaceTotal;

})