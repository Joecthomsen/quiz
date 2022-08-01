import React from 'react';
//import Button from './Button';
import Button from './Button';
function Question(props) {

    const questionConverted = JSON.stringify(props.question.question)
    .replace(/&#039;/g , '\'').replace(/"/g, '')
    .replace(/&quot;/g , '"').replace(/&amp;/g, '&')

    return (
             <div>
                 <h1 className='question'>{questionConverted}</h1>
                 <div className='buttons'>
                    <Button buttonObject={props.buttons[0]} handleClick={props.handleClick}/>
                    <Button buttonObject={props.buttons[1]} handleClick={props.handleClick}/>
                    <Button buttonObject={props.buttons[2]} handleClick={props.handleClick}/>
                    <Button buttonObject={props.buttons[3]} handleClick={props.handleClick}/>
                 </div>
                 <hr className='ruler'/>
             </div>
        )
    }

export default Question;