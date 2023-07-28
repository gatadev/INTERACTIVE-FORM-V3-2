//global variable
let name_hint = document.getElementById('name-hint');
let email_hint = document.getElementById('email-hint');
let credit_card_hint = document.getElementById('cc-hint');
let zip_code_hint = document.getElementById('zip-hint');
let three_digit= document.getElementById('cvv-hint');
const nameRegex = /^[A-Za-z ]+$/;
let isNameValid=nameRegex.test(inputNameValue);
var inputNameValue = document.getElementById("name").value;
var inputEmailValue = document.getElementById('email').value;
const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
const  creditCardValue = document.getElementById('cc-num').value;
const cardRegex =/^\d{13,16}$/;

const isCardValid =cardRegex.test(creditCardValue);

const isEmailValid = emailRegex.test(inputEmailValue);
const zipValue= document.getElementById('zip').value;
const zipRegex = /^\d{5}$/;
const isZip= zipRegex.test(zipValue);
const cvvValue = document.getElementById('cvv').value;
const cvvRegex= /^[0-9]{3}$/;
const isCvv= cvvRegex.test(cvvValue);


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

 document.querySelector('form').addEventListener('submit', function(event){
//prevent default from form submission
//event.preventDefault();
// target the event
let eventTarget= event.target;
//value of the name input
//var inputNameValue = document.getElementById("name").value;

//regex pattern for name 
//const nameRegex = /^[A-Za-z ]+$/;
//const isNameValid=nameRegex.test(inputNameValue);
console.log("Name Field Value:", inputNameValue);
    console.log("Is Name Valid:", isNameValid);
    //check name value is valid
    if(!isNameValid){
      //inputfield not valid prevent from submitting
      event.preventDefault();
      eventTarget.parentElement.classList.add('not-valid');
      
      eventTarget.parentElement.classList.remove('valid');
      
      eventTarget.parentElement.lastElementChild.style.display='block';

    } else {
      console.log('form sumitted successfully');
      eventTarget.parentElement.classList.add('valid');
     eventTarget.parentElement.classList.remove('not-valid');
      eventTarget.parentElement.lastElementChild.style.display='none';
    }

//value of the email input
//var inputEmailValue = document.getElementById('email').value;
//const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 

//const isEmailValid = emailRegex.test(inputEmailValue);
console.log('email field value : ', inputEmailValue );
console.log('is email field valid :' ,  isEmailValid );
//check email field is valid
if(!isEmailValid){
  event.preventDefault();
  eventTarget.parentElement.classList.add('not-valid');
  eventTarget.parentElement.classList.remove('valid');
  eventTarget.parentElement.lastElementChild.style.display='block';
  

} else {
  console.log('successful submitted');
  eventTarget.parentElement.classList.add('valid');
  eventTarget.parentElement.classList.remove('not-valid');
      eventTarget.parentElement.lastElementChild.style.display='none';

}
// const credit card
//const  creditCardValue = document.getElementById('cc-num').value;
//const cardRegex =/^\d{13,16}$/;






//const isCardValid =cardRegex.test(creditCardValue);
console.log('card field value : ', creditCardValue );
console.log('is card field valid :', isCardValid );

//check field valid
if(!isCardValid){
  event.preventDefault();
  eventTarget.parentElement.classList.add('not-valid');
  eventTarget.parentElement.classList.remove('valid');
  eventTarget.parentElement.lastElementChild.style.display='block';

} else {
  console.log(' form successful submitted');
  eventTarget.parentElement.classList.add('valid');
     eventTarget.parentElement.classList.remove('not-valid');
      eventTarget.parentElement.lastElementChild.style.display='none';

}
// zip
//const zipValue= document.getElementById('zip').value;
//const zipRegex = /^\d{5}$/;
//const isZip= zipRegex.test(zipValue);
console.log('zip field value : ', zipValue );
console.log('is zip field valid :', isZip );
//check validity of zip
if(!isZip){
  event.preventDefault();
  eventTarget.parentElement.classList.add('not-valid');
  eventTarget.parentElement.classList.remove('valid');
  eventTarget.parentElement.lastElementChild.style.display='block';
} else{
  console.log('form submiited suucessfully');
  eventTarget.parentElement.classList.add('valid');
     eventTarget.parentElement.classList.remove('not-valid');
      eventTarget.parentElement.lastElementChild.style.display='none';


}
//cvv number
//const cvvValue = document.getElementById('cvv').value;
//const cvvRegex= /^[0-9]{3}$/;
//const isCvv= cvvRegex.test(cvvValue);
console.log('cvv field value : ', cvvValue );
console.log('is zip field valid :', isCvv );
if(!isCvv){
  event.preventDefault();
  eventTarget.parentElement.classList.add('not-valid');
  eventTarget.parentElement.classList.remove('valid');
  eventTarget.parentElement.lastElementChild.style.display='block';

} else {
  console.log('form successfully submitted');
  eventTarget.parentElement.classList.add('valid');
      eventTarget.parentElement.classList.remove('not-valid');
      eventTarget.parentElement.lastElementChild.style.display='none';

}

function validation(){
  if(!isNameValid){
    name_hint.style.display ='block';
  } else {
    name_hint.style.display ='none';
  }
  if(!isEmailValid){
    email_hint.style.display='block';
  } else {
    email_hint.style.display ='none';
  }
  if(!isCardValid){
    credit_card_hint.style.display='block';

  } else {
    credit_card_hint.style.display = 'none';
  }
  if(!isZip){
    zip_code_hint.style.display ='block';
  } else {
    zip_code_hint.style.display ='inline';
  }
  if(!isCvv){
    three_digit.style.display =' block';
  } else {
    three_digit.style.display ='none';
  }
} 
validation();

 })


//Create a variable to reference the activities’ <input type=”checkbox”> elements, and log out the variable to ensure it is what you think it is.

const checkBoxes= document.querySelectorAll('#activities-box input[type="checkbox"]');
console.log(checkBoxes);
//Use the variable that was just created to loop over the activities’ checkboxes.
checkBoxes.forEach(element => {
  element.addEventListener('focus', function(){
    element.parentElement.classList.add('focus');
    element.parentElement.classList.remove('blur');
  })
  //element.addEventListener('blur', function(){
   // element.parentElement.classList.add('blur');
  //})
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



// function validation
/***function validation(){
  if(!isNameValid){
    name_hint.style.display ='block';
  } else {
    name_hint.style.display ='none';
  }
  if(!isEmailValid){
    email_hint.style.display='block';
  } else {
    email_hint.style.display ='none';
  }
  if(!isCardValid){
    credit_card_hint.style.display='block';

  } else {
    credit_card_hint.style.display = 'none';
  }
  if(!isZip){
    zip_code_hint.style.display ='block';
  } else {
    zip_code_hint.style.display ='inline';
  }
  if(!isCvv){
    three_digit.style.display =' block';
  } else {
    three_digit.style.display ='none';
  }
} 
validation(); ***/
