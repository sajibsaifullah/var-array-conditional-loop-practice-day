/* Let's say you have x amount of money. 
if you have more than 80,000, then you will by a mac
if more than 60,000 then you will by gaming laptop
if you more than 40,000 then  you will by Lenovo Yoga
if you have more than 20, 000 then  you will by an used laptop
otherwise, you will use you mobile phone */

var myMoney = 10000;

if (myMoney > 80000){
    console.log('I will buy a MAC.');
}
else if (myMoney > 60000){
    console.log('I will buy a LAPTOP.');
}
else if (myMoney > 40000){
    console.log('I will buy a LENOVO YOGA.');
}
else if (myMoney > 20000){
    console.log('I will buy an USED LAPTOP.');
}
else {
    console.log('I will buy a MOBILE PHONE.');
}