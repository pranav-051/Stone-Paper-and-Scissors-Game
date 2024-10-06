const choices = document.querySelectorAll(".choice");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p5 = document.querySelector("#p5");
let uCount = document.querySelector("#userCount"); 
let cCount = document.querySelector("#compCount");
let userCount = 0; 
let compCount = 0;

const playGame = (userChoice) => {
    console.log("choice is clicked", userChoice);
    //computer choice
    const compChoice = generateCompChoice()

    console.log("--------comp:",compChoice,"user:",userChoice);
    winnerCheck(userChoice, compChoice); 
}; 

const generateCompChoice = () => {
    const arrChoices = ['Stone', 'Paper', 'Scissor']; 
    let randomChoice = Math.floor(Math.random()*3);
    console.log("Computer genereted choice ",arrChoices[randomChoice]); 
    return arrChoices[randomChoice];
}; 

const winnerCheck = (userChoice, compChoice) => {
    if ((userChoice==='Stone' && compChoice==="Stone") || (userChoice==='Paper' && compChoice==="Paper") || (userChoice==='Scissor' && compChoice==="Scissor") ){
        p2.innerText = `You have choosen ${userChoice}`;
        p3.innerText = `Computer have choosen ${compChoice}`;
        p5.innerText = "Match Draw!";
    }
     else if (userChoice==='Stone' && compChoice==='Paper'){
        p2.innerText = `You have choosen ${userChoice}`; 
        p3.innerText = `Computer have choosen ${compChoice}`; 
        p5.innerText = "Computer Win";
        compCount++;
        cCount.innerText=`Computer Count: ${compCount}`;
    }
    else if (userChoice==='Stone' && compChoice==='Scissor'){
        p2.innerText = `You have choosen ${userChoice}`; 
        p3.innerText = `Computer have choosen ${compChoice}`; 
        p5.innerHTML = "<p id='alert'>Congratulation you are Winner</p>"
        //p5.innerText = "Congratulation you are Winner!";
        userCount++;
        uCount.innerText=`User Count: ${userCount}`;
    }

    else if (userChoice==='Paper' && compChoice==='Stone'){
        p2.innerText = `You have choosen ${userChoice}`; 
        p3.innerText = `Computer have choosen ${compChoice}`; 
        p5.innerHTML = "<p id='alert'>Congratulation you are Winner</p>"
        //p5.innerText = "Congratulation you are Winner";
        userCount++;
        uCount.innerText=`User Count: ${userCount}`;
    }
    else if (userChoice==='Paper' && compChoice==='Scissor'){
        p2.innerText = `You have choosen ${userChoice}`; 
        p3.innerText = `Computer have choosen ${compChoice}`; 
        p5.innerText = "Computer Win"
        compCount++;
        cCount.innerText=`Computer Count: ${compCount}`;
    }
    else if (userChoice==='Scissor' && compChoice==='Stone'){
        p2.innerText = `You have choosen ${userChoice}`; 
        p3.innerText = `Computer have choosen ${compChoice}`; 
        p5.innerText = "Computer Win"
        compCount++;
        cCount.innerText=`Computer Count: ${compCount}`;
    }
    else if (userChoice==='Scissor' && compChoice==='Paper'){
        p2.innerText = `You have choosen ${userChoice}`; 
        p3.innerText = `Computer have choosen ${compChoice}`; 
        p5.innerHTML = "<p id='alert'>Congratulation you are Winner</p>"
       // p5.innerText = "Congratulation you are Winner"
        userCount++;
        uCount.innerText=`User Count: ${userCount}`;
    }else{
        console.log("Something wrong happened!");
    }
}

choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const newGamebtn = document.querySelector("#newGame"); 
newGamebtn.addEventListener("click", ()=>{
    userChoice = "XXXX"; 
    compChoice = "XXXXX"; 
    p2.innerText = `You have choosen ${userChoice}`; 
    p3.innerText = `Computer have choosen ${compChoice}`; 
    p5.innerText = "XXXX is winner!!";
    userCount = 0;
    compCount = 0;
    uCount.innerText=`User Count: ${userCount}`;
    cCount.innerText=`Computer Count: ${compCount}`;

})