const nombreInput = document.querySelector('.nombre');

nombreInput.addEventListener('input', () => {
    const nombrePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/ /* PATRON DE 40 LONG. Mayuscula, Minuscula */
    const messageIco = document.querySelector('.login__name--ico');
    const messageSpan = document.querySelector('.login__name--span');

    messageIco.classList.remove("fas","fa-check-circle");
    messageIco.classList.remove("fas","fa-times-circle");
    messageIco.classList.remove("fas","fa-exclamation-circle");
    messageSpan.innerHTML = ''

    if(nombreInput.value.match(nombrePattern)){
        messageIco.classList.add("fas","fa-check-circle");
      
    }else if(nombreInput.value === ''){
        messageSpan.innerHTML = 'First Name cannot be empty'
        messageIco.classList.remove("fas","fa-check-circle");
        messageIco.classList.add("fas","fa-exclamation-circle");
    }else{
        messageSpan.innerHTML = 'Name cannot have numbers'
        messageIco.classList.remove("fas","fa-check-circle");
        messageIco.classList.add("fas","fa-times-circle");
    }
})

/* CORREO ELECTRONICO */

const emailInput = document.querySelector('.correo');

emailInput.addEventListener('input', () => {
    const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
    const messageIco = document.querySelector('.login__email--ico');
    const messageSpan = document.querySelector('.login__email--span');

    messageIco.classList.remove("fas","fa-check-circle");
    messageIco.classList.remove("fas","fa-times-circle");
    messageIco.classList.remove("fas","fa-exclamation-circle");
    messageSpan.innerHTML = ''

    if(emailInput.value.match(emailPattern)){
        messageIco.classList.add("fas","fa-check-circle");
      
    }else if(emailInput.value === ''){
        messageSpan.innerHTML = 'Email cannot be empty'
        messageIco.classList.remove("fas","fa-check-circle");
        messageIco.classList.add("fas","fa-exclamation-circle");
    }else{
        messageSpan.innerHTML = 'Looks like this is not an email'
        messageIco.classList.remove("fas","fa-check-circle");
        messageIco.classList.add("fas","fa-times-circle");
    }
})

/* CONTRASEÑA */
const passwordInput = document.querySelector('.password');

passwordInput.addEventListener('input', () => {
    const pwdPattern = /^.{4,12}$/
    const messageIco = document.querySelector('.login__password--Ico');
    const messageSpan = document.querySelector('.login__password--span');

    messageIco.classList.remove("fas","fa-check-circle");
    messageIco.classList.remove("fas","fa-times-circle");
    messageIco.classList.remove("fas","fa-exclamation-circle");
    messageSpan.innerHTML = ''

    if(passwordInput.value.match(pwdPattern)){
        messageIco.classList.add("fas","fa-check-circle");
      
    }else if(passwordInput.value === ''){
        messageSpan.innerHTML = 'Password cannot be empty'
        messageIco.classList.remove("fas","fa-check-circle");
        messageIco.classList.add("fas","fa-exclamation-circle");
    }else{
        messageSpan.innerHTML = 'The password must be from 4 to 12 digits.'
        messageIco.classList.remove("fas","fa-check-circle");
        messageIco.classList.add("fas","fa-times-circle");
    }
})

