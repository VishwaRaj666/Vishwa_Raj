//  Simple interaction for demonstration
document.querySelector('.btn').forEach
(button => {
    button.addEventListener('click', () => { 
    alert('You clicked ${button.textContent}');
            } 
        )
    }

)

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    window.location.href = 'login.html'; // Redirect to login.html
});