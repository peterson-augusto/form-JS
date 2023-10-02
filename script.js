const form = document.getElementById('form'); // Pegar formulário pelo id.
const campos = document.querySelectorAll('.required'); // campos com a classe "required".
const spans = document.querySelectorAll('.span-required'); // Pegar classes "span-required".
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; // Verificar se é um email válido.

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
})

function setError(index) { // Função para setar erro.
    campos[index].style.border = '2px solid #e63636' // Adiciona a borda vermelha na caixa de input.
    spans[index].style.display = 'block';
}

function removeError(index) { // Função para remover erro.
    campos[index].style.border = ''
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);

    } else {
        removeError(0)
    }
}

function emailValidate() { // Validação email
    if (!emailRegex.test(campos[1].value)) {
        setError(1);

    } else {
        removeError(1);
    }
}

function mainPasswordValidate() { // Validação senha principal
    if (campos[2].value.length < 8) {
        setError(2);

    } else {
        removeError(2);
        comparePassword();

    }
}

function comparePassword() { // Comparar as duas senhas
    if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        removeError(3);

    } else {
        setError(3);
    }
}