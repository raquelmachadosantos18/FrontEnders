
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





/*
function validar(){
    var em = window.document.querySelector('input#email')
    if (em == ""){
        alert('nao')
    }
} */