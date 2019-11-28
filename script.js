var da = document.getElementById('da');
var a = false;
var b = false;
var c = false;
var d = false;
var e = false;
var f = false;
var g = false;

var db = document.getElementById('db');
var dc = document.getElementById('dc');
var dd = document.getElementById('dd');
var de = document.getElementById('de');
var df = document.getElementById('df');
var dg = document.getElementById('dg');
var dh = document.getElementById('dh');
var di = document.getElementById('di');
var dj =document.getElementById('dj');

var poubelles = document.getElementById('poubelles');

var J =document.getElementById('Pjaune');
var B =document.getElementById('Pbleu');
var V =document.getElementById('Pvert');
var M =document.getElementById('Pmarron');

var score = document.getElementById('score');
var resultat = document.getElementById('resultat');



var dpj = ['da', 'db', 'dc'];
var dpb = ['dd', 'de'];
var dpv = ['f'];
var dpm = ['g'];

var choixUtilisateur='';


//------------------------------------------------
var dpj = [da, db, dc];
for (i = 0; i < dpj.length; i++){
    if (dpj){
        console.log(typeof dpj);// "typeof" voir de quel type est ma variable
    }
}
var count = 0;

//--declarer les 3 click/dechet qui vont dans la poubelle JAUNE --

//-------------------PJAUNE-----------------------

da.addEventListener('click', function () {
    a = true; //declarer une variable "bol"(ou autre nom au choix).Lui attribuer une valeur"true".Comparer dans le 'click' addEventListener du "J"
});
db.addEventListener("click", function () {
    b = true;
});
dc.addEventListener("click", function () {
   c = true;
});
//-------------------P BLEU--------------------

dd.addEventListener("click", function () {
   d = true;
});
de.addEventListener("click", function () {
   e = true;
});
//----------------------PVERTE----------------
df.addEventListener("click", function () {
   f = true;
});
dg.addEventListener("click", function () {
   g = true;
});

//-----Si 'cette' poubelle Jaune est clické  && que "bol" est "true"--
J.addEventListener('click', function () {
    if ((this === J && a === true) ||
        (this === J && b === true) ||
        (this === J && c === true) ||
        (this === J && count === 0))
    {
        resultat.value = 'Bravo, c\'était la poubelle jaune!';
        alert('Bravo, c\'était la poubelle jaune!');
        count++;
        a = false; // si pas "false", click sur la poubelle jaune genere encore et encore alert()
        b = false;
        c = false;

    }else if ((this === J && a !== true) ||
        (this === J && b !== true) ||
        (this === J && c === true) ||
        (this === J && count === 0)){
        resultat.value = 'NON, ce n\'ést pas la poubelle jaune!';
        alert('NON, ce n\'ést pas la poubelle jaune!');
        a = false;
        b = false;
        c = false;
    }
    score.innerHTML = count;
    });
//---------------PBLEU-------
B.addEventListener("click", function () {
   if ((this === B && d === true) ||
       (this === B && e === true)) {
       B.style.border = '2px solid withe';
       resultat.value = 'Bravo, c\'était la poubelle bleu!';
       alert('Bravo, c\'était la poubelle bleu!');
       d = false;
       e = false;
   }
});

var dechets = document.getElementById('dechets').getElementsByTagName('div');
for (i = 0; i < dechets.length; i++){
    //alert(dechets[i].id);
    //console.log(dechets[i].id);
}

function randomSelectDechets() {
    return Math.floor(Math.random() * dechets.length);
}
 window.onload = function () {
     randomSelectDechets()
 };

// recuperer l'id: quand on clique sur les dechets------------

var dechets = [da, db, dc, dd, de, df , dg];






