let menu = document.getElementById('menu');
let menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
});