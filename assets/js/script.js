let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {

    let txt = document.querySelector('#nomeMsg');

    if(nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido';
        txt.style.color = 'red';
        nomeOk = false;
    } else {
        txt.innerHTML = 'Nome válido';
        txt.style.color = 'green';
        nomeOk = true;
    }

}

function validaEmail() {

    let txt = document.querySelector('#emailMsg');

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = 'Email inválido';
        txt.style.color = 'red';
        emailOk = false;
    } else {
        txt.innerHTML = 'Email válido';
        txt.style.color = 'green';
        emailOk = true;
    }

}

function validaAssunto() {

    let txt = document.querySelector('#assuntoMsg');
    let contador = document.querySelector('#contador')
    contador.innerHTML = assunto.value.length + ' caracteres digitados';

    if(assunto.value.length > 100) {
        txt.innerHTML = 'O campo assunto tem o limite de 100 caracteres';
        txt.style.color = 'red';
        assuntoOk = false;
    } else {
        txt.innerHTML = 'Assunto OK';
        txt.style.color = 'green';
        assuntoOk = true;
    }

}

function validaFormulario() {
    
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preenche direito!');
    }

}