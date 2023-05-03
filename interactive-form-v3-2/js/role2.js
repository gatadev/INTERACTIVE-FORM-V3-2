/***Select the other job role so we can hide***/
 var secondJobRole = document.getElementById('other-job-role');
 
 // creating function to hide other-job-role

 var hideOtherJobByDefault = function(){
    return secondJobRole.style.display='none';
 }
hideOtherJobByDefault();