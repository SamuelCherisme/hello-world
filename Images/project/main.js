const player = {
  choice: null,
  score: 0
}

const computer = {
  choice: null,
  score: 0
}
const gameOptions = ["lapis", "papyrus", "scalpellus"];
document.querySelector("body").addEventListener('load', typeWriter);

  function takePlayerChoice(choice){
    player.choice = choice;
    computer.choice = gameOptions[Math.floor(Math.random() * 3)];
    compareChoices(player.choice, computer.choice);
  }

  function compareChoices(playerChoice, computerChoice){
    let finalOutcome = "";
    const resultMessage = `The computer chose ${computerChoice.toUpperCase()} and you chose ${playerChoice.toUpperCase()}.`;
    const computerWinBundle = ["The computer won!", resultMessage,  "error", "#f44336", "Let's try again."];
    const playerWinBundle = ["You won!", resultMessage,  "success", "#4CAF50", "Woohoo!", "#odometerPlayer"];
    const tieMessageBundle = ["It was a tie!", `You both chose ${playerChoice.toUpperCase()}.`,  "warning", "#f2c480", "Let's try again."];
    
    if (playerChoice === computerChoice){
      finalOutcome = tieMessageBundle;
      computer.score += 1;
      player.score += 1;
    }
    else if (playerChoice === gameOptions[0]){
      if (computerChoice === gameOptions[1]){
        finalOutcome = computerWinBundle;
        computer.score += 1;
      }
      else if (computerChoice === gameOptions[2]){
        finalOutcome = playerWinBundle;
        player.score += 1;
      }
    }
    else if (playerChoice === gameOptions[1]){
      if (computerChoice === gameOptions[0]){
        finalOutcome = playerWinBundle;
        player.score += 1;
      }
      else if (computerChoice === gameOptions[2]){
       finalOutcome = computerWinBundle;
       computer.score += 1;
      }
    }
    else if (playerChoice === gameOptions[2]){
      if (computerChoice === gameOptions[0]){
        finalOutcome = computerWinBundle;
        computer.score += 1;
      }
      else if (computerChoice === gameOptions[1]){
        finalOutcome = playerWinBundle;
        player.score += 1;
      }
    }
    printResultsToScreen(finalOutcome);
  }
  
  function printResultsToScreen(outcomeMessage){
    sendAlert(outcomeMessage[0], outcomeMessage[1], outcomeMessage[2], outcomeMessage[3], outcomeMessage[4]);
    updateOdometers();
    console.log("Results successfully printed in pop-up.");
  }  

  function updateOdometers(){
      setTimeout(function(){
        document.getElementById("odometerComputer").innerHTML = computer.score;
        document.getElementById("odometerPlayer").innerHTML = player.score;
    }, 1000);
    }
  