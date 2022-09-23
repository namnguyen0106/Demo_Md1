let listGame = [];
let users = new Users("", "", "");

function drawBoardGame() {
    let size = +document.getElementById("size").value;
    document.getElementById("userX").setAttribute("disabled", "disabled")
    document.getElementById("userO").setAttribute("disabled", "disabled")
    document.getElementById("size").setAttribute("disabled", "disabled")
    let game = "<table>";
    for (let i = 0; i < size; i++) {
        game += "<tr>";
        listGame[i] = [];
        for (let j = 0; j < size; j++) {
            game += "<td onclick='changeStatus(this, "+i+","+j+", " + size + ");'>&nbsp;</td>";
            listGame[i][j] = -1;
        }
        game += "</tr>";
    }
    game += "</table>";
    document.getElementById("gameBoard").innerHTML = game;
    console.log(listGame)
}

users.setUser("X")

function changeStatus(cell, xPos, yPos, size) {
    cell.innerHTML = users.getUser();
    users.setXPos(xPos);
    users.setYPos(yPos);
    if (users.getUser() === "X") {
        listGame[xPos][yPos] = 0;
        users.setUser("0");
    } else {
        listGame[xPos][yPos] = 1;
        users.setUser("X");
    }
    checkWin(users, size);
}

function checkWin(users, size) {
    let countNgang = 1;
    let countDoc = 1;
    let countCheoTrai = 1;
    let countCheoPhai = 1;
    let xPos = users.getXPos();
    let yPos = users.getYPos();
    let i = xPos;
    let j = yPos;
    let valueOfCell = listGame[xPos][yPos];
    console.log(listGame)
    console.log(valueOfCell)

    while (listGame[i][j + 1] === valueOfCell) {
        countNgang++;
        confirmWinner(countNgang, 5, users, size);
        j++;
    }

    while (listGame[i][j - 1] === valueOfCell) {
        countNgang++;
        confirmWinner(countNgang, 5, users, size);
        j--;
    }

    while (listGame[i + 1][j] === valueOfCell) {
        countDoc++;
        confirmWinner(countDoc, 5, users, size);
        i++;
    }

    while (listGame[i - 1][j] === valueOfCell) {
        countDoc++;
        confirmWinner(countDoc, 5, users, size);
        i--;
    }

    while (listGame[i - 1][j - 1] === valueOfCell) {
        countCheoTrai++;
        confirmWinner(countCheoTrai, 5, users, size);
        j--;
        i--;
    }

    while (listGame[i + 1][j + 1] === valueOfCell) {
        countCheoPhai++;
        confirmWinner(countCheoPhai, 5, users, size);
        j++;
        i++;
    }

    while (listGame[i + 1][j - 1] === valueOfCell) {
        countCheoPhai++;
        confirmWinner(countCheoPhai, 5, users, size);
        j--;
        i++;
    }

    while (listGame[i - 1][j + 1] === valueOfCell) {
        countCheoTrai++;
        confirmWinner(countCheoTrai, 5, users, size);
        j++;
        i--;
    }
}

let countWinX = 0;
let countWinO = 0;

function confirmWinner(count, number, users, size) {
    let isReset = false
    if (count === number) {
        if (users.getUser() !== "X") {
            let userX = document.getElementById("userX").value;
            alert(userX + " are winner!");
            countWinX++
            isReset = true;
        } else {
            let userO = document.getElementById("userO").value;
            alert(userO + " are winner!")
            countWinO++
            isReset = true;
        }
    }
    if (isReset) {
        document.getElementById("winO").innerHTML = "WIN: " + countWinO
        document.getElementById("winX").innerHTML = "WIN: " + countWinX
        if (users.getUser() === "X") {
            document.getElementById("tips").innerHTML = "Người chơi X đi trước"
        } else {
            document.getElementById("tips").innerHTML = "Người chơi O đi trước"
        }
        drawBoardGame(size);
    }
}