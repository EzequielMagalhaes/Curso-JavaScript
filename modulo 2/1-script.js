class Animal{
///////////////////////////////////////////////////////
    /*constructor(){
        this.especie = 'Cachorro';
    }
}
animal = new Animal();
alert(animal.especie);*/
///////////////////////////////////////////////////////
constructor(especie){
        this.especie = especie;
    }
    printEspecie(){
        return this.especie;
    }
}
class Cachorro extends Animal{ //declara a classe cachorro e herda tudo da classse animal; 
    constructor(especie){
        super(especie);
        this.raca = "Bulldog";
    }
    printRaca(){
        return this.raca;
    }
}

cachorro = new Cachorro("Rocky");
alert(cachorro.printEspecie());
alert(cachorro.printRaca());


/*alert(animal.printEspecie());
animal = new Animal('Gato');*/