

//get the value of the input element 
var inputElement = document.getElementById('name');
// create function for the focus state
function focusOnFirstForm(){
    var inputName = document.getElementById('name').focus();

}
//When page load  passing the fucntionon document load 
window.onload = function (){
  return  focusOnFirstForm();

}
//This will select the Select element in option section
var jobRole = document.getElementById("title");

//add an eventListener to jobRole then show other job role
jobRole.addEventListener("change", (e) => {
    //var jobRoleValue = e.target.value;
    var otherJobRole = document.querySelector("#title option[value='other']");
    if(otherJobRole.selected===true){
       return secondJobRole.style.display="block";
    } else{
        return secondJobRole.style.display="none";
    }

});


/***Select the other job role so we can hide***/
var secondJobRole = document.getElementById('other-job-role');
var secondJobRoleValue = document.getElementById('other-job-role').value;
// creating function to hide other-job-role

var hideOtherJobByDefault = !function(){
  return secondJobRole.style.display='none';
}();

// creating a function to hide color menu by default
//first let's get select id on color section

var colorMenu = document.getElementById('color');
console.log(colorMenu);
var hideColorMenuByDefault = !function(){
  return colorMenu.setAttribute('disabled', true);
}();
//reference to the color section
 var designTheme = document.getElementById('design');//this will grab the design to be manipulate later.
 //console.log(designTheme);
 //reference to colors
 var color = document.querySelectorAll('color.option[value]');
 console.log(color);
 //EventListener to designTheme
 designTheme.addEventListener('change', (e)=>{
   colorMenu.disabled = false;
   var loopOverOptions = document.querySelectorAll('[data-theme]');
   //console.log('Selected Design: ', designTheme.value);
   loopOverOptions.forEach(option => {
      var loopValue = e.target.value;
      console.log('here is the value ', loopValue);
      dataTheme = option.getAttribute('data-theme');
      //console.log('Color Options Theme: ', dataTheme);
      if( loopValue === dataTheme){
        option.style.display ='';
        
          
        

      }else{
        option.style.display ='none';
      }
      
   })
  
 })

 //Register for activities section
 // reference to legend in fieldset
 let legendActivities = document.querySelector("#activities legend");
 console.log(legendActivities);
 //total p cost
 let p = document.getElementById("activities-cost");
 console.log(p);
 // total cost of activity
let initialCost = 0;
let activity = document.getElementById('activities');
//event handler on change 
activity.addEventListener('change', (e) => {
  
  
  let currentElementAffected = parseInt(e.target.getAttribute(["data-cost"]))
  console.log(currentElementAffected);
  //condition to check and check 
  if (e.target.checked == true){
    initialCost += currentElementAffected;
  } else if (e.target.checked == false){

    initialCost -= currentElementAffected;
  }
  p.innerHTML =`Total:$${initialCost}`;
});

// payment option
let paymentOption = document.querySelector('#payment');

console.log(paymentOption);
//credit card payment
 let creditCard = document.querySelector('#credit-card');
 console.log(creditCard);
// paypal payment 
let paypal = document.querySelector('#paypal');
console.log(paypal);
//bitcoin payment
let bitcoin = document.querySelector('#bitcoin');
console.log(bitcoin);

 function showCreditCard(){
   creditCard.style.display ='block'
}
showCreditCard();
function hideCreditCard(){
   creditCard.style.display ='none';
}
hideCreditCard();

function showPaypal(){
  paypal.style.display = 'block'
}
showPaypal();

function hidePaypal(){
  paypal.style.display ='none';
}
hidePaypal();

function showBitcoin(){
  bitcoin.style.display ='block';
}
showBitcoin();
function hideBitcoin(){
  bitcoin.style.display ='none';
}
hideBitcoin();


//addEventListener on payment method
paymentOption.addEventListener('change', (e) => {
  if(e.target.value == 'credit-card'){
    showCreditCard();
  } else {
    hideCreditCard();
  }
  if(e.target.value =='paypal'){
   showPaypal();
  } else {
    hidePaypal();
  }
  if(e.target.value == 'bitcoin'){
  showBitcoin();

  }else {
   hideBitcoin();
  }
})

// input validation
//email
let  emailInput = document.querySelector('#email');
console.log(emailInput);
//credit card number
let  creditCardNumber  = document.querySelector('#cc-num');

console.log(creditCardNumber);
//zip code
let  zipCode  = document.querySelector('#zip');
console.log(zipCode);
//cvv
let  threeDigitNumber  = document.querySelector('#cvv');
console.log(threeDigitNumber);

//reference expiration date
let expirationMonth = document.getElementById("exp-month");


//check if namefiled is valid

function validate() {
  var nameInput = document.getElementById('name').value;
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!regName.test(nameInput)) {
    alert('Please enter your full name (first & last name).');
    document.getElementById('name').focus();
    return false;
  } else {
    alert('Valid name given.');
    return true;
  }
}
// EMAIL VALIDATION
function isValidEmail() {
  emailValidation = document.querySelector('#email').value;
  const rgexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!rgexEmail.test(emailValidation)) {
    alert('Please enter a valid email address.');
    document.getElementById('email').focus();
    return false;
  } else {
    alert('Successful logging into the system.');
    return true;
  }
}
//CREDIT CARD VALIDATION
function is_creditCard()
{
  let  creditCardNumberValidation  = document.querySelector('#cc-num').value;
 regexCardValidation = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  
        if (!regexCardValidation.test(creditCardNumberValidation))
          {
            return true;
          }
        else
          {
            return false;
          }
}




//date validation
function monthValidation() {
  let monthValidation = document.getElementById('exp-month').value;
   const expirationDateRegex = /^(0[1-9]|1[0-2])\/(20\d{2}|[3-9]\d)$/;

  if (!expirationDateRegex.test(monthValidation)) {
    
    
    return false;
  } else {
    
    return true;
  }
}

//expiration year

function yearExpiration(){
  let year = document.getElementById('exp-year').value;
  const expirationYearRegex = /^(20[2-9]\d|30[0-5])$/;
  if(!expirationYearRegex.test(year)){
    return false;
  }else{
    return false;
  }
}

// zip code validation

function zipCodeValidation(){
  let zip = document.getElementById('zip').value;
  const zipCodePattern = /^\d{5}(?:[-\s]\d{4})?$/;
  if(!zipCodePattern.test(zip)){
    return false;
  }else{
    return true;
  }
}

//three to four digit 
function is_cvvValidation(){
  let cvv = document.getElementById('cvv').value;
  const cvvPattern = /^[0-9]{3}$/;
  if(!cvvPattern.test(cvv)){
    return false;
  }else{
    return true;

  }
}

var form = document.querySelector('form'); // Replace 'yourForm' with the actual ID of your form

form.addEventListener('submit', (e) => {
  if (!validate()) {
    e.preventDefault();
  }
  if (!isValidEmail()) {
    e.preventDefault();
  }
  if(!is_creditCard()){
    e.preventDefault();
  }
  if(!monthValidation()){
    e.preventDefault();
  }
  if(!yearExpiration()){
    e.preventDefault();
  }
  if(!zipCodeValidation()){
    e.preventDefault();
  }
  if(!is_cvvValidation()){
    e.preventDefault();
  }
});

//Accessibility

