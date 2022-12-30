var els = document.querySelectorAll('.testes .inside-testes');

els[0].style.color = 'red';
els[0].innerHTML = '<div class="inside-testes-mod-via-js">Teste</div>'; // Criei uma nova div, pelo js

var mod = document.getElementsByClassName('inside-testes-mod-via-js'); // Modifiquei essa nova div, usando seu ClassName
/*querySelectorAll('.testes .inside-testes .inside-testes-mod-via-js');   Mas tambem é possivel usando querySelectorAll*/

mod[0].style.color = 'blue';