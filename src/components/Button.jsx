import React from "react";

function Button(props) {

    const answerConverted = JSON.stringify(props.buttonObject.text)
    .replace(/&#039;/g , '\'').replace(/"/g, '')
    .replace(/&quot;/g , '"').replace(/&amp;/g, '&')
    .replace(/&eacute;/g, 'é')

    let styles = {}

    if(props.buttonObject.reveal && props.buttonObject.isCorrect && props.buttonObject.pressed){
        styles = {backgroundColor: "green"}
    }
    else if(props.buttonObject.reveal && !props.buttonObject.isCorrect && props.buttonObject.pressed){
        styles = {backgroundColor: "red"}
    }
    else if(props.buttonObject.reveal && props.buttonObject.isCorrect && !props.buttonObject.pressed){
        styles = {backgroundColor: "yellow"}
    }
    else if(props.buttonObject.pressed){
        styles = {backgroundColor: "#d6dbf2",
                  borderColor: "#d6dbf2"}
    }
    else{
        styles = {backgroundColor: "white"}
    }

    return  (
        <div className='buttons'>
            <button id={props.buttonObject.id} onClick={props.handleClick} style={styles}>{answerConverted}</button> 
        </div>
    );
}

export default Button;