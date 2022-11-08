
function validateFields() {
    const email = document.getElementById('email').value;
    if(!email){
        document.getElementById('recover-password-button').disabled = true;
        
    }else if(validateEmail(email)){
        document.getElementById('recover-password-button').disabled = false;
    }
    function validateEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }
}

//Modo Noturno
const chk = document.getElementById('chk')
const contato = document.getElementById('contato_form')

chk.addEventListener('change', ()=> {
    document.body.classList.toggle('dark')
    $('#contato_form').css('background','black')
});



// Botões de Aumento e diminuição de Fonte
const btns = document.querySelectorAll('button.but');

btns[0].addEventListener('click', () => {
    document.body.classList.toggle('acess')
});


/*
function validar(){
    var em = window.document.querySelector('input#email')
    if (em == ""){
        alert('nao')
    }
} */