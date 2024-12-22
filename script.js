const toggleButton = document.querySelector('.toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('night-mode');
});