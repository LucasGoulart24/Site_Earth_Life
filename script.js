// Menu
let menu = document.getElementById('menu');
let menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
});

// Login
function cadastro() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    [email, senha].forEach(el => el.classList.remove('erro'));
    let loginValido = true

    if(email.value.trim() === '') {
        email.classList.add('erro');
        loginValido = false;
    }
    if(senha.value.trim() === '') {
        senha.classList.add('erro');
        loginValido = false
    }

    if(loginValido) {
         alert('Cadastro feito com sucesso!');
    }else {
        alert('Por favor, preencha os campus!')
    }
}