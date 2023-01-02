/*
var nomes = [{
    nome: 'Ezequiel'
},
{
    nome:'Felipe'
}]

const obj = [...nomes,{ //Spread, os 3 pontos puxam os objetos citados anteriormente, sem precisar de uma função;
    nome:'Guilherme'
}];

console.log(obj);

*/

// REST - Permite respresentar um número indefinido de argumentos, como um array; 
function testes(...numero){
    console.log(numero);
    console.log('O numero do array é:',numero[0][0]);
}

testes([1,2,3,4,5,6]);