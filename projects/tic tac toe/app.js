let you_score = document.querySelector("#you-score")
let comp_score = document.querySelector("#comp-score")
let usersc = 0;
let compsc = 0;
let newGame = document.querySelector("#newgame")
let choices = document.querySelectorAll(".choice");
let content = document.querySelector("#content");
// show who are winner
const playGame = (choiceofuser)=>{
    console.log("User selection",choiceofuser);
    let compCh = genCompChoice();
    console.log("computer choice ",compCh);
        
        if(choiceofuser === compCh){
            content.style.background = "#1e1e78";
            content.innerText = "It was draw"
        }else{
            let userCho = true;
            if(choiceofuser === "rock"){
                //scissor paper
             userCho = compCh === "paper"? false : true;
            }else if(choiceofuser === "paper"){
                   userCho = compCh === "scissor"? false : true
            }else if(choiceofuser === "scissor"){
                userCho = compCh === "rock"? false : true;
            }
            showWinner(userCho,choiceofuser,compCh);
        }
       
}
// showWinner
const showWinner = (winer,userwin,compwiner)=>{
    if(winer){
        usersc++
        you_score.innerText = usersc;
       content.innerText = `You are winner! your ${userwin} beats ${compwiner}`;
      content.style.background = "green"
    }else{
        compsc++
        comp_score.innerText = compsc
        comp_score
        console.log("you are loser")
        content.innerText = `You are looser! ${compwiner} beats your ${userwin}`;
        content.style.background = "red"
    }
}
// to generate random 
const genCompChoice = ()=>{
    let choi = ['rock','scissor','paper'];
    let compchoice = Math.floor(Math.random()*3)
    return choi[compchoice];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userChoice = choice.getAttribute("id");
playGame(userChoice)
    })
})

const newGa = ()=>{
   you_score.innerText = "0";
   comp_score.innerText = "0";
   usersc = 0;
   compsc = 0
   content.innerText = "Play your move";
   content.style.background = "#1e1e78"
}
newGame.addEventListener("click",newGa)
