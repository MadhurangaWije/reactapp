import React from 'react';

export default function ResultsPage({score, replay}) {
    return (
        <div>
                    <h1>Game Over</h1>
                    <h3>You Scored : {score}</h3>
                    <br/>
                    <button onClick={replay}>Replay</button>
        </div>
    );
}