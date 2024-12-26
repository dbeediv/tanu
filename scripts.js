document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "password123") {
        window.location.href = "instructions.html";
    } else {
        document.getElementById('loginError').textContent = "Invalid Username or Password.";
    }
});
