import React, { useState } from 'react';
const PersonCard = (props) => {

    const {firstName, setFirstName } = props;
    const [lastName, setLastName ] = useState("");
    const [age, setAge ] = useState(props.age);
    const {hairColor, setHairColor} = props;
// we deconstructing so we can use them independently
// const [ rentals, setRentals ] = useState(props.portfolioStart);

    const handleClick = () => {
        setAge(age + 1);
    }
    return(
        <div>
            <h1>{ firstName} { props.lastName }</h1>
            <p>Age:{ age }</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = { handleClick }>Birthday Button for {props.firstName} </button>
        </div>
    );
}
export default PersonCard;