import React, { useReducer } from 'react';
// Note how now our initialState has keys nested 2 levels deep
const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null 
    }
}
// REMEMBER the action will look like: {type: "DO_SOMETHING", payload: "some_value"}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRSTNAME_VALUE":
            return {
                ...state,
                firstName: {
                    // we have to add this or it would wipe out any existing value for state.email.error
                    ...state.firstName,  
                    value: action.payload
                }
            }
        case "SET_LASTNAME_VALUE":
            return {
                ...state,
                lastName: {
                    ...state.lastName.value,
                    error: action.payload
                }
            }
        case "SET_EMAIL_VALUE":
            return {
                ...state, 
                email: {
                    ...state.email.value,
                    error: action.payload
                }
            }
        default:
            return state;
    }
}

const form () => {
    //  We call the useReducer function. and feed it the reducer function and initialState.
    //  This function will return an array with a state variable ("state") which will hold 
    //  the CURRENT value of our app's state, and the dispatch fn ("dispatch") which
    //  will dispatch our action to our reducer.
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleFirstNameChange = (e) => {
        // if length of input value (e.target.value) is less than 5, dispatch action to set email error
        if (e.target.value.length < 2) { 
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: "First Name must be at least 2 characters."
            });
        } else {
        // if length of input value is >= 2, the else block will be hit and we will dispatch action to set email error   
        // back to an empty string
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: ""
            });
        }
        // Regardless of what the length of the input is, we still need to dispatch an action to update 
        // state.email.value with current value of email input
            dispatch({
                type: "SET_FIRSTNAME_VALUE", 
                payload: e.target.value 
            });
        }
    const handleLastNamechange = (e) => {
        // if length of input value (e.target.value) is less than 8, dispatch action to set password error
        if (e.target.value.length < 2) { 
            dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: "Lastname must be at least 2 characters"
            });
        } else {
        // if length of input value is >= 8, the else block will be hit and we will dispatch action to set password 
        // value back to empty string
            dispatch({
                type: "SET_LASTNAME_ERROR", 
                payload: ""
            });
        }
        // Regardless of what the length of input is, we still need to dispatch an action to update 
        // state.password.value with current value of password input
        dispatch({
            type: "SET_LASTNAME_VALUE",
            payload: e.target.value
        })
    }
    const handleEmailChange = (e) => {
        if (e.target.value < 5 ) {
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Email must be at least 5 characters long, please try again"
            });
        } else {
            dispatch({
            type: "SET_EMAIL_ERROR",
            payload: ""
        });
        }
            dispatch({
                type: "SET_EMAIL_VALUE",
                payload: e.target.value
            })
        }

    return (
        <div>
            <h1>{JSON.stringify.state}</h1> {/* display current value of state */}
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    id="firstName"
                    value={state.firstName.value}
                    onChange={(e)=> handleFirstNameChange}
                    />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input
                    id="lastName"
                    value={state.lastName.value}
                    onChange={(e)=> handleLastNamechange}
                    />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input
                    id="email"
                    value={state.email.value}
                    onChange={(e)=> handleEmailChange}
                    />
            </div>
            </form>
        </div>
    );
}

