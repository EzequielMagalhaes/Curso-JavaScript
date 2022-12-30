var p = document.getElementsByTagName('p');

// p

p[0].innerHTML = 'Manipulado com sucesso pelo JS';

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado com sucesso pelo JS - ' + i; // p na posição [i], assim o for pega todas as funçoes;
}

/*for (var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
} */