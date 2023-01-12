import React, { useEffect, useState} from 'react';
import './quiz.css';


function Quiz({  question,setGameState,setQuestion,operandRange, setScore,score,noOfQuestion }) {

    const [data, setData] = useState([]);
    const [currentAns, setcurrentAns] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(1);

    useEffect(() => {
        let a = Math.floor(Math.random()*(operandRange+1));
        let b = Math.floor(Math.random()*(operandRange+1))
        let operator_sign=['+','-','*','/'];
        let operator_index = Math.floor(Math.random()*4);
        let sign = operator_sign[operator_index];
        let res = 0;
        let key = `${a} ${sign} ${b}`;
        setData(prev => [...prev , key]);

        switch (sign){
            case '+': res=a+b; break;
            case '-': res=a-b; break;
            case '*': res=a*b; break;
            default:  res=a/b;
            
        }
        let result = parseFloat(res.toFixed(2)).toString();
        if (result === 'Infinity' || result === 'Nan'){
            result = 'undefined';
        }
        setData(prev => [...prev , result]);

    },[question, operandRange])

      const changeHandler = (e) => {
        setcurrentAns(e.target.value);
    }
    
    const nextClickHandler = (e) => {
        if(currentAns === '') {
        return alert('Please put Answer');
        }
        data.push(currentAns)
        data.push(data[1] === data[2])
        if(data[3]){
            setScore(prev => prev+1);
        }
        
        setQuestion(prev => [...prev , data]);
        setData([]);
        setcurrentAns("");
        setCurrentQuestion(prev => prev + 1)
        if (question.length === noOfQuestion -1){
            setGameState("finished");
            
        }
    }


    return (
        <div className="quiz-screen">
                    <h3><span  className="total-question"> {`Question ${currentQuestion} of ${noOfQuestion}`}</span></h3>
                    <h1>{`Q.${currentQuestion}) ${data[0]}`}</h1>
                    <div className="form-group">
                        <label>Enter your Answer:
                        </label><br/>
                        <input className="form-control" id="user-answer" type="number" name="currentAnswer" value={currentAns} onChange={changeHandler} />
                    </div>
                    <button className="btn btn-secondary" onClick={nextClickHandler}>Next</button>
                    <p className="total-score">Total score: {score}</p>
        </div>
    )
}

export default Quiz;
