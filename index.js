let clima = prompt ("Que clima hace? (Solo valores numericos)");

if (clima <= 0) {
    document.getElementById("clima").innerHTML = "El arte es morirse de frío";
    //alert( "Un frio de la mierda" );
} else if (clima <= 16) {
    document.getElementById("clima").innerHTML = "Está fresco para pasear en jaula";
    //alert( "Ta joya" );
} else if (clima > 16) {
    document.getElementById("clima").innerHTML = "Maldición, va a ser un día hermoso";
    //alert ( "Esta fresco" );
}