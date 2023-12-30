document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    if (!validateEmail(username)) {
        alert('Username must be a valid email address.');
        return false;
    }

    var password = document.getElementById('password').value;
    if (!validatePassword(password)) {
        alert('Invalid password. It must contain an uppercase letter, a number, and only @ as a special character.');
        return false;
    }

    alert('Form submitted successfully!');
    
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}

function validatePassword(password) {
    var re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*@?[A-Za-z\d]*$/;
    return re.test(password) && password.includes('@');
}
