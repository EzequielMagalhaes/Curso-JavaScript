var anoNascimento = prompt("Informe o ano do seu nascimento: ");
while(anoNascimento >= 2022){
    alert('Por favor inserir um ano menor que o ano atual');
    var anoNascimento = prompt("Informe o ano do seu nascimento: ");
}
var anoAtual = prompt("Informe o ano atual: ");

var resultado = anoAtual - anoNascimento; 

if(resultado >= 18){
    alert(resultado + ' anos - Você é maior de idade!');
}else{
    alert(resultado + ' anos - Você é menor de idade!');
}