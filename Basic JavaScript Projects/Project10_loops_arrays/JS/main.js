// check the number of characters in my string
function length_function() {
    text = "Buster is all right";
    document.getElementById("str_len").innerHTML = text.length;
}

// a do/while loop to count down the number of chores
whileText = "";
let num = 5;
do {
    whileText += "<br> I have " + num + " more chores to do.";
    num--;
}
while (num >= 0);
document.getElementById("whileLoop").innerHTML = whileText + " I'm done!";

// a for loop the displays my cat list in order
var cats = ["Sprinkles", "Mr. Ash", "Princess", "Lumpy", "Bandit"];
var list = "";
var i;
function for_loop() {
    for (i = 0; i < cats.length; i++) {
        list += cats[i] + "<br>";
    }
   document.getElementById("forLoop").innerHTML = list;
}

// an array of weirdly entertaining TV shows I watch
function arrayFunction() {
    var realityTV = [];
    realityTV[0] = "Keeping up with the Kardashians";
    realityTV[1] = "Real Housewives of OC";
    realityTV[2] = "Below Deck";
    realityTV[3] = "Real Housewives of Beverly Hills";
    document.getElementById("array").innerHTML = "I really enjoy watching " + realityTV[1] + ".";
}

// using const in a function of office properties
function constant_function() {
    const office = {monitor:"Dell", os:"Windows", processor:"AMD", connectedWiFi:"router 2G"};
    office.hasLamp = "yes";
    office.monitor = "LG";
    document.getElementById("constant").innerHTML = "The operating system of this computer is " + office.os + " and the brand of the monitor is " + office.monitor + "." +
    "<br>" + "Does it have a lamp? " + office.hasLamp + ".";
}

// using let and var in a simple math equation; the let has just the block/function scope but I could reuse the var elsewhere
function letFunction() {
    let x = 3;
    var y = 5;
    document.getElementById("usingLet").innerHTML = x + y;
}

// very simple using return; this is displayed in the console
function myFunction(a, b) {
    return a + b;
}
console.log(myFunction(3, 4))

// my user object with a description function
let user = {
    username: "CosmoKramer",
    password: "ILoveJerry1",
    userSince: "01/21/1979",
    bestFriend: "Newman",
    description: function() {
        return "The user has entered a user name of " + this.username + " with a password of " + this.password + ".";
    }
};
document.getElementById("userObject").innerHTML = user.description();


// a number list for 0 and even numbers thru 6
text = "";
for (let num = 0; num <= 10; num++) {
    if (num === 1) {continue;}
    if (num === 3) {continue;}
    if (num === 5) {continue;}
    if (num === 7) {break;}
    text += "Now the number is " + num + "<br>";
}
document.getElementById("continueBreak").innerHTML = text;

