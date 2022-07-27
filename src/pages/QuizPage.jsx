import React from 'react';
import { render } from 'react-dom';
import Question from '../components/Question';
//import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function QuizPage() {

    const [questionsList, setQuestionsList] = React.useState(null)
    const [answerButton, setAnswerButton] = React.useState({
        question: [],
        rightAnswer: [],
        wrongAnswer: []
    })

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => {setQuestionsList(data)
        })
    },[])

    return (
        <div>
            {questionsList &&
                <Question 
                    // question={questionsList.results[0].question}
                    // rightAnswer={questionsList.results[0].correct_answer}
                    // wrongAnswer={questionsList.results[0].incorrect_answers}
                    questions={questionsList.results}
                    // rightAnswer={answerButton.rightAnswer[0]}
                    // wrongAnswer={answerButton.wrongAnswer[0]}
                /> 
            }
            
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
      );
}

export default QuizPage;