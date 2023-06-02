

//get the value of the input element 
var inputElement = document.getElementById('name').Value;
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

//payment info
let paymentOption = document.querySelector('.payment-method-box label').textContent;
console.log(paymentOption);
let user_payment = document.getElementById('payment');
let creditCardPayment = document.querySelector("#payment option[value = 'credit-card']");
console.log(creditCardPayment);
let paypalCardPayment = document.querySelector("#payment option[value = 'paypal']");
console.log(paypalCardPayment);
let bitcoinPayment = document.querySelector("#payment option[value = 'bitcoin']");
console.log(bitcoinPayment);
//Use the "paypal" and "bitcoin" variables above to hide these elements initially.
//let hidePaypalCardPayment = paypalCardPayment.style.display='none';
//let hideBitcoinPayment = bitcoinPayment.style.display ='none';
//let hideCreditCardPayment = creditCardPayment.style.display ='none';
//  change event on payment 
user_payment.addEventListener('change', (e) => {
  let paymentMethod = document.querySelector('.payment-methods').innerHTML;
  console.log(paymentMethod);
  if(e.target.value== creditCardPayment){
    let hidePaypalCardPayment = paypalCardPayment.style.display='none';
    let hideBitcoinPayment = bitcoinPayment.style.display ='none';
      

    
  }else if(e.target.value==paypalCardPayment){
    let hideBitcoinPayment = bitcoinPayment.style.display ='none';
    let hideCreditCardPayment = creditCardPayment.style.display ='none';
    
   // hideCreditCardPayment;

  } else {

    let hideCreditCardPayment = creditCardPayment.style.display ='none';
    let hidePaypalCardPayment = paypalCardPayment.style.display='none';
     
      

  }
    
  
})
