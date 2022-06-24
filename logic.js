let players = ['x', 'o'];
let activePlayer = 0;
let board;


function startGame() {
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  renderBoard(board);
}

  function click(num,col) {
  let point = players[activePlayer]
  board[num][col] = point;
    for (i=0; i<board.length;i++) {
      if (board[i][0] === point && board[i][1] === point && board[i][2] === point) {
        showWinner(activePlayer)
      }
      else if (board[0][i] === point && board[1][i] === point && board[2][i] === point) {
        showWinner(activePlayer)
      }
      else if (board[0][i] === point && board[1][i+1] === point && board[2][i+2] === point) {
        showWinner(activePlayer)
      }
      else if (board[i][2] === point && board[1][i+1] === point && board[2][i] === point) {
        showWinner(activePlayer)
      }
    }
  
  renderBoard(board);
  activePlayer = Number(!activePlayer);
    
}
