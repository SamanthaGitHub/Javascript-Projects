window.alert("Welcome! Did you know that pi equals " + Math.PI + "?"); //this is an alert with a message about the value of pi

function myAddFunction() { //this function adds 1+1 and is called on double click
    var add = 1 + 1;
    document.getElementById("addMath").innerHTML = "1 + 1 =" + " " + add;
}

function mySubFunction() { //this functionsubtracts 9-6  and is called when mouse is over the element
    var sub = 9 - 6;
    document.getElementById("subMath").innerHTML = "9 - 6 =" + " " + sub;
}

function myMulFunction() { //this function multiplys 6*6 and is called when clicked
    var mul = 6 * 6;
    document.getElementById("mulMath").innerHTML = "6 * 6 =" + " " + mul;
}

function myDivFunction() { //this function divides 8/3 and is called when dragged
    var div = 8 / 3;
    document.getElementById("divMath").innerHTML = "8 / 3 =" + " " + div;
}

function lotsOfMath() { //this function includes all previous operators and is called once the drag leaves the elements space
    var math = 2 - 3 * 36 / 2.6;
    document.getElementById("allTheMath").innerHTML = "2 - 3 * 36 / 2.6 =" + " " + math
}

function modulusFunction() { //this function shows the remainder or 5/3 and is called on click
    var mod = 5 % 3;
    document.getElementById("modulus").innerHTML = "5 % 3 (the remainder from 5 / 3) =" + " " + mod;
}

function increment() { //this function increases 8 by 1 and is called on click
    var x = 8;
    x++;
    document.write(x)
}

function decrement() { //this function decreases 3 by 1 and is called on click
    var y = 3;
    y--;
    document.write(y);
}

function ranNum() { //this function produces a random number and is called on click
    var num = Math.random()*7;
    document.write(num);
}
