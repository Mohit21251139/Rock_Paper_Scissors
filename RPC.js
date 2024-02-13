let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genecompchoice = () =>{
    //rock paper scissors
    const option = ["rock","paper","scissors"];
    const Index = Math.floor(Math.random() * 3);
    return option[Index];
}

const drawGame = () => {

    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userwin,compchoice,userChoice) =>{
   if (userwin){
      userScore++;
      userScorePara.innerText = userScore;
     
       msg.innerText = `You Win. Your ${userChoice} beats ${compchoice}`;
       msg.style.backgroundColor = "green";
   }
   else {
    compScore++;
    compScorePara.innerText = compScore;
    
    msg.innerText = `You Lose. ${compchoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
}

const playGame = (userChoice) =>{
   // console.log ("user choice = ",userChoice);
    //Generate compchoice
    const compchoice = genecompchoice();
   //console.log("comp choice = " ,compchoice);
    if (userChoice === compchoice){
        //Draw game
        drawGame();
    }
    else {
        let userwin = true;
        if (userChoice === "rock"){
            //paper scissors
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userChoice  === "paper"){
            userwin = compchoice === "rock" ? true : false;
        }
        else {
           userwin = compchoice === "rock" ? false : true;
        }
        showWinner (userwin,compchoice,userChoice);
    }

};

choices.forEach((choice) =>{
        choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})