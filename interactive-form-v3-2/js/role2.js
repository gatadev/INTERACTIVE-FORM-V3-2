/***Select the other job role so we can hide***/
 var secondJobRole = document.getElementById('other-job-role');
  var secondJobRoleValue = document.getElementById('other-job-role').value;
 // creating function to hide other-job-role

 var hideOtherJobByDefault = function(){
    return secondJobRole.style.display='none';
 }
hideOtherJobByDefault();
//creating a function to show the value of hideOtherJobRoleBydefault
