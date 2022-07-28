import React from "react";

function Button(props) {

    const styles = {
        backgroundColor: props.on ? "blue" : "white"
    }

    return (<button onClick={() => {props.handleClick(props.id)}} style={styles}>{props.answer}</button> );
}

export default Button;