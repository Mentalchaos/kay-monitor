function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var index = 0; 
var getNum;
var numbers = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
    thirteen: 0,
    fourteen: 0,
    fiveteen: 0,
    sixteen: 0,
    seventeen: 0,
    eighteen: 0,
    nineteen: 0,
    twenty: 0,
    twentyOne: 0,
    twentyTwo: 0,
    twentyThree: 0,
    twentyFour: 0,
    twentyFive: 0
};

while(index <= 100 ){

    getNum = random(1,25);
    if(getNum == 1){
        numbers.one += 1; 
    }else if(getNum == 2){
        numbers.two += 1;
    }else if(getNum == 3){
        numbers.three += 1;
    }else if(getNum == 4){
        numbers.four += 1;
    }else if (getNum == 5){
        numbers.five += 1;
    }else if(getNum == 6){
        numbers.six += 1;
    }else if(getNum == 7){
        numbers.seven += 1;
    }else if(getNum == 8){
        numbers.eight += 1;
    }else if(getNum == 9){
        numbers.nine += 1;
    }else if(getNum == 10){
        numbers.ten += 1;
    }else if(getNum == 11){
        numbers.eleven += 1;
    }else if(getNum == 12){
        numbers.twelve += 1;
    }else if(getNum == 13){
        numbers.thirteen += 1;
    }else if(getNum == 14){
        numbers.fourteen += 1;
    }else if(getNum == 15){
        numbers.fiveteen += 1;
    }else if(getNum == 16){
        numbers.sixteen += 1;
    }else if(getNum == 17){
        numbers.seventeen += 1;
    }else if(getNum == 18){
        numbers.eighteen += 1;
    }else if(getNum == 19){
        numbers.nineteen += 1;
    }else if(getNum == 20){
        numbers.twenty += 1;
    }else if(getNum == 21){
        numbers.twentyOne += 1;
    }else if(getNum == 22){
        numbers.twentyTwo += 1;
    }else if(getNum == 23){
        numbers.twentyThree += 1;
    }else if(getNum == 24){
        numbers.twentyFour += 1;
    }else{
        numbers.twentyFive += 1;
    }
    index += 1;
}

console.log(numbers);


