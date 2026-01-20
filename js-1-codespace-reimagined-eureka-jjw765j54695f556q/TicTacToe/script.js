const cells=document.querySelectorAll('.cell')
const statusT=document.querySelector('#status')
const resetbutton=document.querySelector('#reset')

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let currentPlayer="X";
let gameActive=true;

cells.forEach((cell)=>{
    cell.addEventListener('click',function(){
        if(cell.innerHTML!="" || !gameActive){
            return;
        }
        cell.innerHTML=currentPlayer;
        checkWinner();
        if(!gameActive) return;
        currentPlayer=currentPlayer==="X"?"O":"X";
        statusT.innerHTML = `Player ${currentPlayer}'s turn`;
    });
});

resetbutton.addEventListener('click',()=>{
    cells.forEach(cell=>{
        cell.innerHTML="";
    });
    currentPlayer="X";
    gameActive=true;
    statusT.innerHTML=`Player X's turn`;
});

function checkWinner(){
    for(let i=0;i<winPatterns.length;i++){
        let a=winPatterns[i][0];
        let b=winPatterns[i][1];
        let c=winPatterns[i][2];
        if (
            cells[a].innerHTML !== "" &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[a].innerHTML === cells[c].innerHTML
        ){
            statusT.innerHTML=`${cells[a].innerHTML} won this game! YAYYY....`;
            gameActive=false;
            return;
        }
    }
        let isDraw = true;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        statusT.innerHTML = "It's a Draw!";
        gameActive = false;
    }
}