var try_game = 0;
var game = [];
var max = 0;
var turn = 0;
var total_hits = [];
var hits = Array.from(new Array(25)).map((x, i ) => i-i);
ranges = [
    [1,8],    [2,9],    [3,11],    [4,14],    [5,15],    [6,17],    [7,18],    [8,19],    [9,20],    [10,21],    [12,22],    [13,23],    [15,24],    [17,25]
]
var probs = [
    4.094841396988150, 4.017942966997760, 3.960269144504970, 4.171739826978530, 4.158923421980130,
    3.947452739506570, 4.056392181992950, 4.011534764498560, 4.178148029477730, 4.203780839474530,
    3.985901954501760, 4.088433194488950, 3.960269144504970, 3.998718359500160 , 4.017942966997760,
    3.896187119512980, 3.966677347004170, 3.896187119512980, 3.780839474527390, 4.005126561999360,
    3.870554309516180, 3.979493752002560, 3.896187119512980, 3.844921499519380, 4.011534764498560
]

function work(){
    //try for number :D
    // console.log(turn);
    console.log("ok " + (game.length + 1));
    for (try_game; try_game < 7; try_game++) {
        number(getRandomInt(ranges[turn][0],ranges[turn][1], game));
    }

    for (var i = 0; i <= 24; i++) {
        total_hits.push(hits[i] * (probs[i] + porcentaje[turn][i]));
        // console.log(total_hits);
    }
    max = Math.max.apply(null, total_hits);
    // console.log("maximo:"  + max);
    game.push(total_hits.indexOf(max)+1);
}

function getRandomInt(min, max, game) {
    return random = Math.floor(Math.random() * (max - min + 1)) + min;
}

function number(arg, game){
    // console.log(arg);
    hits[arg-1] = hits[arg-1] + 1;
    // console.log(hits);
}

function thegame(){
     for (var i = 0; i < 14; i++) {
        work();
        game.sort(function(a, b){return b-a}).reverse();
        total_hits = [];
        hits = Array.from(new Array(25)).map((x, i ) => i-i);
        try_game = 0;
        turn = turn+1;
    }
        console.log("sus numeros son " + game.join("-"));
}

var porcentaje = [
        [56.69920142, 25.6433008,10.7364685,3.992901508,1.774622893,0.887311446,0.177462289,0.088731145,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0, 30.07985803, 29.10381544, 20.23070098, 11.18012422, 5.146406389, 3.194321207, 0.621118012, 0.443655723,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,14.99556344, 24.75598935, 22.53771074, 16.59272405, 10.91393079, 6.12244898, 2.661934339, 0.887311446, 0.532386868, 0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,9.050576752, 16.41526176, 19.8757764, 19.43212067, 15.17302573, 10.91393079, 5.590062112, 1.952085182, 1.064773736, 0.443655723, 0.088731145, 0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0, 5.856255546, 9.405501331, 16.5039929, 19.43212067, 16.77018634, 14.9068323, 8.518189885, 5.412599823,2.30700976, 0.798580302, 0.088731145, 0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,2.839396628, 5.323868678, 10.82519965, 18.98846495, 16.77018634, 16.68145519, 13.04347826, 7.808340728, 4.79148181, 2.040816327, 0.798580302, 0.088731145,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0.887311446,3.460514641, 6.832298137, 15.43921917, 14.81810115, 17.56876664, 14.72937001, 12.86601597, 7.364685004, 3.726708075, 2.129547471, 0.177462289, 0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0.266193434, 1.508429459, 4.259094942, 10.7364685, 12.59982254, 16.77018634, 15.88287489, 16.85891748, 10.29281278, 5.856255546, 4.525288376, 0.443655723,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0.177462289, 0.798580302, 1.863354037, 6.388642413, 9.316770186, 13.39840284, 17.65749778, 17.56876664, 14.9068323, 9.139307897, 7.453416149, 1.330967169, 0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0.088731145, 0.532386868, 0.798580302, 3.726708075, 6.388642413, 9.050576752, 14.01952085, 17.3025732, 18.89973381, 14.19698314, 11.35758651, 3.63797693, 0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0, 0.177462289, 0.266193434, 1.685891748, 2.839396628, 6.743566992, 11.35758651, 15.08429459, 17.48003549, 19.43212067, 16.94764862, 7.985803017, 0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0, 0.177462289, 0.088731145, 0.532386868, 1.064773736, 3.371783496, 6.477373558, 11.44631766, 16.85891748, 21.11801242, 23.69121562, 15.17302573,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0, 0.088731145, 0.266193434, 0.443655723, 0.887311446, 2.48447205, 6.743566992, 11.26885537, 19.96450754, 28.0390417, 29.8136646, 0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.088731145, 0, 0.266193434, 0.798580302, 1.330967169, 4.259094942, 11.88997338, 24.66725821, 56.69920142]
]

thegame();
