import React from 'react';
//import Button from './Button';
import Button from './Button';
function Question(props) {

    const questionConverted = JSON.stringify(props.question.question)
    .replace(/&#039;/g , '\'').replace(/"/g, '')
    .replace(/&quot;/g , '"').replace(/&amp;/g, '&')

    console.log(props)
  
    return (
             <div>
                 <h1 className='question'>{questionConverted}</h1>
                 <div className='buttons'>
                    <Button buttonObject={props.buttons[props.buttons[0].randomNumber]} handleClick={props.handleClick}/>
                    <Button buttonObject={props.buttons[props.buttons[1].randomNumber]} handleClick={props.handleClick}/>
                    <Button buttonObject={props.buttons[props.buttons[2].randomNumber]} handleClick={props.handleClick}/>
                    <Button buttonObject={props.buttons[props.buttons[3].randomNumber]} handleClick={props.handleClick}/>
                 </div>
                 <hr className='ruler'/>
             </div>
        )
    }

export default Question;