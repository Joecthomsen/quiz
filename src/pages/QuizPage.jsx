import React from 'react';
import { render } from 'react-dom';
import Question from '../components/Question';
import Questions from '../components/Questions';
//import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function QuizPage() {

    const [allQuestions, setAllQuestions] = React.useState([])

    //const [questions, setQuestions] = allQuestions ? React.useState(createNewList()) : React.useState([])

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => { setAllQuestions(data.results) })

    },[])


    function createNewList(){
        const myList = []
        for (let i = 0 ; i < 5 ; i++){
            myList.push({
                question: allQuestions[i].question,
                correctAnswer: allQuestions[i].correct_answer,
                incorrectAnswer: allQuestions[i].incorrect_answers,
                toggled: false
            })
        }
        return myList
    }

    return (
        <div>
            {allQuestions.length > 0 
            ? 
                <div>
                    <Questions questions={allQuestions}/>
                    {/* <Question 
                        {...allQuestions[0]}
                    />    
                    <Question 
                        {...allQuestions[1]}
                    />     */}
                    {/* <Question 
                        {...allQuestions[2]}
                    />    
                    <Question 
                        {...allQuestions[3]}
                    />    
                    <Question 
                        {...allQuestions[4]}
                    />     */}
                </div>
            :
                <h1>LOADING...</h1>
            }
        </div>
      );
}

export default QuizPage;