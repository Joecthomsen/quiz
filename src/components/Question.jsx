import React from 'react';

function Question(props) {

    const answerList = props.wrongAnswer
    console.log("props " + props.wrongAnswer)

    return (
        <div className='question'>
            <h1>{props.question}</h1>
            <div className='buttons'>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
                <button>Button 4</button>
            </div>
            <hr className='ruler'/>
        </div>
      );
}

export default Question;