// import React from 'react';
// import buttons from './buttons';
// import Button from './Button';
// import { nanoid } from 'nanoid'

// function Question(props) {

//     const [buttonState, setButtonState] = React.useState(buttons)

//     var numbers = [0, 1, 2, 3];

//     function shuffle(o) {
//         for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
//         return o;
//     };

//     var random = shuffle(numbers);
    
//     function toggle(id){
//         console.log("you clicked: " + id)
//         setButtonState((prevState) => {
//            return prevState.map(button => {
//             return button.id === id ? {...button, on: !button.on} : button
//            })
//         })
//     }
        
//     const allAnswers = [...props.incorrect_answers, props.correct_answer]
//     const question = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

//     const buttonElements = buttons.map((button, index) => (
//         <Button 
//         key={index} 
//         on={button.on}
//         id={nanoid()} 
//         answer={allAnswers[random[index]]} 
//         handleClick={toggle}
//         />
//     ))

//     return (
//         <div className='question'>
//             <h1>{question}</h1>
//             {<div className='buttons'>
//                 {buttonElements}
//             </div>}
//             <hr className='ruler'/> 
//         </div>
//       );
// }

// export default Question;

////////////////////////////////////////////// WORKING CODE ABOVE //////////////////////////


import React from 'react';
import buttons from './buttons';
import Button from './Button';
import { nanoid } from 'nanoid'

function Question(props) {

    const [buttonState, setButtonState] = React.useState(buttons)

    const allAnswers = [...props.incorrect_answers, props.correct_answer]
    const question = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

    var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    let random = []

    let buttonElements = {}

        random = shuffle(numbers)
        console.log("executed")

            buttonElements = buttons.map((button, index) => (
            <Button 
            key={index} 
            on={button.on}
            id={nanoid()} 
            answer={allAnswers[random[index]]} 
            handleClick={toggle}
            />
        ))

    
    function toggle(id){
        console.log("you clicked: " + id)
        // console.log("you clicked: " + id)
        // setButtonState((prevState) => {
        //    return prevState.map(button => {
        //     console.log(button)
        //     return button.id === id ? {...button, on: !button.on} : button
        //    })
        // })
    }
        


    

    return (
        <div className='question'>
            <h1>{question}</h1>
            {<div className='buttons'>
                {buttonElements}
            </div>}
            <hr className='ruler'/> 
        </div>
      );
}

export default Question;

//////////////////////////////////////////// WORKING CODE ABOVE //////////////////////////
