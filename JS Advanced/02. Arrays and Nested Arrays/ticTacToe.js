function ticTacToe(moves) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = "X";
    for (const move of moves) {
        let isGameOver = false;
        let [x, y] = move.split(" ");
        x = Number(x);
        y = Number(y);

        if (board[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue;
        } else {
            board[x][y] = player;
        }
        //check rows
        for (let i = 0; i < 3; i++) {
            let row = board[i];
            if (row.every(a => a == player)) {
                return printBoard(player, board, isGameOver);
            }
        }
        //check diagonals
        let diagA = [];
        let diagB = [];
        for (let i = 0; i < 3; i++) {
            diagA.push(board[i][i]);
            diagB.push(board[i][2 - i]);
        }
        if (diagA.every(a => a == player) || diagB.every(a => a == player)) {
            return printBoard(player, board, isGameOver);
        }
        //check columns
        for (let i = 0; i < 3; i++) {
            let col = [];
            for (let l = 0; l < 3; l++) {
                col.push(board[l][i]);
            }
            if (col.every(a => a == player)) {
                return printBoard(player, board, isGameOver);
            }
        }
        //check if there are any free positions on the board
        isGameOver = true;
        for (const row of board) {
            if (row.includes(false)) {
                isGameOver = false;
                break;
            }
        }
        if (isGameOver) {
            return printBoard(player, board, isGameOver);
        }
        //change player
        player = changePlayer(player);
    }

    function printBoard(player, board, isGameOver) {
        let output = "";
        if (!isGameOver) {
            output += `Player ${player} wins!`;
        } else {
            output += "The game ended! Nobody wins :(";
        }
        for (const row of board) {
            output += `\n ${row.join("\t")}`;
        }
        return output;
    }

    function changePlayer(player) {
        if (player == "X") {
            player = "O";
        } else if (player == "O") {
            player = "X";
        }
        return player;
    }
}

console.log(ticTacToe(["0 0","1 1","1 0","1 2","2 0","2 0"]
));