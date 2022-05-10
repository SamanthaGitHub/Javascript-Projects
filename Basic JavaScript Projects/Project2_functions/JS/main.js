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