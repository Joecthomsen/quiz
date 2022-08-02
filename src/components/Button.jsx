import React from "react";

function Button(props) {

    // const styles = {
    //     backgroundColor: props.buttonObject.pressed ? "blue" : "white"
    // }

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
            <button id={props.buttonObject.id} onClick={props.handleClick} style={styles}>{props.buttonObject.text}</button> 
        </div>
    );
}

export default Button;