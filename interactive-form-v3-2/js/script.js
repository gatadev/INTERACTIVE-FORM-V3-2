

//get the value of the input element 
var inputElement = document.getElementById('name');
// create function for the focus state
function focusOnFirstForm(){
    var inputName = document.getElementById('name').focus();

}
focusOnFirstForm();
//When page load  passing the fucntionon document load 
window.onload = function (){
  return  focusOnFirstForm()

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

var hideOtherJobByDefault = function(){
  return secondJobRole.style.display='none';

};
hideOtherJobByDefault();





 let colorMenu = document.getElementById('color');

 
 


var hideColorMenuByDefault = function(){
  return colorMenu.setAttribute('disabled', true);
};
hideColorMenuByDefault();

//let's create function to loop over color menus then clear out the last previous color on the form based on it index

var loopOverOptions = document.querySelectorAll('[data-theme]');
console.log(loopOverOptions);










//reference to the color section
 var designTheme = document.getElementById('design');//this will grab the design to be manipulate later.
 //console.log(designTheme);
let designThemeValue =document.getElementById('design').value;
console.log(designThemeValue);



 

 colorMenu.disabled = true;
 
 //EventListener to designTheme
 designTheme.addEventListener('change', (e) =>{
   colorMenu.disabled = false;
   
   //console.log('Selected Design: ', designTheme.value);
   loopOverOptions.forEach(option => {
    
      var loopValue = e.target.value;
      console.log('here is the value ', loopValue);
      dataTheme = option.getAttribute('data-theme');
      //console.log('Color Options Theme: ', dataTheme);
      if( loopValue === dataTheme){
       
          option.style.display= '';
         loopValue.hidden ='true';
         
      
         

        
        
        
       // option.style.display = clearOutPreviousColor();
      }else{
        option.style.display ='none';
        colorMenu.disabled = false;
      }
      if(loopValue === 'js puns'){
        loopOverOptions[0].selected = true;
      } else {
        loopOverOptions[4].selected = true;
      }
        
      
   })
  
});

 //Register for activities section
 // reference to legend in fieldset
const legendActivities = document.querySelector("#activities legend");
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
let creditCard = document.getElementById('credit-card');
let paypal = document.getElementById('paypal');

let bitcoin = document.getElementById('bitcoin');

let paymentMethod = document.getElementById('payment');
//when windows load display the payment method to credit-card

console.log(bitcoinP);
window.onload = function() {
  
  paypal.setAttribute('hidden', true);
  
bitcoin.setAttribute('hidden', true);
  
  let paymentDisplayMethod = document.querySelector("#payment option[value= 'select method']").innerHTML='Credit Card';
  
  

  //paymentDisplayMethod.innerHTML= 'Credit Card';
  
};
//when windows load display the payment method to credit-card



  
  
 
  
 




// function to handle apyment method
function handlePaymentMethod(event){
  let  paymentSelected= event.target.value;
  //display and hide other payment based on user's input
  if(paymentSelected=== 'credit-card'){
    creditCard.style.display='block';
    paypal.style.display='none';
    bitcoin.style.display='none';
  }else if(paymentSelected=== 'paypal'){
    paypal.style.display = 'block';
    creditCard.style.display = 'none';
    bitcoin.style.display = 'none';
  } else if(paymentSelected === 'bitcoin'){
    bitcoin.style.display = 'block';
    creditCard.style.display = 'none';
    paypal.style.display = 'none';
  }
 
}
document.addEventListener('change', handlePaymentMethod);

 

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
  const regName = /^[A-Za-z\s]+$/;
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
  let emailValidation = document.querySelector('#email').value;
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
 regexCardValidation = /^\d{16}$/;
  
        if (!regexCardValidation.test(creditCardNumberValidation))
          {
            return true;
          }
        else
          {
            return false;
          }
}






// zip code validation

function zipCodeValidation(){
  let zip = document.getElementById('zip').value;
  const zipCodePattern = /^\d{5}$/;
  if(!zipCodePattern.test(zip)){
    return false;
  }else{
    return true;
  }
}

//three to four digit 
function is_cvvValidation(){
  let cvv = document.getElementById('cvv').value;
  const cvvPattern = /^\d{3}$/;
  if(!cvvPattern.test(cvv)){
    return false;
  }else{
    return true;

  }
}

var form = document.querySelector('form'); // Replace 'yourForm' with the actual ID of your form

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let target = e.target;
  function addStyles(nameInput, validate){
  if(!valid){
    nameInput.parentElement.classList.add('no-valid');
    nameInput.parentElement.classList.remove('valid');
        } else{
          nameInput.parentElement.classList.add('valid');
          this.parentElement.classList.remove('no-valid');
        }

        addStyles(nameInput, validate)
      }

        function addEmailStyles(emailValidation, isValidEmail){
          if (!isValidEmail) {
            //e.preventDefault();
            emailValidation.parentElement.classList.add('no-valid');
            emailValidation.parentElement.classList.remove('valid');
          } else{
            emailValidation.parentElement.classList.add('valid');
            emailValidation.parentElement.classList.remove('valid');
          }
          addEmailStyles(emailValidation, isValidEmail)
        }
  function addPaymentStyles(creditCardNumberValidation, is_creditCard){
    if(!is_creditCard){
    e.preventDefault();
    creditCardNumberValidation.parentElement.add('no-valid');
    creditCardNumberValidation.parentElement.remove('valid')
    
    } else{
      creditCardNumberValidation.parentElement.add('valid');
      creditCardNumberValidation.parentElement.remove('no-valid');
    }
    addPaymentStyles(creditCardNumberValidation, is_creditCard)
}

if(form.checkValidity()){
  form.submit();
}
  

}); 

  





//Accessibility
//create function name hasfoucs()
//add focus class 

// reference to checkbox
//reference to activity

const checkboxes = document.querySelectorAll('#activities-box input[type="checkbox"]');
console.log(checkboxes);

//create two functions -one with focus and another with blur
// focus state functionh
checkboxes.forEach(element => {
  element.addEventListener('focus', function(){
 element.parentNode.classList.add('focus');
 

  })
  element.addEventListener('blur', function(){
    element.parentNode.classList.add('blur');
  })
});



