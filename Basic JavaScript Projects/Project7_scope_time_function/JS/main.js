var x = 1; //global variable
function add() {
    var y = 5
    document.write(x + 1 + "<br");
    console.log(1 + y); //shows in the console of the browswe
}

function sub() {
    document.write(y + 1) //y is a local variable, so this will produce an error
    console.log(1 + y); //lets you see there's an error in the console
}

add();
sub();

function myFunction() {
    if (new Date().getHours() < 12) {
        document.getElementById("morning").innerHTML = "Good Morning!";
    }
    else {
        document.getElementById("morning").innerHTML = "Good Afternoon!";
    }
}

function greeting() { //this is kind the same as above, with evening and mouseover effect
    if (new Date().getHours() < 12) {
        document.getElementById("greet").innerHTML = "Good Morning!";
    }
    if (new Date().getHours() > 12 ) {
        document. getElementById("greet").innerHTML = "Good Afternoon!";
    }
    if (new Date().getHours() >18 ) {
        document. getElementById("greet").innerHTML = "Good Evening!";
    }
}


function boogeyNum() { //checks what to do if there's a boogeyman/men under your bed
    boogeymen = document.getElementById("boogeymen").value;
    if (boogeymen > 0) {
        answer = "Sorry, you need to call someone about that.";
    }
    else {
        answer = "You're all good!";
    }
    document.getElementById("boogeyUnderBed").innerHTML = answer;
}


function Time_function() {
    var Time = new Date().getHours(); //gets the time of day
    var Reply; //initiates the reply variable
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //displays reply
}