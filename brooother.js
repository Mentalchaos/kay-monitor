var try_game = 0;
var game = [];
var max = 0;
var hits = Array.from(new Array(25)).map((x, i ) => i-i);

function getRandomInt(min, max, game) {
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (game.indexOf(random) == -1) {
        return random;
    }else{
        try_game--;
    }
}

function number(arg, game){
    var probs = [
        4.094841396988150, 4.017942966997760, 3.960269144504970, 4.171739826978530, 4.158923421980130,
        3.947452739506570, 4.056392181992950, 4.011534764498560, 4.178148029477730, 4.203780839474530,
        3.985901954501760, 4.088433194488950, 3.960269144504970, 3.998718359500160 , 4.017942966997760,
        3.896187119512980, 3.966677347004170, 3.896187119512980, 3.780839474527390, 4.005126561999360,
        3.870554309516180, 3.979493752002560, 3.896187119512980, 3.844921499519380, 4.011534764498560
    ]
    hits[arg-1] = hits[arg-1] + 1;
    total_hits = hits.map(x => x * probs[arg-1])
    max = Math.max.apply(null, total_hits);
}

function work(){
    //try for number :D
    for (try_game; try_game < 1000000; try_game++) {
        number( getRandomInt(1,25, game));
    }
    game.push(total_hits.indexOf(max)+1)
    console.log("ok " + game.length);
    try_game = 0;
    // console.log(hits);
    hits = Array.from(new Array(25)).map((x, i ) => i-i);
    // console.log(game);
}

function thegame(){
    for (var i = 0; i < 14; i++) {
        work();
    }
    game.sort(function(a, b){return b-a}).reverse();
    console.log("sus numeros son " + game.join("-"));
}

thegame();
