// queen object
queen = {
    direction: "S",
    position: {
        x: 4,
        y: 0
    }
}

// Default position
console.log("Default position of queen: " + queen.position.x, queen.position.y);


// function to update position
function updatePosition(x, y) {
    queen.position.x = x;
    queen.position.y = y;
}


// Single step move function
function moveforward(direction) {
    // direction = queen.direction;
    switch (direction) {
        case "S":
            if (queen.position.y > 0 && queen.position.y < 8) {
                queen.position.y = queen.position.ycor - 1;

            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "N":
            if (queen.position.y >= 0 && queen.position.y < 7) {
                queen.position.y = queen.position.y + 1;

            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "E":
            if (queen.position.x >= 0 && queen.position.x < 7) {
                queen.position.x = queen.position.x + 1;

            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "W":
            if (queen.position.x > 0 && queen.position.x < 8) {
                queen.position.x = queen.posito - 1;

            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "SW":
            if (queen.positiony > 0 && queen.positiony < 8) {
                if (queen.positionx > 0 && queen.positionx < 8) {
                    let x = queen.positionx - 1;
                    let y = queen.positiony - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "SE":
            if (queen.positionx >= 0 && queen.positionx < 7) {
                if (queen.position.y > 0 && queen.positiony <= 7) {
                    let x = queen.positionx + 1;
                    let y = queen.positiony - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "NE":
            if (queen.position.x >= 0 && queen.position.x < 7) {
                if (queen.position.y >= 0 && queen.position.y < 7) {
                    let x = queen.position.x + 1;
                    let y = queen.position.y + 1;
                    updatePosition(x, y);
                }

            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "NW":
            if (queen.position.x > 0 && queen.position.y < 7) {
                if (queen.position.x <= 7 && queen.position.y >= 0) {
                    let x = queen.position.x - 1;
                    let y = queen.position.y + 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of order move.");
            }
            break;
    }
}

// let s = changeDirection("S")
// moveforward(s);



//  changeDirection function
function changeDirection(direction) {
    let dir = direction
    queen.direction = dir;
    return dir;
}


// JumpForward Function 
function jumpMoveForward(direction, Steps) {
    var temp = 0;
    var temp1 = 0;
    switch (direction) {
        case "N":
            temp = queen.position.y + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y = queen.position.y + Steps;
            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "S":
            temp = queen.position.y - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.y = queen.position.y - Steps;
            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "E":
            temp = queen.position.x + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x = queen.position.x + Steps;
            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "W":
            temp = queen.position.x - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.x = queen.position.x - Steps;
            } else {
                console.log("Queen is moving out of board");
            }
            break;

        case "NE":
            temp = queen.position.y + Steps;
            temp1 = queen.position.x + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y + Steps;
                    queen.position.x = queen.position.x + Steps;
                }
            }
            break;

        case "SE":
            temp = queen.position.y - Steps;
            temp1 = queen.position.x + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y - Steps;
                    queen.position.x = queen.position.x + Steps;
                }
            }
            break;

        case "NW":
            temp = queen.position.y + Steps;
            temp1 = queen.position.x - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y + Steps;
                    queen.position.x = queen.position.x - Steps;
                }
            }
            break;

        case "SW":
            temp = queen.position.y - Steps;
            temp1 = queen.position.x - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.y = queen.position.y - Steps;
                    queen.position.x = queen.position.x - Steps;
                }
            }
            break;

    }
}
console.log("\n");
console.log("Queen starts moving from the Starting Default position");

let north = changeDirection("N");
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);
jumpMoveForward(north, 9);

let northeast = changeDirection("NE");
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);
jumpMoveForward(northeast, 1)

let northwest = changeDirection("NW");
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);
jumpMoveForward(northwest, 2)

let south = changeDirection("S");
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);
jumpMoveForward(south, 3)

let southeast = changeDirection("SE");
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);
jumpMoveForward(southeast, 1)

let southwest = changeDirection("SW");
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);
jumpMoveForward(southwest, 4)

let east = changeDirection("E");
jumpMoveForward(east, 2)
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);

let west = changeDirection("W");
jumpMoveForward(west, 5)
console.log("Current position of Queen is : " + queen.position.x, queen.position.y);