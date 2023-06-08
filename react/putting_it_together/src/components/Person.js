import React, { useState } from 'react';
const PersonCard = (props) => {

    const {firstName, setFirstName } = props;
    const [lastName, setLastName ] = useState("");
    const [age, setAge ] = useState(props.age);
    const {hairColor, setHairColor} = props;
// we deconstructing so we can use them independently
// const [ rentals, setRentals ] = useState(props.portfolioStart);


    return(
        <div>
            <h1>{ firstName} { props.lastName }</h1>
            <p>Age:{ age }</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = { (event) => setAge(age + 1)}>Birthday Button for {props.firstName} </button>
        </div>
    );
}
export default PersonCard;