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

    if (!email || !senha) {
        window.alert('Login com sucesse!');
    }else {
        window.alert('Cadastro incorreto!');
    }
}