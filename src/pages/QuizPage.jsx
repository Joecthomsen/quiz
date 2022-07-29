import React from 'react';
import { render } from 'react-dom';
import { nanoid } from 'nanoid'

function QuizPage() {

    const [allQuestions, setAllQuestions] = React.useState([])
    const [question, setQuestion] = React.useState([])

    //const [questions, setQuestions] = allQuestions ? React.useState(createNewList()) : React.useState([])

    // const questionConverted = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => { setAllQuestions(data.results)})
        
    },[])

    React.useEffect(() => {
        if(allQuestions.length > 0){
            setQuestion(createList)
        }
    }, [allQuestions])
        
    function createList(){
        let obj = []
        let theList =  []
        for(let i = 0 ; i < 5 ; i++){
            const questionConverted = JSON.stringify(allQuestions[i].question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')
            const questionList = [allQuestions[i].correct_answer, ...allQuestions[i].incorrect_answers]
            for(let j = 0 ; j < 4 ; j++){
                obj.push({
                    question: questionConverted,
                    id: nanoid(),
                    answer: questionList[j],
                    pressed: false,
                    correctAnswer: questionList[0] === questionList[j] ? true : false
                })
            }
            theList.push({obj})
            obj = []
        }
        return theList
    }

    function questionComponent(questionNumber){
        return(
            <div>
                <h1 className='question'>{question[questionNumber].obj[0].question}</h1>
                <div className='buttons'>
                    <button>{question[questionNumber].obj[0].answer}</button>
                    <button>{question[questionNumber].obj[1].answer}</button>
                    <button>{question[questionNumber].obj[2].answer}</button>
                    <button>{question[questionNumber].obj[3].answer}</button>
                </div>
                <hr className='ruler'/>
            </div>
        )
    }

    if(question.length > 0){
        console.log(question[0])
    }

    return (
        <div>
            {question.length > 0 
            ? 
                <div>
                    {questionComponent(0)}
                    {questionComponent(1)}
                    {questionComponent(2)}
                    {questionComponent(3)}
                    {questionComponent(4)}
                </div>
            :
                <h1>LOADING...</h1>
            }
        </div>
      );
}

export default QuizPage;