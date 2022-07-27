import React from 'react';

function Question(props) {

    var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    var random = shuffle(numbers);

    const answerList = {...props.wrongAnswer}

    let answerFullList = [answerList[0], answerList[1], answerList[2], props.rightAnswer]

    // function createFiveQuestions(){
    //     var numbers = [0, 1, 2, 3];
    //     function shuffle(o) {
    //         for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    //         return o;
    //     };
    //     return(

    //     )
    // }

    console.log(props.questions)

    return (
        <div className='question'>
            <h1>{props.question}</h1>
            <div className='buttons'>
                <button>{answerFullList[random[0]]}</button>
                <button>{answerFullList[random[1]]}</button>
                <button>{answerFullList[random[2]]}</button>
                <button>{answerFullList[random[3]]}</button>
            </div>
            <hr className='ruler'/>
        </div>
      );
}

export default Question;