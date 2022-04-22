//Getting Html
document.querySelectorAll(".box").forEach(click =>{click.addEventListener("click",handleClick,)});
document.querySelector(".reset").addEventListener("click",resetGame);
let turn = document.querySelector("#playerTurn");
//Game Statement
let gameStatus=true;
let userInput= ["","","","","","","","","" ];
let roundwon=false;
let roundlost=false;
let playerTurn="X";

//Basic Funcion
const winningMessage = () =>`${playerTurn} Win!`;
const drawMessage =()=>`It's a Draw`;
const display=()=>`${playerTurn} Turn`;
turn.innerHTML=display();

winningCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleClick(cell){
    const cellcliked=cell.target;
    const cellindex=parseInt(cellcliked.getAttribute("data-cell-index"));
    
    if(userInput[cellindex] !==""||gameStatus===false){
        return
    }
    cellPlayed(cellindex,cellcliked)
    winDecition();
};
function winDecition(){
    for(let i=0;i<=7;i++){
        const winY=winningCondition[i];
        let a=userInput[winY[0]];
        let b=userInput[winY[1]];
        let c=userInput[winY[2]];
        console.log(a,b,c);
        if (a===""||b==""||c===""){
            continue;
        }
        if (a === b && b ===c ){
            roundwon=true;
            break;
        }
    }
if(roundwon===true){
    turn.innerHTML=winningMessage();
    gameStatus=false;
    return;
}
let roundraw= !userInput.includes("");
if (roundraw){
    turn.innerHTML=drawMessage();
    gameStatus=false;
    return;
}
    playerChange(); 
};


function cellPlayed(cellindex,cellcliked){
    userInput[cellindex]=playerTurn;
    cellcliked.innerHTML=playerTurn;
    console.log(userInput);
}
function playerChange(){
    playerTurn = playerTurn ==="O"? "X":"O";
    turn.innerHTML=display();
};

function resetGame(){
    gameStatus=true;
    roundwon=false;
    roundlost=false;
    playerTurn="X";
    turn.innerHTML=display();
    userInput=["","","","","","","","",""];
    document.querySelectorAll(".box").forEach(cell=>cell.innerHTML="")
};