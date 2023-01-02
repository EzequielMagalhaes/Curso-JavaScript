const testes = (texto,par)=>{ // mesma coisa que ' function(){}' , só é mais moderno;
    par(texto);
}

testes('Olá mundo',(texto)=>{ // Isso é um call-back, uma função que executa logo após outra terminar;
    alert(texto);
});