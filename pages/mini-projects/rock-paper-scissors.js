import { useState } from "react";
import styles from "../../styles/RockPaperScissors.module.css";
import RPSobject from "../../components/mini-projects/RPSobject";

const RockPaperScissors = () => {
  const choices = ["Rock", "Paper", "Scissors"];

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [win, setWin] = useState("");
  const [gamePlayed, setGamePlayed] = useState(false);

  const setChoices = (option) => {
    setPlayer1(option);
    const computer = choices[Math.floor(Math.random() * 3)];
    setPlayer2(computer);
  };

  const chooseWinner = () => {
    if (player1 && player2) {
      let winner =
        player1 === player2
          ? "tie"
          : (player1 === "Rock" && player2 === "Scissors") ||
            (player1 === "Paper" && player2 === "Rock") ||
            (player1 === "Scissors" && player2 === "Paper")
          ? "Player 1"
          : "Computer";
      setWin(winner);
      setGamePlayed(!gamePlayed);
    } else {
      alert("Please choose Rock, Paper or Scissors first!");
    }
  };

  const playAgain = () => {
    setGamePlayed(!gamePlayed);
    setWin("");
    setPlayer1("");
    setPlayer2("");
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Rock Paper Scissors</h1>

      {!gamePlayed && (
        <>
          <div className={styles.optionsContainer}>
            <RPSobject
              title="Rock"
              handleChoice={() => setChoices("Rock")}
              color={player1 === "Rock" ? "red" : "transparent"}
            />
            <RPSobject
              title="Paper"
              handleChoice={() => setChoices("Paper")}
              color={player1 === "Paper" ? "red" : "transparent"}
            />
            <RPSobject
              title="Scissors"
              handleChoice={() => setChoices("Scissors")}
              color={player1 === "Scissors" ? "red" : "transparent"}
            />
          </div>
        {player1 && 
          <button onClick={chooseWinner} className={styles.playBtn}>
            Play!
          </button>
        }

        </>
      )}

      {gamePlayed && (
        <>
          <h3 className={styles.subheading}>
            {win === "tie"
              ? "The game is a tie!"
              : win === "Computer"
              ? "The computer wins"
              : "You win!"}
          </h3>

          <div className={styles.optionsContainer}>

            <div className={styles.choiceDiv}>
              <p>Your Choice:</p>
              <RPSobject title={player1} />
            </div>
            
            <div className={styles.choiceDiv}>
              <p>Computer's Choice:</p>
              <RPSobject title={player2} />
            </div>
          
          </div>
          <button onClick={playAgain} className={styles.playBtn}>
            Play Again ?
          </button>
        </>
      )}
    </div>
  );
};

export default RockPaperScissors;
