import React from 'react';
import { nanoid } from 'nanoid'
import Question from '../components/Question';
import { ThreeDots } from  'react-loader-spinner'

function QuizPage() {

    const [allQuestions, setAllQuestions] = React.useState([])
    const [buttons, setButtons] = React.useState([])

    let counter = 0


    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple')
        .then((response) => response.json())
        .then(data => { setAllQuestions(data.results)})
          
        
    },[])

    React.useEffect(() => {
        if(allQuestions.length > 0){
            var arr = []
            var numbers = [0, 1, 2, 3];

            function shuffle(o) {
                for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            };
            
            for(let i = 0 ; i < 5 ; i++){
                let randomNumbers = shuffle(numbers)
                for(let j = 0 ; j < 4 ; j++){
                    if(j === 0){
                        arr.push(
                            {
                                id: nanoid(),
                                pressed: false,
                                text: allQuestions[i].correct_answer,
                                isCorrect: true,
                                reveal: false,
                                randomNumber: randomNumbers[j]
                            }
                        )
                    }
                    else{
                        arr.push(
                            {
                                id: nanoid(),
                                pressed: false,
                                text: allQuestions[i].incorrect_answers[j-1],
                                isCorrect: false,
                                reveal: false,
                                randomNumber: randomNumbers[j]
                            }
                        )
                    }
                }
            }
            setButtons(arr)
        }
    }, [allQuestions])

    
    function toggle(event){
        if(!buttons[0].reveal){
            setButtons(prevState => {
                return prevState.map(button => {
                    return button.id == event.target.id ? {...button, pressed: !button.pressed} : button
                }
                )
            })
        }
    }

    function getNewQuestions(){
        //counter += 1
        setAllQuestions([])
        setButtons([])
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => { setAllQuestions(data.results)})
    }

    function checkAnswers(){
        if(!buttons[0].reveal){
            setButtons(prevState => {
                return prevState.map(button => {
                    return {...button, reveal: !button.reveal}
                })
            })
        }
        else{
            getNewQuestions()
        }
    }

    let buttonsQuestionOne = buttons.slice(0,4)
    let buttonsQuestionTwo = buttons.slice(4,8)
    let buttonsQuestionThree = buttons.slice(8,12)
    let buttonsQuestionFour = buttons.slice(12,16)
    let buttonsQuestionFive = buttons.slice(16,20)

    return(
        buttons.length > 0 ?
        <div className='quizPage'>  
            <div className="blob-up"/>
                <Question question={allQuestions[0]} buttons={buttonsQuestionOne} handleClick={toggle}/> 
                <Question question={allQuestions[1]} buttons={buttonsQuestionTwo} handleClick={toggle}/> 
                <Question question={allQuestions[2]} buttons={buttonsQuestionThree} handleClick={toggle}/> 
                <Question question={allQuestions[3]} buttons={buttonsQuestionFour} handleClick={toggle}/> 
                <Question question={allQuestions[4]} buttons={buttonsQuestionFive} handleClick={toggle}/>
                <button onClick={checkAnswers} className='submitButton'>{!buttons[0].reveal ? "Check answers!" : "Try again"}</button> 
            <div className="blob-down"/>
        </div>
        :
        <div className='loading'>
            <div className="blob-up"/>
                <ThreeDots color="#00BFFF" height={80} width={80} />
            <div className="blob-down"/>
        </div>
    )
}

export default QuizPage;