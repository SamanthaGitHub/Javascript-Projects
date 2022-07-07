// var restaurant = {"name":"Omars", "age":75, "food":"steak and seafood"};
// var myJSON = JSON.stringify(restaurant);
// document.getElementById("test").innerHTML = myJSON;

// localStorage.setItem("Smell", "flowery");
// document.getElementById("test").innerHTML = localStorage.getItem("Smell");

function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str)
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false; //???????why false? ????????
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    var button = document.getElementsByClassName("remove");
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', remove);
    };
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1); //????why1??????
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false; //???????why false? ????????
}

document.getElementById('add').addEventListener('click', add);
show();