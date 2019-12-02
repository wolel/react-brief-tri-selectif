/**
 * Created by simon on 02/12/2019.
 */
/* Data : Dechets, Poubelles
*  Poubelles : 0 = jaune, ..., 3 = marron
*  Un tableau par groupe de dechets
*
*
* */
var dechets_jaune = ['bouteille','dechet2'];
var dechets_vert = ['dechet vert 1'];
var dechets_bleu = ['dechet bleu'];
var dechets_marron = ['dechet marron'];

var dechets =[];
dechets = dechets.concat(dechets_jaune,dechets_vert,dechets_bleu,dechets_marron);


var poubelles = document.getElementsByClassName('poubelle');
var dechet;

var genererDechet = document.getElementById('genererDechet');
genererDechet.onclick = function()
{
    var dechetIndex = Math.floor(Math.random()*dechets.length);
    //dechet = dechets[dechetIndex];
    dechet = dechets_jaune[0];
    //document.getElementById('dechetDisplay').innerHTML = dechet;
    document.getElementById('dechetDisplay').className = "dechet "+dechet;
};

for(let i=0; i<poubelles.length; i++)
{
    poubelles[i].onclick = function()
    {
        if(i==0)
        {
            var tableau = dechets_jaune;
        }
        if(i == 1)
        {
            var tableau = dechets_vert;
        }
        if(i == 2)
        {
            var tableau = dechets_bleu;
        }
        if(i == 3)
        {
            var tableau = dechets_marron;
        }


        if(tableau.indexOf(dechet)>-1)
        {
            alert('gagné');
        }
        else
        {
            alert('mauvaise poubelle');
        }
    }
}
