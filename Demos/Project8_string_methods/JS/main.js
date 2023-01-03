function sliceMethod() {
    var sentence = "My favorite food is pasta";
    var section = sentence.slice(20, 25);
    document.getElementById("pasta").innerHTML = section;
}

function upperCase() {
    var sentence = "this was written in lowercase";
    var upperSentence = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upperSentence;
}

function searchFunction() { //shows the index of the first 'search'
    let text = "I will search for the word search";
    let x = text.search("search");
    document.getElementById("search").innerHTML = x;
}

function numStringFunction() {
    var num = 666;
    document.getElementById("numString").innerHTML = num.toString();
}

function piFiveFunction() {
    var p = Math.PI;
    document.getElementById("pi5").innerHTML = p.toPrecision(5);
}

function fixedFunction() {
    var p = Math.PI;
    document.getElementById("fixed").innerHTML = p.toFixed(5);
}

function valueOfFunction() {
    str = "This is a string"
    document.getElementById("string").innerHTML = str.valueOf();
}

function concatFunction() {
    var first = "The ";
    var second = "Goblin ";
    var third = "King ";
    var fourth = "stole Toby";
    var sentence = first.concat(second, third, fourth);
    document.getElementById("goblin").innerHTML = sentence;
}