import React, { Component, useEffect, useState } from "react";
import { randomWord,movies } from "./RandomWord";
import "./Hangman.css";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";

let defaultProps = {
    maxWrong: 6,
    images: [image0, image1, image2, image3, image4, image5, image6],
};

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z',"-"];

let guessedWordArray;

function Hangman() {
    const [data, setData] = useState({
        noOfWrong: 0,
        guessed: new Set(),
        answer: randomWord(),
    })

    const[gameStatus,setGameStatus] = useState("")
    const[counter,setCounter] = useState(0)

    function guessedWord() {
        guessedWordArray = data.answer.split("").map(letter => (data.guessed.has(letter) ? letter : " __ "))
        return guessedWordArray
    }

    let gameOver = data.noOfWrong >= defaultProps.maxWrong || gameStatus==="You win!" || gameStatus==="You lose!";

    let isWinner = counter == data.answer.length
    

    function handleAplhabetClick(e) {
        let clickedLetter = e.target.innerText;
        if (data.answer.includes(clickedLetter)) {
            setData({
                ...data,
                guessed: data.guessed.add(clickedLetter),
            })
            setCounter(counter+1)
        }
        else {
            setData({
                ...data,
                noOfWrong: data.noOfWrong + 1
            })
        }

    }

    useEffect(()=>{
        if(gameOver || isWinner){
            if (isWinner) {
                setGameStatus("You win!")
            }
            else{
                setGameStatus("You lose!")
            }
        }
    },[guessedWordArray])

    function resetGame() {
        setData({
            noOfWrong: 0,
            guessed: new Set(),
            answer: randomWord(),
        })

        setGameStatus("")
        setCounter(0)
    }

    function sidebarOpen(){
        let sidebar = document.querySelector(".sidebar")
        sidebar.classList.toggle("active")
    }

    return (
        <div>
        <div onClick={sidebarOpen} className="burger">
            <div className='burger_line'></div>
            <div className='burger_line'></div>
            <div className='burger_line'></div>
        </div>

        <div className="sidebar">
            <h2>Instructions and guides</h2>
            <p>
            You have to guess the movie based on the hints given.
            You have 6 chances in total. 
            <br /><br />
            Guess the movie before you drain your chances, otherwise, you let the person die:(
            <br /><br />
            Multi word movies are seperated with a hyphen ("-")
            <br /><br />
            Enjoy!
            </p>
        </div>


            <h2>Hangman</h2>

            <img src={defaultProps.images[data.noOfWrong]} alt="image" /><br/>
            <h3>Guess the movie!</h3>
            <span>Hint: {movies[data.answer]}</span><br/>
            <p>Guesses left: {defaultProps.maxWrong - data.noOfWrong} of {defaultProps.maxWrong}</p>


            <div className="blanks">
            {!gameOver ? guessedWord() : data.answer}
            </div>

            <div>
                {alphabets.map(letter => {
                    return (<button
                        key={letter}
                        onClick={handleAplhabetClick}
                        disabled={data.guessed.has(letter) || gameOver}
                        className="letterbtn"
                    >
                    {letter}
                    </button>)
                })}
            </div>

            <div className="gameStatus">{gameStatus}</div>
            <button id="reset" onClick={resetGame}> Reset </button>
        </div>
    )
}

export default Hangman