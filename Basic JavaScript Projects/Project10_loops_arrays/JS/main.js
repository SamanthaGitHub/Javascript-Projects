function length_function() {
    text = "Buster is all right";
    document.getElementById("str_len").innerHTML = text.length;
}

var instruments = ["Keyboard", "Drums", "Piano", "Triangle", "Cow bell"];
var list = "";
var i;
function for_loop() {
    for (i = 0; i < instruments.length; i++) {
        list += instruments[i] + "<br>";
    }
   document.getElementById("List_of_Instruments").innerHTML = list;
}

function arrayFunction() {
    var realityTV = [];
    realityTV[0] = "Keeping up with the Kardashians";
    realityTV[1] = "Real Housewives of OC";
    realityTV[2] = "Below Deck";
    realityTV[3] = "Real Housewives of Beverly Hills";
    document.getElementById("array").innerHTML = "I really enjoy watching " + realityTV[1] + ".";
}