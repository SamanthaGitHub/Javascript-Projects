function Samantha_Function() {  //function assigning two vaiables utilizing a button
    var hat = "Red!";
    var shirt = "Blue!";
    document.getElementById("outfit").innerHTML = hat;
}

function Concatenate_Function() { //this will display the two str variables together at the same time
    var str = "This is the first part, ";
    str += "and this is the second part";
    document.getElementById("Concatenate").innerHTML = str;
}

function S2_Function () {
    var sentence = "This is my own function ";
    sentence += "and this my own sentence with concatenation";
    document.getElementById("mySentence").innerHTML = sentence;
    document.getElementById("mySentence").style.color = "red";
}