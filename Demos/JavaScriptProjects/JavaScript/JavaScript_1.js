function mealFunction() {
    var mealOutput;
    var meals = document.getElementById("mealChoice").value;
    var mealString = " very delicious!";
    switch(meals) {
        case "1":
            mealOutput = "Fried chicken is" + mealString;
        break;
        case "2":
            mealOutput = "Meatloaf and gravy is" + mealString;
        break;
        case "3":
            mealOutput = "A classic steak dinner  is" + mealString;
        break;
        case "4":
            mealOutput = "Interesting choice! Nonetheless, cereal is" + mealString;
        break;
        case "5":
            mealOutput = "Seafood is" + mealString;
        break;
        case "6":
            mealOutput = "A burger and fries are" + mealString;
        break;
        default:
            mealOutput = "Enter a number 1 through 6, if you <em>had</em> to choose"
    }
    document.getElementById("output").innerHTML = mealOutput;
}

function myFunction() {
    var favFood = document.getElementsByClassName("pasta");
    favFood[0].innerHTML = "My favorite meal ever is pasta!";
}

var c = document.getElementById("canvas");
var can = c.getContext("2d");

var grd = can.createLinearGradient(0, 0, 300, 200);
grd.addColorStop(0, "red");
grd.addColorStop(0.4, "blue");
grd.addColorStop(0.7, "white");
grd.addColorStop(1, "brown");

can.fillStyle = grd;
can.fillRect(0, 0, 500, 300)