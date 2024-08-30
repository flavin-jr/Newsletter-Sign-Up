const form = document.querySelector('form');
const spanError = document.querySelector('span');
const successPage = document.querySelector('.success-container');
const dismissMessageBtn = document.querySelector('.dismiss-btn');
const emailConfirmationText = document.querySelector('.success-card p span');

const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const field = e.target.querySelector('input');
    field.addEventListener('input', () => {
        field.classList.remove('error')
        spanError.innerText = ''
    })
    if (!field.value.trim().length > 0) {
        field.classList.add('error')
        spanError.innerText = 'The field is required'
        return
    }

    if (!validEmail.test(field.value)) {
        field.classList.add('error')
        spanError.innerText = 'Valid email required'
        return
    }
    const email = field.value
    successPage.style = 'z-index: 1';
    field.value = ''
    emailConfirmationText.textContent = `${email}.`

    dismissMessageBtn.addEventListener('click', () => {
        successPage.style = 'z-index: -1';
    })

}

form.addEventListener('submit', handleSubmit)
