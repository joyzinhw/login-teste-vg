
// a visibilidade da senha
document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const icon = this;

    if (passwordField.type === 'password') {
        passwordField.type = 'text';  // Mostrar senha
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        passwordField.type = 'password';  // Ocultar senha
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
});
// teste de usabilidade do botoes 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    window.location.href = "https://open.spotify.com/playlist/4BTR5qIxdd9KHDibqNIFRD?si=7bbeddcb730843cf"; 
});
