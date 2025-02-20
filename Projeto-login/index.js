const login = document.querySelector('input#login')
const container = document.querySelector('selector')
const register = document.querySelector('input#register')

register.addEventListener('click', () => {
    container.classList.add("active");
});

login.addEventListener('click', () => {
    container.classList.remove("active");
});