let Userscore=0;
let Compscore=0;
let Drawscore=0;
let total=0;
const choices =document.querySelectorAll(".choice");

choices.forEach((choice) => {
   
    console.log(choice);
    choice.addEventListener("click",()=>{
        total++;
        const userchoice =choice
        .getAttribute("id");
       playGame(userchoice);
        
         attempts.innerText=total;
    })
});

const getCompChoice=()=>{
            let options=["rock","paper","scissors"];
            const randIdx=Math.floor(Math.random()*3);
            return options[randIdx];
        }

        const winner=(userwin,compchoice)=>{
            if(userwin){
                console.log("you win");
                    Userscore++;
                    msg.innerText="you won.computer selected "+compchoice;
                    msg.style.backgroundColor="rgb(65, 201, 2)";
                    userscore.innerText=Userscore;
                }
            else{Compscore++;
                console.log("you lose");
                msg.innerText="you lose.computer selected "+compchoice;
                msg.style.backgroundColor=" rgb(201, 88, 2)";
                compscore.innerText=Compscore;
            }
        }

        const playGame=(userchoice)=>{
            console.log("userchoice=",userchoice);
            const compchoice=getCompChoice();
            console.log("compchoice=",compchoice);
            if(userchoice===compchoice){
                Drawscore++;
                console.log("game was drawn");
                msg.style.backgroundColor="rgb(201, 171, 2)";
                msg.innerText="game was drawn.computer chose "+compchoice;
                drawscore.innerText=Drawscore;
            }
            else{
                let userwin=false;
            if(compchoice==="rock"){
                userwin=userchoice==="paper"?true:false;
            }
            else if(compchoice==="paper"){
                userwin=userchoice==="rock"?false:true;
            }
            else if(compchoice==="scissors"){
                userwin=userchoice==="rock"?true:false;
            }
            winner(userwin,compchoice);
            }
        }
const rst=document.querySelector("#rst");
rst.addEventListener("click",()=>{
    Userscore=0;
    userscore.innerText=Userscore;
    Drawscore=0;
    drawscore.innerText=Drawscore;
    Compscore=0;
    compscore.innerText=Compscore;
    total=0;
    attempts.innerText=total;
    msg.innerText="play your move";
    msg.style.backgroundColor="rgb(201, 171, 2)";
    console.log("scores are reset")
})