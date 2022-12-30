var arr = ["Ezequiel" , "Nathália", "João"];
/*
for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}*/

arr.forEach(function(value,index){ //forma mais limpa doq o FOR convencional;
    console.log(value);
    console.log(index);
})