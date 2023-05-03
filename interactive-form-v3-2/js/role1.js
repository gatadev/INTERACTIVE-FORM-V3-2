//select the dropdown menu to 
var jobRole = document.getElementById('title');
//add an eventListener to jobRole then show other job role
jobRole.addEventListener('click', function(e){
   var targetValue = e.target;
   if(targetValue ==='e.target.value'){
    return secondJobRole.style.display='block';
   }
    
});