var box = document.querySelectorAll('.box')[0];
// '=>' é a mesma coisa que declarar 'function()'
/*setTimeout(()=>{ // Faz a animação sozinha;
    box.classList.add('animDireita');
},1000);*/

box.addEventListener('click',()=>{ // Faz a animação ao clicar
    box.classList.add('animDireita');
})