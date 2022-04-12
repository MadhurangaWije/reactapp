import React from 'react';

const QuestionAnswerPage = ({ question, handleAnswerSelection }) => {

    return (
        <div>
                <h2>{ question.questionText }</h2>
                <ul>
                    {question.answers.map((answer, index)=>{
                            return <li key={index} onClick={ ()=>handleAnswerSelection(index) } > {answer} </li>
                        })}
                </ul>
        </div>
    );
}

export default QuestionAnswerPage;