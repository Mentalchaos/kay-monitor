function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numbers = {};
var getNum;

for(var i = 0;i <= 100; i++){  
    getNum = random(1,25);
    if(!(getNum in numbers)){
        numbers[getNum] = 0;
    }
    numbers[getNum] += 1;
}
console.log(numbers);