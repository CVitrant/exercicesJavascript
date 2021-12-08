function invert() {
    let tmp = document.getElementById("val1").value;
    document.getElementById("val1").value = document.getElementById("val2").value;
    document.getElementById("val2").value = tmp;
}

function show() {
    let Nom = 'jean pierre';
    let Age = 30;
    let Homme = true;
    document.getElementById("showhere").innerHTML = 'Son nom est ' + Nom + ' il a ' + Age + ' ans et ' + (Homme ? ' est un homme' : 'nest pas un homme');
}


function puissance() {
    let tmp = document.getElementById("valpui").value;
    document.getElementById("showpui").innerHTML = Math.pow(2, tmp);
}

function add() {
    let var1 = parseInt(document.getElementById("valadd1").value) ; 
    let var2 = parseInt(document.getElementById("valadd2").value);
    document.getElementById("showadd").innerHTML = var1 + var2;
}

function minToSec() {
    let tmp = parseInt(document.getElementById("valmin").value) * 60;
    document.getElementById("showmin").innerHTML = tmp;
}

function increment() {
    let tmp = parseInt(document.getElementById("valinc").value) + 1;
    document.getElementById("showinc").innerHTML = tmp;
}

function surface() {
    let var1 = parseInt(document.getElementById("valsur1").value) ; 
    let var2 = parseInt(document.getElementById("valsur2").value);
    document.getElementById("showsur").innerHTML = (var1 * var2) / 2;
}

function retourne() {
    let tmp = document.getElementById("valret").value;
    let x = '';
    const chars = tmp.split('');
    let length = chars.length;
    let i = 0;
    while(i < length) {
        x = x + chars[(length-1) - i];
        i++;
    }    
    document.getElementById("showret").innerHTML = x;
}

function compare() {
    let var1 = parseInt(document.getElementById("valcom1").value);
    let var2 = parseInt(document.getElementById("valcom2").value);
    let var3 = parseInt(document.getElementById("valcom3").value);
       
    document.getElementById("showcom").innerHTML = Math.max(var1,var2,var3);
}


function tabUn() {
    let var1 = [1, 2, 3];
    let var2 = [50, 60, 70];
    let var3 = [20, 35, 60];
    
    document.getElementById("showtab").innerHTML = 'Les tableaux sont ' + var1 + ' ,' + var2 + ' ,' + var3 + '. Leurs premières valeurs sont' + var1[0] + ' ' + var2[0] + ' ' + var3[0];
}

function urlshow() {
    let var1 = document.getElementById("valurl").value;  
                // Create anchor element.
                var a = document.createElement('a'); 
                  
                // Create the text node for anchor element.
                var link = document.createTextNode(var1);
                  
                // Append the text node to anchor element.
                a.appendChild(link); 
                  
                // Set the title.
                a.title = var1; 
                  
                // Set the href property.
                a.href = var1; 
                  
                // Append the anchor element to the body.
                document.getElementById("showurl").prepend(a);
}


function reste() {
    let var1 = parseInt(document.getElementById("valres1").value) ; 
    let var2 = parseInt(document.getElementById("valres2").value);
    document.getElementById("showres").innerHTML = var1 % var2;
}

function infCent() {
    let var1 = parseInt(document.getElementById("valinf1").value) ; 
    let var2 = parseInt(document.getElementById("valinf2").value);
    document.getElementById("showinf").innerHTML = ((var1 + var2) < 100) ? 'La somme des deux valeurs est inférieure à 100' : 'La somme des deux valeurs nest pas inférieure à 100';
}


function hourToSec() {
    let tmp = parseInt(document.getElementById("valhsec").value) * 360;
    document.getElementById("showhsec").innerHTML = tmp;
}

function infeZero() {
    let tmp = parseInt(document.getElementById("valinze").value);
    document.getElementById("showinze").innerHTML = tmp <= 0 ? tmp + ' est inférieur ou égal à zéro' : tmp + ' est supérieur à zéro';
}


function egaux() {
    let var1 = parseInt(document.getElementById("valega1").value);
    let var2 = parseInt(document.getElementById("valega2").value);
    document.getElementById("showega").innerHTML = var1 == var2 ? ' Les valeurs sont égales ' : ' Les valeurs ne sont pas égales';
}


function hourAMinToSec() {
    let hours = parseInt(document.getElementById("valhmsec1").value);
    let minutes = parseInt(document.getElementById("valhmsec2").value);
    let somme = hours * 360 + minutes * 60;
    document.getElementById("showhmsec").innerHTML = hours + ' et ' + minutes + ' en secondes est égal à ' + somme + ' secs.';
}

function retourneTab() {
    let var1 = [1, 2, 3];
    let var2 = [50, 60, 70];
    let var3 = [20, 35, 60];
    
    let tmpTab = [];
    for(let i = 0; i < var1.length; i++) {
        tmpTab[i] = var1[var1.length-i-1];
    }
    
    document.getElementById("showretab").innerHTML = tmpTab;
}

function retourneLastTab() {
    let var1 = [50, 60, 70];
    
    let tmp = var1[var1.length-1];
    
    document.getElementById("showlastab").innerHTML = 'Le tableau est ' + var1 + ' et le dernier élément est ' + tmp;
}



function egalS() {
    let var1 = '5';
    let var2 = 5;
    
    document.getElementById("showegas").innerHTML ='Les valeurs sont '+ var1 + ' et ' + var2 + '. Résultat : ' + (var1 === var2 ? ' Les valeurs sont strictement égales ' : ' Les valeurs ne sont pas strictement égales');
}



function chaineVide() {
    let tmp = document.getElementById("valcavi").value;
    document.getElementById("showcavi").innerHTML = tmp === ('') ? ' La chaine de caractères est vide ' : ' La chaine de caractère nest pas vide';
}
