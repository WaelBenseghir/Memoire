const signUpButton= document.querySelector('.signUpButton');
const signInButton= document.querySelector('.signInButton');
const signUpForm= document.querySelector('.signUpForm');
const signInForm= document.querySelector('.signInForm');

signUpButton.addEventListener('click', function(){
    document.querySelector('.signInError').innerText = '';
    signInForm.style.display= "none";
    signUpForm.style.display = "block";
    
    
})


signInButton.addEventListener('click', function(){
    document.querySelector('.signUpError').innerText = ''; 
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
})



