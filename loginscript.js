document.getElementById('loginForm').addEventListener('submit', function(event) {
   
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login successful');
        
    } else {
        alert('Invalid username or password');
    }
});


