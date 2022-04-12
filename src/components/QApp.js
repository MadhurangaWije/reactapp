import React, { useState } from "react";
import QuestionAnswerPage from "./QuestionAnswerPage";
import ResultsPage from "./ResultsPage";

export default function QApp(){

    const data = [
        {
            questionText: 'Whats the Capital of Sri Lanka',
            answers: [
                'Colombo',
                'Sri Jayawardanapura',
                'Kandy',
                'Panadura',
            ],
            correctAnswerIndex: 1
        },
        {
            questionText: 'When did sri lanka recieved the independance',
            answers: [
                '1948',
                '1950',
                '1890',
                '2000',
            ],
            correctAnswerIndex: 0
        },
        {
            questionText: 'Whats the ABC',
            answers: [
                'A',
                'B',
                'C',
                'D',
            ],
            correctAnswerIndex: 3
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);  // Array Destructuring [ , ]
    const [ score, setScore ] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    //event handler
    const handleAnswerSelection = (selectedAnswerIndex)=>{
        if (data[currentIndex].correctAnswerIndex === selectedAnswerIndex ) {
            setScore(score+10);
        }else {
            setScore(score-2);
        }
        if(currentIndex < data.length-1){
            setCurrentIndex(currentIndex+1);
        }else {
            setGameOver(true);
        }
        
    }

    const replay = ()=>{
        setScore(0);
        setCurrentIndex(0);
        setGameOver(false);
    }

    return ( // JSX
        <div>
            <h1>Q App</h1>

            {
                !gameOver ? <QuestionAnswerPage question={data[currentIndex]}  handleAnswerSelection={handleAnswerSelection} />
                 : <ResultsPage score={score} replay={replay} />
            }
            
        </div>
    );
}