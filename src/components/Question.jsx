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

    

    const allAnswers = [...props.incorrect_answers, props.correct_answer]

    var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    let random = []
    random = shuffle(numbers)
    const shuffledAnswers = [allAnswers[random[0]], allAnswers[random[1]], allAnswers[random[2]], allAnswers[random[3]]]
    
    const questionConverted = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

    //console.log(props)

    const [allButtons, setAllButtons] = React.useState([buttons])

    function toggle(id){
        console.log("Click from id: " + id)
        // setBtnState((prevState) => {
        //     return{...prevState.ids === id ? {...prevState, toogled: !prevState.toggled} : prevState}
        // })
    }

    // const [btnState, setBtnState] = React.useState({
    //     ids: [nanoid(), nanoid(), nanoid(), nanoid(),],  
    //     question: questionConverted,
    //     correctAnswer: props.correctAnswer,
    //     incorrectAnswers: [...props.incorrect_answers],  
    //     toggled: false
    // })


    const [btnState, setBtnState] = React.useState(
        buttons.map((element, index) => {
            return (
                <Button key={nanoid()} answer={shuffledAnswers[index]} id={element.id} handleClick={toggle} toggled={element.toggled}/>
            )
        })
    )

    console.log(allButtons)

    return (
        <div className='question'>
            <h1>{questionConverted}</h1>
            {<div className='buttons'>
                {btnState}
                {/* <Button answer={shuffledAnswers[0]} id={btnState.ids[0]} handleClick={toggle} toggled={btnState.toggled}/>
                <Button answer={shuffledAnswers[1]} id={btnState.ids[1]} handleClick={toggle} toggled={btnState.toggled}/>
                <Button answer={shuffledAnswers[2]} id={btnState.ids[2]} handleClick={toggle} toggled={btnState.toggled}/>
                <Button answer={shuffledAnswers[3]} id={btnState.ids[3]} handleClick={toggle} toggled={btnState.toggled}/> */}
            </div>}
            <hr className='ruler'/> 
        </div>
      );
}

export default Question;

//////////////////////////////////////////// WORKING CODE ABOVE //////////////////////////
