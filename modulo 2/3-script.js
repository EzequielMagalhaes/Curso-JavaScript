function Pessoa(){
    this.nome = "Ezequiel"; //atributos do objeto
    this.idade = 19;
    this.printNome = function(numero){
        alert(numero);
    };
    this.returnAnimal = function(animal){
        return animal;
    }
}

function Animal(especie,raca,peso){
    if(especie == undefined){
        especie = 'Cachorro';
    }
    if(raca == undefined){
        raca = 'Bulldog';
    }
    if(peso == undefined){
        peso = '5kg';
    }

    this.especie = especie;
    this.raca = raca;
    this.peso = peso;
}

pessoa = new Pessoa();
animal = new Animal();
animal.raca = "Pitbull";

alert(pessoa.returnAnimal(animal).raca);



/*animal = new Animal("Cachorro","12kg");
animal2 = new Animal("Gato","5kg");

alert(animal.nome);
alert(animal2.peso);*/



/*var pessoa = new Pessoa(); //criando novo objeto
var pessoa2 = new Pessoa();

pessoa2.nome = "Juao";
pessoa.printNome(pessoa2.nome);

pessoa.nome = "Juao";
alert(pessoa.nome);
*/