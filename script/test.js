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



