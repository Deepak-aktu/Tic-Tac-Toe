// print k logic sochna pdega phale 
let turn='O';
let total_turn=0;




let winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]


let board_array=new Array(9).fill("E");

function checkWinner(){
    
for(let i=0;i<winner.length;i++){
    let arr=winner[i];
 
    
  if(board_array[arr[0]]!="E" && board_array[arr[0]]=== board_array[arr[1]] && board_array[arr[0]]=== board_array[arr[2]] && board_array[arr[1]]=== board_array[arr[2]]){
return 1 ;



  }

  
}

// for(let [index0,index1,index2] of winner){
//     if(board_array[index0])
// }


return 0;


}
const imgO=document.getElementById("imgO");
imgO.style.height="400px";

const imgX=document.getElementById("img-X");

function printer(event){
    





    const element=event.target;
    if(board_array[element.id]=="E"){
    total_turn++;
    
    if(turn==='O'){

    element.innerHTML="O";
    element.style.color="rgb(215, 49, 49)";
     imgO.style.height="350px";
    //  imgO.style.width="350px";
     imgX.style.height="400px";
    //  imgX.style.width="400px";

   
//   console.log(element);
  
    board_array[event.target.id]=element.innerHTML;
    if(checkWinner()){
        document.getElementById("winningMessage").innerHTML="winner is O";
        board.removeEventListener("click",printer);
        return ;
    
    }
    turn='X';
        }
        else{
    element.innerHTML="X";
    element.style.color="rgb(126, 235, 126)";
    imgO.style.height="400px";
    // imgO.style.width="400px";

     imgX.style.height="350px";
    //   imgX.style.width="350px"

    board_array[event.target.id]=element.innerHTML;
    if(checkWinner()){
        document.getElementById("winningMessage").innerHTML="winner is X";
        board.removeEventListener("click",printer);
    return;
    }
    turn='O';
        }
        if(total_turn==9){
            document.getElementById("winningMessage").innerHTML="Match is Draw";
        }
    }

        
    }

const board=document.querySelector(".board");
board.addEventListener("click",printer);




const Restart=document.getElementById("restartButton");
Restart.addEventListener("click",()=>{
 const cell=   document.getElementsByClassName("cell");
 Array.from(cell).forEach((value)=>{
value.innerHTML="";

 })

 turn="O";
 total_turn=0;
 board_array=new Array(9).fill("E");
 board.addEventListener("click",printer);
 document.getElementById("winningMessage").innerHTML="";

  imgO.style.height="400px";
//   imgO.style.width="400px";
  
     imgX.style.height="350px";
    //   imgX.style.width="350px"

})