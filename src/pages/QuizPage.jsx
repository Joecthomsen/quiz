import React from 'react';
import { render } from 'react-dom';
import { nanoid } from 'nanoid'
import Question from '../components/Question';
import { Divider } from 'semantic-ui-react';

function QuizPage() {

    const [allQuestions, setAllQuestions] = React.useState([])
    const [buttons, setButtons] = React.useState(
        [
            // {
            //     id: 0,
            //     text: "",
            //     pressed: false,
            //     isCorrect: false
            // },
            // {
            //     id: 1,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 2,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 3,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 4,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 5,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 6,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 7,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 8,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 9,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 10,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 11,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 12,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 13,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 14,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 15,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 16,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 17,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 18,
            //     text: "",
            //     pressed: false
            // },
            // {
            //     id: 19,
            //     text: "",
            //     pressed: false
            // }
        ]
    )

    //const [questions, setQuestions] = allQuestions ? React.useState(createNewList()) : React.useState([])

    // const questionConverted = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => { setAllQuestions(data.results)})
    },[])

    React.useEffect(() => {
        console.log("executed")
        if(allQuestions.length > 0){
            var arr = []
            for(let i = 0 ; i < 5 ; i++){
                for(let j = 0 ; j < 4 ; j++){
                    if(j === 0){
                        arr.push(
                            {
                                id: nanoid(),
                                pressed: false,
                                text: allQuestions[i].correct_answer,
                                isCorrect: true
                            }
                        )
                    }
                    else{
                        arr.push(
                            {
                                id: nanoid(),
                                pressed: false,
                                text: allQuestions[i].incorrect_answers[j-1],
                                isCorrect: false
                            }
                        )
                    }
                }
            }
            setButtons(arr)
        }
    }, [allQuestions])

    
    function toggle(event){
        setButtons(prevState => {
            return prevState.map(button => { ///button.id === event.target.id ? console.log(button) : console.log("meh")
                return button.id == event.target.id ? {...button, pressed: !button.pressed} : button
            }
            )
        })
        
        // buttonsQuestionFive = []
        // buttonsQuestionFour = []
        // buttonsQuestionThree = []
        // buttonsQuestionTwo = []
        // buttonsQuestionOne = []
    }

    console.log(buttons)

    let buttonsQuestionOne = buttons.slice(0,4)
    let buttonsQuestionTwo = buttons.slice(4,8)
    let buttonsQuestionThree = buttons.slice(8,12)
    let buttonsQuestionFour = buttons.slice(12,16)
    let buttonsQuestionFive = buttons.slice(16,20)

    // let buttonsQuestionOne =  [] //buttons.slice(0,4)
    // let buttonsQuestionTwo = [] //buttons.slice(4,8)
    // let buttonsQuestionThree = [] //buttons.slice(8,12)
    // let buttonsQuestionFour = [] // buttons.slice(12,16)
    // let buttonsQuestionFive = [] //buttons.slice(16,20)

    // buttonsQuestionOne.push(buttons.slice(0.4))
    // buttonsQuestionTwo.push(buttons.slice(4,8))
    // buttonsQuestionThree.push(buttons.slice(8,12))
    // buttonsQuestionFour.push(buttons.slice(12,16))
    // buttonsQuestionFive.push(buttons.slice(16,20))


    return(
        buttons.length > 0 &&
        <div>  
            <Question question={allQuestions[0]} buttons={buttonsQuestionOne} handleClick={toggle}/> 
            <Question question={allQuestions[1]} buttons={buttonsQuestionTwo} handleClick={toggle}/> 
            <Question question={allQuestions[2]} buttons={buttonsQuestionThree} handleClick={toggle}/> 
            <Question question={allQuestions[3]} buttons={buttonsQuestionFour} handleClick={toggle}/> 
            <Question question={allQuestions[4]} buttons={buttonsQuestionFive} handleClick={toggle}/> 
        </div>
    )
}

export default QuizPage;