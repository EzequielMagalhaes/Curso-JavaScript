{ // Tudo que for criado aqui, fica apenas nesse scopo... serve basicamente para organização do código;
//var nome = 'Ezequiel'; Porém o var ainda é uma variável global. Pra permanecer apenas nesse scopo/bloco... usa-se 'LET' ;
let nome = 'Ezequiel';
let Teste = function Teste(){
    console.log(nome);
    }
    Teste();
}

console.log(nome); // O console não consegue buscar a variável nome, pq ela não é uma variável global. Está apenas em um scopo separado;