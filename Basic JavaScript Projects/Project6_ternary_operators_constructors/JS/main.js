// var var = "slam"
// document.write(var)

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

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function cat(Name, Age, Color, Toy) {
    this.cat_Name = Name;
    this.cat_Age = Age;
    this.cat_Color = Color;
    this.cat_Toy = Toy;
}

var Sprinkles = new cat("Sprinkles", "17", "white", "mouse");
var Spammy = new cat("Spammy", "1", "black", "cat nip");

function countFunction() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var startingPoint = 9;
        function plusOne() {startingPoint += 1;}
        plusOne();
        return startingPoint;
    }
}

function samFunction() {
    document.getElementById("Nested_Function").innerHTML = increment()
    function increment() {
        var num = 1;
        num++;
        return num;
    }
}