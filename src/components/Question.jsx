import React from 'react';

function Question(props) {

     var numbers = [0, 1, 2, 3];

    function shuffle(o) {
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    var random = shuffle(numbers);

    //[0].results[0].question
    

    const first = {...props}
    const second = {...first.question}
    const third = [second]
    //if(third[0].length > 0){
   // console.log(third[0].results)
    //}
    //console.log(props.results[0])



    return (
        <div className='question'>
            <h1>question</h1>
            <div className='buttons'>
                <button>bla</button>
                <button>bla</button>
                <button>bla</button>
                <button>bla</button>            
            </div>
            <hr className='ruler'/> 
        </div>
      );
}

export default Question;