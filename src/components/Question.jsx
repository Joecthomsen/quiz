import React from 'react';

function Question(props) {
    console.log(props)

    return (
             <div>
                 <h1 className='question'>{props.question.question}</h1>
                 <div className='buttons'>
                     <button id={props.ids[0]} >{props.question.correct_answer}</button>
                     <button id={props.ids[1]} >{props.question.incorrect_answers[0]}</button>
                     <button id={props.ids[2]} >{props.question.incorrect_answers[0]}</button>
                     <button id={props.ids[3]} >{props.question.incorrect_answers[0]}</button>
                 </div>
                 <hr className='ruler'/>
             </div>
        )
    }

export default Question;