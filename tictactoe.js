let turn=`O`
let total_turn = 0;
let winner = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];

let tictactoe = new Array(9).fill("E");

function checkwinner(){
    for(let [index0,index1,index2] of winner){
        if(tictactoe[index0]!="E"&&tictactoe[index0]===tictactoe[index1]&&tictactoe[index1]===tictactoe[index2])
            return 1;
    }
    return 0;
}

const eventt=(event)=>{

    if(tictactoe[event.target.id]==="E")
    {
        total_turn++;
    if(turn===`O`){

        event.target.innerHTML = `O`
        tictactoe[event.target.id]=`O`

        if(checkwinner())
        {
            document.getElementById("winningMessage").innerHTML="winner is O";
            board[0].removeEventListener(`click`,eventt);
            return;
        }
        turn=`X`

    }
    else{
  
        event.target.innerHTML=`X`
        tictactoe[event.target.id]=`X`
  
        if(checkwinner())
        {
            document.getElementById("winningMessage").innerHTML="winner is X";
            board[0].removeEventListener(`click`,eventt);
            return;
        }
        turn=`O`
    }
}
if(total_turn==9){
        document.getElementById('winningMessage').innerText = "Match is Draw";
        board[0].removeEventListener(`click`,eventt)
    } 
}

const board=document.getElementsByClassName(`board`)
board[0].addEventListener(`click`,eventt)

const button= document.getElementById("restartButton")
button.addEventListener(`click`,()=>{
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((element)=>{
      element.innerHTML = "";
    })
    turn = "O";
    total_turn=0;

    tictactoe = new Array(9).fill("E");
    document.getElementById('winningMessage').innerText = "";

    board[0].addEventListener(`click`,eventt)
})

// if(turn===`O`){
//     const player=document.getElementById(`Play`)
//     player.style.transition="all";
//     player.style.transform=`scale(1.2)`
//     turn `X`
// // }
// else{
//     const playerr=document.getElementById(`playy`)
//     playerr.style.transition="all";
//     playerr.style.transform=`scale(1.2)`
//     turn `O`
// }