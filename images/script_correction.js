/**
 * data: dechets, poubelles
 * poubells : 0 = jaune, ...3 = marron
 * Un tableau par groupe de dechets
 *
 *
 */
var dechets_jaune =['dechets1', 'dechets2'];
var dechets_vert = ['dechets vert1'];
var dechets_bleu = ['dechets bleu'];
var dechets_marron =['dechets marron'];

var dechets = [] ;

dechets = dechets.concat(dechets_jaune, dechets_bleu, dechets_vert, dechets_marron);
//console.log(dechets);


var poubelles = document.getElementsByClassName("poubelle");
var dechet;

var genererDechet = document.getElementById('genererDechets');

genererDechet.onclick = function () {
    var dechetIndex = Math.floor(Math.random()*dechets.length);

var dechet = dechet[dechetIndex];
dechet = dechet[dechetIndex];

document.getElementById("dechetsDisplay").innerHTML = dechets_jaune + dechets_bleu + dechets_vert + dechets_marron;
//alert(dechetsIndex)

};

for (let i = 0 ; i < poubelles.length; i++){

    poubelles[i].onclick = function () {

        if(i===0){
            var tableau = dechets_jaune;
        }if (i===1){
            var tableau = dechets_bleu;
        }if (i===2){
            var tableau = dechets_vert;
        }if (i===3){
            var tableau = dechets_marron;
        }
       if (tableau.indexOf(dechets)>-1){
           alert('bonne poubelle')
       }else{
           alert('mauvaise poubelle')
       }
    }
}
