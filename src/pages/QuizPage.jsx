import React from 'react';
import { render } from 'react-dom';
import Question from '../components/Question';

function QuizPage() {

    const [questions, setQuestions] = React.useState([])
     

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => {
            setQuestions(data) 
            console.log(data.results[2].question)
            console.log(data)
        })
    },[])

    Object.keys(questions).length > 0 ? console.log("Good to go") : console.log("Empty")

    return (
        <div>
            {Object.keys(questions).length > 0 ?
             <Question 
             question={questions.results[0].question}
             rightAnswer={questions.results[0].correct_answer}
             wrongAnswer={questions.results[0].incorrect_answers}
           /> : <Question />}
            
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
      );
}

export default QuizPage;