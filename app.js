// Margaret G. Robinson
let players = ["x", "O", " "];
let turn=1;
let cells = document.querySelectorAll(".row>div");
for (let i=0; i<cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}
function cellClicked() {
    turn ++
    if (turn%2==0) {
        event.target.textContent="X";
  } else {
        event.target.textContent="O";
  }
  checkWin(turn);
};
function checkWin(){
    if(cells[0].textContent ==="X" 
      && cells[1].textContent ==="X" 
      && cells[2].textContent ==="X") 
    {alert("Player X is the winner")} 
    else if (cells[3].textContent ==="X"
      && cells[4].textContent ==="X"
      && cells[5].textContent ==="X")
    {alert("Player X is the winner")} 
    else if (cells[6].textContent ==="X"
      && cells[7].textContent ==="X"
      && cells[8].textContent ==="X")
    {alert("Player X is the winner")}
    else if (cells[0].textContent ==="X"
      && cells[3].textContent ==="X"
      && cells[6].textContent ==="X")
    {alert("Player X is the winner")}
    else if (cells[1].textContent ==="X"
      && cells[4].textContent ==="X"
      && cells[7].textContent ==="X")
    {alert("Player X is the winner")}
    else if (cells[2].textContent ==="X"
      && cells[5].textContent ==="X"
      && cells[8].textContent ==="X")
    {alert("Player X is the winner")}  
    else if (cells[0].textContent ==="X"
      && cells[4].textContent ==="X"
      && cells[8].textContent ==="X")
    {alert("Player X is the winner")}
    else if (cells[2].textContent ==="X"
      && cells[4].textContent ==="X"
      && cells[6].textContent ==="X")
    {alert("Player X is the winner")}

    if(cells[0].textContent ==="O" 
      && cells[1].textContent ==="O" 
      && cells[2].textContent ==="0") 
    {alert("Player O is the winner")} 
    else if (cells[3].textContent ==="O"
      && cells[4].textContent ==="O"
      && cells[5].textContent ==="O")
    {alert("Player O is the winner")} 
    else if (cells[6].textContent ==="O"
      && cells[7].textContent ==="O"
      && cells[8].textContent ==="O")
    {alert("Player O is the winner")}
    else if (cells[0].textContent ==="O"
      && cells[3].textContent ==="O"
      && cells[6].textContent ==="O")
    {alert("Player O is the winner")}
    else if (cells[1].textContent ==="O"
      && cells[4].textContent ==="O"
      && cells[7].textContent ==="O")
    {alert("Player O is the winner")}
    else if (cells[2].textContent ==="O"
      && cells[5].textContent ==="O"
      && cells[8].textContent ==="O")
    {alert("Player O is the winner")}  
    else if (cells[0].textContent ==="O"
      && cells[4].textContent ==="O"
      && cells[8].textContent ==="O")
    {alert("Player O is the winner")}
    else if (cells[2].textContent ==="O"
      && cells[4].textContent ==="O"
      && cells[6].textContent ==="O")
    {alert("Player O is the winner")}
} 
//  {alert("Game is a draw!")}
