import React from 'react';
import { nanoid } from 'nanoid'

function Questions(props) {

    var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
    // const questionConverted = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

    const [questionList, setQuestionList] = React.useState(createNewList())

    function createNewList(){
        const myObject = []
        const myList = []
              
        for(let i = 0 ; i < 4 ; i++){
            let random = shuffle(numbers)
            const answerList = [props.questions[i].correct_answer, ...props.questions[i].incorrect_answers]
            const shuffledAnswers = [answerList[random[0]], answerList[random[1]], answerList[random[2]], answerList[random[3]]]
            for(let j = 0 ; j < 4 ; j++){
                myObject.push({
                    id: nanoid(),
                    answer: shuffledAnswers[random[j]],
                    correct: shuffledAnswers[random[j]] === answerList[0] ? true : false 
                })
            }
            myList.push({myObject})
        }
        myList.push({
                        
        })
        return myList
    }

    console.log(props)


    function handleClick(event){
        questionList.map(question => {
            question
        })
        console.log(event.target.id)
    }


    const questionElements = questionList.map(question => {
        return(
        <div key={nanoid()}>
            <h1 className='question'>{props.questions[props.number - 1].question}</h1>
            <div className='buttons'>   
                {/* <button onClick={handleClick} id={nanoid()}>{question.answerOne}</button>
                <button onClick={handleClick} id={nanoid()} >{question.answerTwo}</button>
                <button onClick={handleClick} id={nanoid()}>{question.answerThree}</button>
                <button onClick={handleClick} id={nanoid()} >{question.answerFour}</button> */}
            </div>
            <hr className='ruler'/> 
        </div>
        )
    })
    return (
        <div>
            {questionElements}
        </div>
      );
}

export default Questions;