var poker = ['Aa', 'Ab', 'Ac', 'Ad',
       'Ka', 'Kb', 'Kc', 'Kd',
       'Qa', 'Qb', 'Qc', 'Qd',
       'Ja', 'Jb', 'Jc', 'Jd',
       '0a', '0b', '0c', '0d',
       '9a', '9b', '9c', '9d',
       '8a', '8b', '8c', '8d',
       '7a', '7b', '7c', '7d',
       '6a', '6b', '6c', '6d',
       '5a', '5b', '5c', '5d',
       '4a', '4b', '4c', '4d',
       '3a', '3b', '3c', '3d',
       '2a', '2b', '2c', '2d',
       'J','j'];
var cplayer = [];
var ccom =[];
var ctab =[];
var ccardside = false;
var cptomcard = '';
var cctopcard = '';
function csplit(){
    for (var i = poker.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * i)
        var k = poker[i]
        poker[i] = poker[j]
         poker[j] = k;
    }
    for (var i = 0; i<27 ;i++){
        cplayer.push(poker[i]);
        poker.splice(i,1);
    }
    for(var i =0 ; i<27 ; i++){
        ccom.push(poker[i]);
    }
    console.log(cplayer);
    console.log(ccom);  
}

function cview(){
    var i = Math.floor(Math.random()*cplayer.length)
    var cptopcard= cplayer[i];  
    cplayer.splice(i,1);
    ctab.push(cptopcard);
    var k = Math.floor(Math.random()*ccom.length)
    var cctopcard= ccom[k];  
    ccom.splice(k,1);
    ctab.push(cctopcard)
    console.log(ctab);
}