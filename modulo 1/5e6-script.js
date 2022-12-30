//executado quando chamar uma função// 
/* AULA 05
        function testes2(nome,idade){
            console.log("O nome teste é: "+nome,+idade);
        }

        testes2("Ezequiel",28);
        testes2("Diego",30);

        function getNome(parametro){
            if(parametro == 1){
                return "Guilherme";
            }else{
                return "Outro nome";
            }
        }

        var nome = getNome(1);
        console.log(nome);
*/
        //  ####################################################################################### //
// AULA 06 -- CONTINUAÇÃO
        /*var func= function(){
            alert('Ola mundo!');
        }
        func();*/

        (function(){ // outra maneira de chamar a função, menos convencional 
            alert('Hello World');
        })();
