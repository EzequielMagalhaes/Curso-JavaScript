var span = document.querySelector('.conteudo span');

span.addEventListener('click', ()=>{
    var conteudo = document.querySelector('.conteudo p');

    if(conteudo.classList.contains('mostrar')){
        span.innerHTML = 'Clique aqui para...VER MAIS!';
        conteudo.classList.remove('mostrar');
    }else{
        span.innerHTML = 'Ver menos...';
        conteudo.classList.add('mostrar');
    }
});