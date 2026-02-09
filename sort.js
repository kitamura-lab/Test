var sortNumber = function(number){
    return number.sort(function(a, b){return a - b});}
    
var number = [19,3];

console.log(number);
sortNumber(number);
console.log(number);