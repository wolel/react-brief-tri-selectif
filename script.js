var a = false;
var b = false;
var c = false;
var d = false;
var e = false;
var f = false;
var g = false;
var h = false;
var i = false;
var j = false;
var item;

var da = document.getElementById('da');
var db = document.getElementById('db');
var dc = document.getElementById('dc');
var dd = document.getElementById('dd');
var de = document.getElementById('de');
var df = document.getElementById('df');
var dg = document.getElementById('dg');
var dh = document.getElementById('dh');
var di = document.getElementById('di');
var dj = document.getElementById('dj');

var btn = document.getElementById('btn');

var poubelles = document.getElementById('poubelles');
var pJ_non = document.getElementById('pJ_non');
var pJ_visible = document.getElementById('pJ_visible');

var Jaune = document.getElementById('Pjaune');
var Bleu = document.getElementById('Pbleu');
var Vert = document.getElementById('Pvert');
var Marron = document.getElementById('Pmarron');

var score = document.getElementById('score');
var resultat = document.getElementById('resultat');


var count = 0;


var dpj = ['da', 'db', 'dc'];    var dpj = [da, db, dc];
var dpb = ['dd', 'de'];          var dpb = [dd, de];
var dpv = ['f','g'];             var dpv = [df, dg];
var dpm = ['h','i','j'];         var dpm = [dh, di, dj];



//randomSelectDechets(); //appeler ma fonction reload et random dechets


//------------------------------------------------



/*for (i = 0; i < dpj.length; i++){
    if (dpj){console.log(typeof dpj);// "typeof" voir de quel type est ma variable}}*/




//----------dechets qui vont dans la:--------------

//-------------------P JAUNE-----------------------

da.addEventListener('click', function () {
    item = this;
    a = true; //declarer une variable "bol"(ou autre nom au choix).Lui attribuer une valeur"true".Comparer dans le 'click' addEventListener du "J"
});
db.addEventListener("click", function () {
    b = true;
    item = this;
});
dc.addEventListener("click", function () {
   c = true;
   item = this;
});
//-------------------P BLEU--------------------

dd.addEventListener("click", function () {
    d = true;
    item = this;
});
de.addEventListener("click", function () {
    e = true;
    item = this;
});
//----------------------P VERTE----------------

df.addEventListener("click", function () {
    f = true;
    item = this;
});
dg.addEventListener("click", function () {
    g = true;
    item = this;
});
//----------------------P MARRON----------------

dh.addEventListener("click", function () {
    h = true;
    item = this;
});
di.addEventListener("click", function () {
    i = true;
    item = this;
});
dj.addEventListener("click", function () {
   j = true;
   item = this;
});


//----------------PJAUNE----------------//-----Si 'cette' poubelle Jaune est clické  && que "bol" est "true"--



Jaune.addEventListener('click', function () {
    if ((this === Jaune && a === true) ||
        (this === Jaune && b === true) ||
        (this === Jaune && c === true))
    {
        pJ_non.style.display = "none";
        pJ_visible.style.display ='inline';
        resultat.value = 'BRAVO, c\'était la poubelle jaune!';
        //alert('BRAVO, c\'était la poubel
        // *le jaune!');
        score.style.backgroundColor = '#E0D42B';
        score.style.color = '#333';
        resultat.style.backgroundColor = '#E0D42B';
        resultat.style.color = '#333';
        count++;
        console.log(item);

    a = false; // si pas "false", click sur la poubelle jaune genere encore et encore l'alert()
    b = false;
    c = false;

     if(item) {item.style.visibility='hidden';}

    }

    else if
       ((this === Jaune && d === false) ||
        (this === Jaune && e === false) ||
        (this === Jaune && f === false) ||
        (this === Jaune && g === false) ||
        (this === Jaune && h === false) ||
        (this === Jaune && i === false) ||
        (this === Jaune && j === false))
    {
        pJ_non.style.display = "block";
        pJ_visible.style.display ='none';
        pJ_visible.style.border = "none";
        resultat.value = 'NON, ce n\'ést pas la poubelle JAUNE!';
        //alert('NON, ce n\'ést PAS la poubelle JAUNE!');
        score.style.backgroundColor = 'red';
        score.style.color = 'white';
        count--;
        resultat.style.backgroundColor = 'red';
        resultat.style.color = 'white';
        d = false;
        e = false;
        f = false;
        g = false;
        h = false;
        i = false;
        j = false;

    }
    score.innerHTML = count;
    });


//---------------PBLEU-------


       Bleu.addEventListener("click", function () {
           if ((this === Bleu && d === true) ||
               (this === Bleu && e === true)) {
               count++;
       Bleu.style.border = '2px solid white';
       resultat.value = 'BRAVO, c\'était la poubelle BLEU!';
       //alert('BRAVO, c\'était la poubelle BLEU!');
       score.style.backgroundColor = '#16193D';
       score.style.color = 'white';
       resultat.style.backgroundColor = '#16193D';
       resultat.style.color = 'white';

       if(item) {item.style.visibility='hidden';}

       d = false;
       e = false;
   }

   else if
      ((this === Bleu && a === false) ||
       (this === Bleu && b === false) ||
       (this === Bleu && c === false) ||
       (this === Bleu && f === false) ||
       (this === Bleu && g === false) ||
       (this === Bleu && h === false) ||
       (this === Bleu && i === false) ||
       (this === Bleu && j === false))
   {

       resultat.value = 'NON, ce n\'ést PAS la poubelle BLEU!';
       resultat.style.backgroundColor = 'red';
       score.style.backgroundColor = 'red';
       score.style.color = 'white';
       resultat.style.color = 'white';
       count--;

       //alert('NON, ce n\'ést PAS la poubelle BLEU!');
    a = false;
    b = false;
    c = false;
    f = false;
    g = false;
    h = false;
    i = false;
    j = false;
   }
       score.innerHTML = count;

   });


//---------------PVERTE-------


Vert.addEventListener("click", function () {
    if((this === Vert && f === true)||
        (this ===Vert && g ===true)){
        count++;
        Vert.style.border = '2px solid white';
        resultat.value = 'BRAVO, c\'était la poubelle VERTE!';
        score.style.backgroundColor = '#0B2E13';
        score.style.color = 'white';
        resultat.style.backgroundColor = '#0B2E13';
        resultat.style.color = 'white';
        //alert('BRAVO, c\'était la poubelle VERTE!');
        f = false;
        g = false;

        if(item) {item.style.visibility='hidden';}
    }

    else if
       ((this === Vert && a === false) ||
        (this === Vert && b === false) ||
        (this === Vert && c === false) ||
        (this === Vert && d === false) ||
        (this === Vert && e === false) ||
        (this === Vert && h === false) ||
        (this === Vert && i === false) ||
        (this === Vert && j === false))
    {

        resultat.value = 'NON, ce n\'ést pas la poubelle VERTE!';
        //alert('NON, ce n\'ést PAS la poubelle VERTE!');
        score.style.backgroundColor = 'red';
        score.style.color = 'white';
        resultat.style.backgroundColor = 'red';
        resultat.style.color = 'white';
        count--;

        a = false;
        b = false;
        c = false;
        d = false;
        e = false;
        h = false;
        i = false;
        j = false;
    }

    score.innerHTML = count;
    });


//----------------PMARRON------------------------------


Marron.addEventListener("click", function () {
   if ((this === Marron && h === true) ||
       (this === Marron && i === true) ||
       (this === Marron && j === true)) {
       count++;
       Marron.style.border = '2px solid white';
       resultat.value = 'BRAVO, c\'était la poubelle MARRON!';
       score.style.backgroundColor = '#69471E';
       score.style.color = 'white';
       resultat.style.backgroundColor = '#69471E';
       resultat.style.color = 'white';
       //alert('BRAVO, c\'était la poubelle MARRON!');
       h = false;
       i = false;
       j = false;

       if(item) {item.style.visibility='hidden';}
   }


   else if
      ((this === Marron && a === false) ||
       (this === Marron && b === false) ||
       (this === Marron && c === false) ||
       (this === Marron && d === false) ||
       (this === Marron && e === false) ||
       (this === Marron && f === false) ||
       (this === Marron && g === false))
   {
       resultat.value = 'NON, ce n\'ést PAS la poubelle MARRON!';
       //alert('NON, ce n\'ést PAS la poubelle MARRON!');
       score.style.backgroundColor = 'red';
       score.style.color = 'white';
       resultat.style.backgroundColor = 'red';
       resultat.style.color = 'white';
       count--;
       a = false;
       b = false;
       c = false;
       d = false;
       e = false;
       f = false;
       g = false;
   }

   score.innerHTML = count;
});


//---------------------------


/*var dechets = document.getElementById('dechets').getElementsByTagName('div');
for (i = 0; i < dechets.length; i++){
    //alert(dechets[i].id);
    //console.log(dechets[i].id);
}*/

/*function randomSelectDechets() {
    return Math.floor(Math.random() * dechets.length);}*/


// recuperer l'id: quand on clique sur les dechets------------

//var dechets = [da, db, dc, dd, de, df , dg, dh,di, dj];






