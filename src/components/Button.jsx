import React from "react";

function Button(props) {

    const styles = {
        backgroundColor: props.toggled ? "blue" : "white"
    }

    //console.log(props.toggled)

    return  (<button id={props.id} onClick={() => {props.handleClick(props.id)}} style={styles}>{props.answer}</button> ); // (<button onClick={() => {props.handleClick(props.id)}}>{props.answer}</button> );
}

export default Button;