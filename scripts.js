let users = [];

document.getElementById('decisionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userExists = users.some(user => user.username === username);

    let message = '';

    if (confirmPassword) {
        // Registration
        if (userExists) {
            message = 'Registration failed: Username already exists.';
        } else if (password !== confirmPassword) {
            message = 'Registration failed: Passwords do not match.';
        } else {
            users.push({ username, password });
            message = 'Registration successful!';
        }
    } else {
        // Login
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            message = 'Login successful!';
        } else {
            message = 'Login failed: Invalid username or password.';
        }
    }

    document.getElementById('messageContainer').innerText = message;
    document.getElementById('decisionForm').reset();
});
