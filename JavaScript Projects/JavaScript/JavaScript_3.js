function displayType(food) {
    var foodType = food.getAttribute("data-food_type");
    alert("A " + food.innerHTML + " is a " + foodType + "!");
}