import React from 'react';
import { render } from 'react-dom';
import Question from '../components/Question';
//import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function QuizPage() {

    const [allQuestions, setAllQuestions] = React.useState([])

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => { setAllQuestions(data.results) })
    },[])

    const getQuestion = (uniqeRandomNumber) => {
        return{
            question: allQuestions[uniqeRandomNumber].question,
            correctAnswer: allQuestions[uniqeRandomNumber].correct_answer,
            incorrectAnswer: allQuestions[uniqeRandomNumber].incorrect_answers,
        }
    }

    return (
        <div>
            {allQuestions.length > 0 
            ? 
                <div>
                    <Question 
                        {...allQuestions[0]}
                    />    
                    <Question 
                        {...allQuestions[1]}
                    />    
                    <Question 
                        {...allQuestions[2]}
                    />    
                    <Question 
                        {...allQuestions[3]}
                    />    
                    <Question 
                        {...allQuestions[4]}
                    />    
                </div>
            :
                <h1>LOADING...</h1>
            }
        </div>
      );
}

export default QuizPage;