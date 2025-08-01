document.getElementById(registrationForm).addEventListener('submit',
     function(e){
     e.preventDefault();

     //Get form values
     const name = document.getElenentById('name').value;
     const email = document.getElementById('email').value;
     const password = document.getElementById('passeword').value;
     const confirmPassword = document.getElementById('confirmPassword').value;
     const termsCheckbox = document.getElementById('termsCheckbox').checked;


     //Simple validation

     if(!termsChecked){
          alert('Please accept the terms and conditions');
          return;
     }

     if(password !== confirmPassword){
          alert('Passwords do not match!');
          return;
     }

     //In a real application, you would send this data to the server 
     
     console.log('Registration data:', {
          name,
          email,
          password,
     })

     //Show success message
     alert('Registration successful!');

     //Reset form
     this.reset();  
})

 //Add hover effect the form inputs 

 const inputs = document.querySelectorAll('.form-group input');
     inputs.forEach(input => {
            input.addEventListener(mouseenter, 
               function(){
                   this.style.borderColor = '#007BFF';
            }); 
     
     })