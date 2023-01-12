import React from 'react';
import './endScreen.css'

function EndScreen({ question,setGameState,setQuestion, setScore, score }) {


    const onReset = () => {
        setQuestion([]);
        setGameState("playing");
        setScore(0);
    }

    const onEnd = () => {
        setGameState("menu");
        setScore(0);
    }
    
    return (
        <div className="content">
          <p><strong>Your total score: {score} of {question.length}</strong></p>
          <p><strong>Total correct answer: {Math.floor((score / question.length) * 100)}%</strong></p>
          <section className="modal-card-body content">
          <ul>
            {question.map((result, i) => (
              <li key={i} className="mb-6">
                <p style={{ backgroundColor: result[3] ? ' #42ba96' :'#da1c5c' }}>Question No. {i+1}: <strong>{result[0]}</strong><br/>
                Your answer: {result[2]}<br/>
                Correct answer: {result[1]}</p>
              </li>
            ))}
            </ul>
            </section>

          <button className="btn btn-reset" onClick={onReset}>Try again</button>
          <button className="btn btn-close" onClick={onEnd}>End</button>
        </div>
    )
}

export default EndScreen;
