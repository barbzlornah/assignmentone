import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border : '2px solid red'
    };
    return <input 
               type = 'text'
               inputStyle = {inputStyle}
               onChange = {props.changed}
               value = {props.currentName}/>;
};
export default userInput;