import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Hint: use the isNaN method (is Not a Number). 
// For example: isNaN(+"35") is false, isNaN(+"hello") is true
// I think we can use isNaN to conditionally check if our parameter being passed in is a string or an int.
// Im going to use 3 values that we can deconstruct here to use on this page 
const Params = (props) => {

    const {wordOrNum, fontColor, backgroundCcolor} = useParams(); //deconstructing is done

    return (
        <div>
            <Link to={"/home"}>Lets go home man</Link>
            {
                isNaN(wordOrNum)? // is this variable a number?
                <p style={
                    fontColor ? { color: fontColor, backgroundColor: backgroundCcolor }
                    : null }>This variable is a word: {wordOrNum}</p>
                    : //if this parameter isn't a word then....
                    <p> Show me da number! {wordOrNum}</p>
            }
        </div>
    )
}

export default Params;