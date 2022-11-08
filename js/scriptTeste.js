const chk = document.getElementById('chk')

chk.addEventListener('change', ()=> {
    document.body.classList.toggle('dark')
})


// Botões de Aumento e diminuição de Fonte
const btns = document.querySelectorAll('button.but');

btns[0].addEventListener('click', () => {
    document.body.classList.toggle('acess')
});

//-------------------------------------------------------------------------------
//Alto contraste 
/*
const contraste = document.querySelector('button.contraste');

contraste.addEventListener('click', () => document.body.style.backgroundColor = 'black');
contraste.addEventListener('click', () => document.body.style.color ='white');*/