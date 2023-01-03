//Receita de bolo para fazer uma requisição AJAX
setTimeout(function(){
    var request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

request.onload = function(){
    if(this.status >= 200 && this.status < 400){
        //Request foi feita com sucesso!;
        var data = JSON.parse(this.response);
        console.log(data);
    }else{
        //Erro...
    }
}

request.onerror = ()=>{

}

request.send();
},2000);
