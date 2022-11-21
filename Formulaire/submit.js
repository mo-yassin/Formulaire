document.querySelector('form').addEventListener('submit', function(element){
    let ok = false;
    // Nom
    var nom = document.getElementById('nom').value;
    var regex = /^[a-z]{1,30}$/ig;
    if(nom === '') {
        document.getElementById('name').innerHTML = 'Nome is required.';
        document.getElementById('nom').style.border = "2px solid #ff3860";
        ok = false;
    } else if (regex.test(nom)) {
        document.getElementById('nom').style.border = "2px solid #09c372";
        document.getElementById('name').innerHTML = '';
        ok = true;
    } else if (nom.length>30){
        document.getElementById('name').innerHTML = 'Le Nom ne doive pas dépasser 30 caractères.';
        document.getElementById('nom').style.border = "2px solid #ff3860";
        ok = false;
    } else {
        document.getElementById('name').innerHTML = 'Nom Non Valid.';
        document.getElementById('nom').style.border = "2px solid #ff3860";
        ok = false;
    }
    // ...

    // Prenom
    var prenom = document.getElementById('prenom').value;
    var regex = /^[a-z]{1,30}$/ig;
    if(prenom === '') {
        document.getElementById('prename').innerHTML = 'Prenome is required.';
        document.getElementById('prenom').style.border = "2px solid #ff3860";
        ok = false;
    } else if (regex.test(prenom)) {
        document.getElementById('prenom').style.border = "2px solid #09c372";
        document.getElementById('prename').innerHTML = '';
        ok = true;
    } else if (prenom.length>30){
        document.getElementById('prename').innerHTML = 'Le Prenom ne doive pas dépasser 30 caractères.';
        document.getElementById('prenom').style.border = "2px solid #ff3860";
        ok = false;
    } else {
        document.getElementById('prename').innerHTML = 'Prenom Non Valid.';
        document.getElementById('prenom').style.border = "2px solid #ff3860";
        ok = false;
    }
    // ...

    // Email
    var email = document.getElementById('email').value;
    var regex = /^[a-z]+\.[a-z]+\@ofppt.ma$/ig;
    if(email === '') {
        document.getElementById('mail').innerHTML = 'Email is required.';
        document.getElementById('email').style.border = "2px solid #ff3860";
        ok = false;
    } else if (regex.test(email)) {
        document.getElementById('email').style.border = "2px solid #09c372";
        document.getElementById('mail').innerHTML = '';
        ok = true;
    } else {
        document.getElementById('mail').innerHTML = 'Email Non Valid.';
        document.getElementById('email').style.border = "2px solid #ff3860";
        ok = false;
    }
    // ...

    // Telephone
    var telephone = document.getElementById('telephone').value;
    var regex = /^[0]+[5-7]+\d{8}$/ig;
    if(telephone === '') {
        document.getElementById('phone').innerHTML = 'Telephone is required.';
        document.getElementById('telephone').style.border = "2px solid #ff3860";
        ok = false;
    } else if (regex.test(telephone)) {
        document.getElementById('telephone').style.border = "2px solid #09c372";
        document.getElementById('phone').innerHTML = '';
        ok = true;
    } else if (telephone.length>10){
        document.getElementById('phone').innerHTML = 'Le numéro de téléphone doit avoir exactement 10 chiffres.';
        document.getElementById('telephone').style.border = "2px solid #ff3860";
        ok = false;
    } else {
        document.getElementById('phone').innerHTML = 'Telephone Non Valid.';
        document.getElementById('telephone').style.border = "2px solid #ff3860";
        ok = false;
    }
    // ...

    // Genre
    if (document.getElementById('female').checked) {
        document.getElementById("female-color").style.color = "#09c372";
        document.getElementById("male-color").style.color = "black";
        document.getElementById("gender").innerHTML = '';
        ok = true;
    } else if(document.getElementById('male').checked) {
        document.getElementById("male-color").style.color = "#09c372";
        document.getElementById("female-color").style.color = "black";
        document.getElementById("gender").innerHTML = '';
        ok = true;
    } else {
        document.getElementById("gender").innerHTML = "You must select your gender";
        ok = false;
    }
    // ...

    // Groupe
    if (document.getElementById('dw101').checked) {
        document.getElementById("dw101-color").style.color = "#09c372";
        document.getElementById("classe").innerHTML = '';
        ok = true;
    } else if(document.getElementById('dw102').checked) {
        document.getElementById("dw102-color").style.color = "#09c372";
        document.getElementById("classe").innerHTML = '';
        ok = true;
    } else if(document.getElementById('dw103').checked) {
        document.getElementById("dw103-color").style.color = "#09c372";
        document.getElementById("classe").innerHTML = '';
        ok = true;
    } else if(document.getElementById('dw104').checked) {
        document.getElementById("dw104-color").style.color = "#09c372";
        document.getElementById("classe").innerHTML = '';
        ok = true;
    } else if(document.getElementById('dm101').checked) {
        document.getElementById("dm101-color").style.color = "#09c372";
        document.getElementById("classe").innerHTML = '';
        ok = true;
    } else if(document.getElementById('dm102').checked) {
        document.getElementById("dm102-color").style.color = "#09c372";
        document.getElementById("classe").innerHTML = '';
        ok = true;
    } else {
        document.getElementById("classe").innerHTML = "You must select your groupe.";
        ok = false;
    }
    // ...

    // Clubs
    var clubs = document.getElementById("clubs");
    var count = 0
    for (let i = 0; i < clubs.options.length; i++) {
        if ( clubs.options[i].selected ) {
            count++;
        } else if (count <= 3 && count != 0) {
            document.getElementById("club").innerHTML = "";
            document.getElementById("clubs").style.border = "#09c372 2px solid";
            ok = true;
        } else if (count === 0) {
            document.getElementById("club").innerHTML = "You must select a club.";
            document.getElementById("clubs").style.border = "#ff3860 2px solid";
            ok = false;
        } else {
            document.getElementById("club").innerHTML = "You cant choose more tham three clubs.";
            document.getElementById("clubs").style.border = "#ff3860 2px solid";
            ok = false;
        }
    }   
    if(ok===false ){
        element.preventDefault();
    }
});