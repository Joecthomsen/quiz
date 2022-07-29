import React from 'react';

function Questions(props) {

    var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    // let random = []
    // random = shuffle(numbers)
    //const shuffledAnswers = [allAnswers[random[0]], allAnswers[random[1]], allAnswers[random[2]], allAnswers[random[3]]]
    
    // const questionConverted = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

    const [questionList, setQuestionList] = React.useState(createNewList())

    function createNewList(){
        const myList = []
        for (let i = 0 ; i < 5 ; i++){
            let random = shuffle(numbers)
            const answerList = [props.questions[i].correct_answer, ...props.questions[i].incorrect_answers]
            const shuffledAnswers = [answerList[random[0]], answerList[random[1]], answerList[random[2]], answerList[random[3]]]
            console.log(shuffledAnswers)
            myList.push({
                question: props.questions[i].question,
                answerOne: answerList[0],
                answerTwo: answerList[1],
                answerThree: answerList[2],
                answerFour:answerList[3],
                toggled: false
            })
        }
        return myList
    }

    const questionElements = questionList.map(question => {
        return(
        <div>
            <h1 className='question'>{question.question}</h1>
            <div className='buttons'>   
                <button>{question.answerOne}</button>
                <button>{question.answerTwo}</button>
                <button>{question.answerThree}</button>
                <button>{question.answerFour}</button>
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