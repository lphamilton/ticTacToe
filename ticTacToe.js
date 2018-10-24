// * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// * Win detection - detect and display who won


//you could return the board after every move (a matrix)
//it will start off as a numbered board so that the user can pick their spot when prompted 


//it will start off by showing the initial board and prompting player one to select a spot 

var ticTacToe = function(){ //to run the game you will run this function
    var player1 = prompt("Who will play O's ?", "player 1")
    var player2 = prompt("Who will play X's ?", "player 2")

    var intialBoard = [ [1,2,3],
                        [4,5,6],
                        [7,8,9] ]


   //these are plays that if they are inside the intial board will return a winner 
    var possibleWins = function(board) {
        //diagonals
        if(board[0][0] === "o" && board[1][2] === "o" && board[2][2] === "o") {
            return `The Winner is ${player1}!`
        } else if (board[0][2] === "o" && board[1][2] === "o" && board[1][2] === "o") {
            return `The Winner is ${player1}!`
        } else if (board[0][0] === "x" && board[1][2] === "x" && board[2][2] === "x") {
            return `The Winner is ${player2}!`
        } else if (board[0][2] === "x" && board[1][2] === "x" && board[1][2] === "x"){
            return `The Winner is ${player2}!`
        }

        //anything other than diagonal: 
        var noWinner = "";
        var threeOfTheSame = function(board) { //function to see if there is a sraight across winner
            
            for(var i = 0; i < 3; i++) { //for each row keep track of the X's and O's
            var x = 0;
            var o = 0;
                for(var j = 0; j < 3; j++) {
                    if(board[i][j] === 'x') {
                        x++
                    } else if (board[i][j] == 'o'){
                        o++
                    }
                }
                //once you are done with a row, return if either var is 3
                if(x === 3) {
                    return `The Winner is ${player2}!`
                } else if( o === 3) {
                    return `The Winner is ${player1}!`
                }
            }
            //if no winner, possible wins will return 0;
            noWinner = 1;
        }
        
        threeOfTheSame(board);
        return noWinner;
    
    }

    



}