import React from 'react';
import { render } from 'react-dom';
import { nanoid } from 'nanoid'
import Question from '../components/Question';
import { Divider } from 'semantic-ui-react';

function QuizPage() {

    const [allQuestions, setAllQuestions] = React.useState([])
    //const [question, setQuestion] = React.useState([])

    //const [questions, setQuestions] = allQuestions ? React.useState(createNewList()) : React.useState([])

    // const questionConverted = JSON.stringify(props.question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
        .then((response) => response.json())
        .then(data => { setAllQuestions(data.results)})  
    },[])

   // console.log(allQuestions)

    
    // React.useEffect(() => {
    //     if(allQuestions.length > 0){
    //         setQuestion(createList)
    //     }
    // }, [allQuestions])
        
    // function createList(){
    //     let obj = []
    //     let theList =  []
    //     console.log("createList() executed...")
    //     for(let i = 0 ; i < 5 ; i++){
    //         const questionConverted = JSON.stringify(allQuestions[i].question).replace(/&#039;/g , '\'').replace(/"/g, '').replace(/&quot;/g , '"')
    //         const questionList = [allQuestions[i].correct_answer, ...allQuestions[i].incorrect_answers]
    //         for(let j = 0 ; j < 4 ; j++){
    //             obj.push({
    //                 question: questionConverted,
    //                 id: nanoid(),
    //                 answer: questionList[j],
    //                 pressed: false,
    //                 correctAnswer: questionList[0] === questionList[j] ? true : false
    //             })
    //         }
    //         theList.push({obj})
    //         obj = []
    //     }
    //     return theList
    // }


    // function questionComponent(questionNumber){

    //     const styles = {
    //         backgroundColor:  question[questionNumber].obj[0].pressed ? "blue" : "white"
    //     }

    //     console.log(question[questionNumber].obj[0].pressed)

    //     return(
    //         <div>
    //             <h1 className='question'>{question[questionNumber].obj[0].question}</h1>
    //             <div className='buttons'>
    //                 <button id={question[questionNumber].obj[0].id} onClick={toggle} >{question[questionNumber].obj[0].answer}</button>
    //                 <button id={question[questionNumber].obj[1].id} onClick={toggle} >{question[questionNumber].obj[1].answer}</button>
    //                 <button id={question[questionNumber].obj[2].id} onClick={toggle} >{question[questionNumber].obj[2].answer}</button>
    //                 <button id={question[questionNumber].obj[3].id} onClick={toggle} >{question[questionNumber].obj[3].answer}</button>
    //             </div>
    //             <hr className='ruler'/>
    //         </div>
    //     )
    // }


    // function toggle(event){
      
    //     setQuestion(prevState => {
    //         prevState.map(x => {
    //             x.obj.map(y => {
    //                 //console.log(y)
    //                 y.id === event.target.id ? console.log(y.answer) : ""
    //                 if(y.id === event.target.id){
    //                     y.pressed = !y.pressed
    //                 }
                    
    //             })
    //         })
    //         //console.log(question[0].obj[0].pressed)
    //         return prevState
    //     })   
    // }

    //console.log(question)

    // return (
    //     <div>
    //         {question.length > 0 
    //         ? 
    //             <div>
    //                 {questionComponent(0)}
    //                 {questionComponent(1)}
    //                 {questionComponent(2)}
    //                 {questionComponent(3)}
    //                 {questionComponent(4)}
    //             </div>
    //         :
    //             <h1>LOADING...</h1>
    //         }
    //     </div>
    //   );

    return(
        <div>
            {allQuestions.length > 0 && (<Question ids={[0,1,2,3]} question={allQuestions[0]}/> )}
            {/* <Question ids={[4,5,6,7]} question={allQuestions[0]}/>
            <Question ids={[8,9,10,11]} question={allQuestions[0]}/>
            <Question ids={[12,13,14,15]} question={allQuestions[0]}/>
            <Question ids={[16,17,18,19]} question={allQuestions[0]}/>  */}
        </div>
    )
}

export default QuizPage;