/*var date = new Date();
alert(date.getDate()); //pega o dia do mes
alert(date.getDay()); // pega o dia da semana, começando pelo domingo dia [0]
alert(date.getFullYear());
alert(date.getHours());
alert(date.getMinutes());*/

var date = new Date('12/10/2022'); //precisa ser no formato americano mm/dd/yyyy.
var date2 = new Date('12/26/2022');

var diferenca = (date2.getTime() - date.getTime()) / (1000 * 3600 * 24); //1000 milisegundos em um minuto * 3600 segs que tem em uma hora * 24 que é o numero total de horas que tem em um dia;

alert(diferenca);