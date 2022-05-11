function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voting() {
    var age, canVote
    age = document.getElementById("age").value;
    canVote = (age >= 18) ? "Woohoo! You are old enough":"Sorry, you are too young";
    document.getElementById("vote").innerHTML = canVote + " to vote!";
}