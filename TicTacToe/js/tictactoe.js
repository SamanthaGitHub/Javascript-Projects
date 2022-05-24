let activePlayer = 'X';
let selectedSquares = []; //empty to start and adds selectedSquares

function placeXorO(squareNumber) { //function for placing the 'X' or 'O'
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') { //activePlayer
            select.style.backgroundImage = 'url("images/x.png")';
        } else { //computersTurn
            select.style.backgroundImage = 'url("images/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer); //creates vaiables to track placement  to keep track of if win condition is met

        checkWinConditions(); //switches activePlayer

        if (activePlayer === 'X') {
            activePlayer = 'O';
        } 
        else {
            activePlayer = 'X';
        }

        Audio('./media/place.mp3');

        if (activePlayer === 'O') { //disables click for the X player while computersTurn; delays 1 second
            disableClick();
            setTimeout(function() {computersTurn();}, 1000);
        }
        return true;
    }

    function computersTurn() { //computer will choose a random square
        let success = false;
        let pickASquare;
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXorO(pickASquare)) {
                placeXorO(pickASquare);
                success = true;
            };
        }
    }
}

function checkWinConditions() { //includes all possible win conditions and searches for a win; uses arrayIncludes() to check for win conditions
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}

    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    else if (selectedSquares.length >= 9) {
        Audio('./media/tie.mp3');
        setTimeout(function() {resetGame();}, 1000)
    }

    function arrayIncludes(squareA, squareB, squareC) { //checks if the array has 3 strings; checks for the win condition
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        if (a === true && b === true && c === true) {return true}
    }
}

function disableClick() { //disables ability for non activePlayer to click
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { //this will draw the win line once win condition is met; uses coordinates as to where to draw the line on the canvas
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1, //stores temp x to update animationLoop
        y = y1; //stores temp y to update animationLoop

    function animateLineDrawing() { //    ??where is the '10' coming from? why 10??
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x, y)
        c.lineWidth = 10
        c.strokeStyle = 'yellow'; //changed color
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10;} //   ??why add 10??
            if (y < y2) {y += 10;} //   ??why add 10??
            if (x >= x2 && y>= y2) {cancelAnimationFrame(animationLoop);}
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;} //   ??why add 10??
            if (y > y2) {y -= 10;} //   ??why subtract 10??
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    function clear() { //clears canvas after win line is drawn
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () {clear(); resetGame();}, 1000); 
}

function resetGame() {
    for (let i = 0; i < 9; i++) { //iterates through HTML squares elements
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}