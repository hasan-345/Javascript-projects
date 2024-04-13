let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newgame");
let container = document.querySelector(".winer")
let winner = document.querySelector("#winner");
let turnO = true; //playerX, playerO

 let count = 0;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],         
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


    boxes.forEach((box)=>{
      box.addEventListener("click",()=>{
          if(turnO){
            box.innerText = "X"
            turnO= false;
          }else{
            box.innerText = "O";
            turnO = true;
          }
        box.disabled = true;
        count++;
  
        let isWinner =  checkWinner();
          if(count === 9 && !isWinner){
            gameDraw()
          }
      })
      
  })
  
  


const gameDraw = ()=>{
  winner.innerText = "Game is over";
  container.classList.remove("hide");
}
const resetFunction = ()=>{
  turnO = true;
  for(let clear of boxes){
    clear.innerText = "";
  }
  container.classList.add("hide")
  for(let bx of boxes){
    bx.disabled = false;
  }
   boxes.forEach((rem)=>{
     rem.classList.remove("design")
   })
  count = 0
}

const showWinner = (win)=>{
  winner.innerText = `Winner  \" ${win} \"`
  container.classList.remove("hide");
   
    for(let bx of boxes){
      bx.disabled = true;
    }
    count = 0;
}
const checkWinner = () => {
    
    for(let pattern of winPatterns){ //patterns became array form
      let posVal1 = boxes[pattern[0]].innerText;
      let posVal2 = boxes[pattern[1]].innerText;
      let posVal3 = boxes[pattern[2]].innerText;
      if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if(posVal1 === posVal2 && posVal2 === posVal3){
           showWinner(posVal1); 
          boxes[pattern[0]].classList.add("design")
          boxes[pattern[1]].classList.add("design")
          boxes[pattern[2]].classList.add("design")
           return true;
          }
      }
      // NoWinner();
    }
   
   
}
resetBtn.addEventListener("click",resetFunction);
newGameBtn.addEventListener("click",resetFunction);
