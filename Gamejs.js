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
       '2a', '2b', '2c', '2d',];
var cplayer = [];
var ccom =[];
var ctab =[];
var cnum = [];//get number of cards
var ccardside = false;
var cptomcard = '';
var cctopcard = '';
function csplit(){
    for (var i = poker.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * i);
        var k = poker[i];
        poker[i] = poker[j];
         poker[j] = k;
    }
    for (var i = 0; i<26 ;i++){
        cplayer.push(poker[i]);
        poker.splice(i,1);
        //add card into cplayerhand
        document.getElementById('cplayerhand').innerHTML+="<div id='ccard' style='background:url()'>"
        //needs to fill the link of card
    }
    //testing
    ccom = poker
    //for(var i =0 ; i<ccom.length ; i++){
        //add card into ccomhand, link needed
        /*document.getElementById('ccomhand').innerHTML+="<div id='ccard' style='background:url("index?")'>"
    }*/
    console.log(cplayer);
    console.log(ccom);
}

function cview(){
    var i = Math.floor(Math.random()*cplayer.length)
    var cptopcard= cplayer[i];  
    cplayer.splice(i,1);
    ctab.push(cptopcard);
    cnum.push(cptopcard.slice(0,1));
    //put cptopcard, and number
    for (var i = cnum.length - 1; i >= 0; i--) {
        if (cptopcard.slice(0,1).indexOf(cptopcard)!=-1&&ctab.length>=2) {
            var a = cnum.indexOf(cptopcard.slice(0,1));
            cplayer.push(ctab.slice[a]);
            ctab.length = a-1;
            }
    }
    //or
    /*if(cnum.indexOf(cptopcard.slice(0,1))!=-1&&ctab.length>=2){
        var a = ctab.indexOf(cptopcard);
        cplayer.push(ctab.slice[a]);
        ctab.length=a;
    };*/
    var k = Math.floor(Math.random()*ccom.length)
    var cctopcard= ccom[k];  
    ccom.splice(k,1);
    ctab.push(cctopcard);
    cnum.push(cctopcard.slice(0,1))
    console.log(ctab);
    if(ctab.slice(0,1).indexOf(cctopcard.slice(0,1))!=-1&&ctab.length>=2){
        var b = ctab.indexOf(cctopcard);
        ccom.push(ctab.slice[b]);
        ctab.length=b;
    }
    if (cplayer.length==0) {
        alert('Gameover.you lose, refresh to restart')
    }
    else if (ccom.length==0) {
        alert('Gameover.you win, refresh to restart')
    }
}

