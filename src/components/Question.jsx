import React from 'react';
import Button from './Button';

function Question(props) {

    var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    var random = shuffle(numbers);

    function handleButtonClick(event){
        console.log(event)
    }

    const allAnswers = [...props.incorrect_answers, props.correct_answer]
    const question = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')
    
    // return (
    //     <div className='question'>
    //         <h1>{question}</h1>
    //         <div className='buttons'>
    //             <button onClick={handleButtonClick}>{allAnswers[random[0]]}</button>
    //             <button onClick={handleButtonClick}>{allAnswers[random[1]]}</button>
    //             <button>{allAnswers[random[2]]}</button>
    //             <button>{allAnswers[random[3]]}</button>            
    //         </div>
    //         <hr className='ruler'/> 
    //     </div>
    //   );

    return (
        <div className='question'>
            <h1>{question}</h1>
            <div className='buttons'>
                <Button />        
            </div>
            <hr className='ruler'/> 
        </div>
      );

}

export default Question;