var x = 1;
function add() {
    var y = 5
    document.write(x + 1 + "<br");
    console.log(1 + y);
}

function sub() {
    document.write(y + 1)
    console.log(1 + y);
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

function greeting() {
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

//String doesn't work...

// function capitalFunction() {
//     capital = document.getElementById("capital").value;
//     if (capital = "Salem") {
//         guess = "You're right!";
//     }
//     else {
//         guess= "Sorry, you're wrong.";
//     }
//     document.getElementById("oregonCapital").innerHTML = guess;
// }




//issue with Else Assignment in step 149
function boogeyNum() {
    boogeymen = document.getElementById("boogeymen").value;
    if (boogeymen <= 0) { //this didn't work with (=); why do I need (<=)?
        answer = "You're all good!";
    }
    else {
        answer = "Sorry, you need to call someone about that.";
    }
    document.getElementById("boogeyUnderBed").innerHTML = answer;
}




function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}