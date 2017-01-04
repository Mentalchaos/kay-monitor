function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getProb(percent,num){
    return percent * num;
}

function prob(n){
    var prob = 
    [3.842141864,3.981223922,4.189847010,4.485396384,4.033379694,
    3.963838665,4.172461752,4.015994437,4.415855355,4.137691238,
    4.050764951,3.859527121,4.033379694,3.894297636,3.720445063,
    4.033379694,3.963838665,3.807371349,3.685674548,4.137691238,
    4.015994437,4.050764951,3.929068150,3.946453408,3.633518776];

    return prob[n];
}

function getNumber(){
    var numbers = {};
    var n = {};
    var getNum;

    for(var i = 0;i <= 1000; i++){  
        getNum = random(1,25);
        if(!(getNum in numbers)){
            numbers[getNum] = 0;
        }
        numbers[getNum] += 1;
    }
    
    for(var i = 0; i <=24; i++){
        n[i+1] = getProb(prob(i),numbers[i+1]); 
    }
    
    return numbers;
}
