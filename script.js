function printTimesTable(number){
    for(var i = 1; i <= 10; i++){
        var result = number * i;
        console.log(number+" * "+i+" = "+result);
    }
}
printTimesTable(5);
