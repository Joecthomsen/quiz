import React from "react";

function Button(props) {

    //console.log(props)

    const styles = {
        backgroundColor: props.buttonObject.pressed ? "blue" : "white"
    }

    return  (
        <button id={props.buttonObject.id} onClick={props.handleClick} style={styles}>{props.buttonObject.text}</button> 
    );
}

export default Button;