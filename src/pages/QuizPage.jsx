import React from 'react';
import { render } from 'react-dom';
import Question from '../components/Question';
//import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function QuizPage() {

    const [allQuestions, setAllQuestions] = React.useState([])
    const [question, setQuestion] = React.useState({
        quest: "",
        correctAnswer: "",
        falseAnswers: [],
        pushed: false
    })
    // const [questionsList, setQuestionsList] = React.useState({
    //     questionOne: "",
    //     questionTwo: "",
    //     questionThree: "",
    //     questionFour: "",
    //     questionFive: "",

    //     wrongAnswersOne: [],
    //     wrongAnswersTwo: [],
    //     wrongAnswersThree: [],
    //     wrongAnswersFour: [],
    //     wrongAnswersFive: [],

    //     rightAnswerOne: "",
    //     rightAnswerTwo: "",
    //     rightAnswerThree: "",
    //     rightAnswerFour: "",
    //     rightAnswerFive: "",
    // })

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => {setQuestion( (prevState) => {
            return{...prevState, 
                quest: data.results[0].question,
                correctAnswer: data.results[0].correct_answer,
                falseAnswers: data.results[0].incorrect_answers,
            }
        })
        setAllQuestions(() => {question})
        //console.log(data)
        })
        
    },[])

    //if(allQuestions){console.log(allQuestions)}

    //console.log(allQuestions)
    console.log(question)

    

    var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    const numbersOne = shuffle(numbers) 
    const numbersTwo = shuffle(numbers) 
    const numbersThree = shuffle(numbers) 
    const numbersFour = shuffle(numbers) 
    const numbersFive = shuffle(numbers) 

    // let questionOne = {}
    // let questionTwo = {}
    // let questionThree = {}
    // let questionFour = {}
    // let questionFive = {}

    // const fiveQuestions = {...questionsList}
    // if(questionsList){
    //     questionOne = {...fiveQuestions.results[0]}
    //     questionTwo = {...fiveQuestions.results[1]}
    //     questionThree = {...fiveQuestions.results[2]}
    //     questionFour = {...fiveQuestions.results[3]}
    //     questionFive = {...fiveQuestions.results[4]}
    //     //console.log(questionOne.question)
    // }

    return (
        <div>
            {allQuestions &&
                <Question 
                    {...allQuestions}
                /> 
            }
        </div>
      );
}

export default QuizPage;