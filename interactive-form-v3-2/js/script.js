



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
   colorMenu.setAttribute('disabled', false);
   var loopOverOptions = document.getElementsByTagName('select option[value]');
   //console.log(loopOver);
   loopOverOptions.forEach(option => {
      var loopValue = e.target.value;
      var dataTheme = document.getAttribute('data-theme');
      if( loopOver.hidden === dataTheme.hidden){
        option.getAttribute('disabled', true);
        
          
        

      }else{
        option.getAttribute('disabled', false);
      }
      
   })
  
 })


