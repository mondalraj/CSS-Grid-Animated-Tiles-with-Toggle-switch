const toggle = document.getElementById('toggle');

const body = document.querySelector('body');

const header = document.querySelector('header > h1');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');

})