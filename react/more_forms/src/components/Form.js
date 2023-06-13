import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasbeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstName: firstName, 
            lastName: lastName, 
            email: email,
            password: password,
            confirmPassword: confirmPassword 
        };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true)
    };
    return(
        <div style={{margin:"0px auto", padding:"0px auto", boxSizing:"border-box"}}>
            <form onSubmit={ createUser } style={{border:"2px solid black", borderRadius:"70%"}}>
                { hasbeenSubmitted ?
                <h2>Thank you for your personal details! </h2>:
                <h2>Please Submit the form credentials</h2>
                }
                <div>
                    <label>FirstName: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p style={{color:"red"}}>First name must be at least 2 characters</p>
                ) : null }
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (
                <p style={{color:"red"}}>Last name must be at least 2 characters</p>
                ) : null}
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {email.length < 5 ? (
                    <p style={{color:"red"}}>Email must be at least 5 characters</p>
                ) : null}
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {password.length < 8 ? (
                    <p style={{color:"red"}}>Password must be at least 8 characters</p> 
                ) : null}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword } onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                {password !== confirmPassword ? (<p style={{color:"red"}}>Passwords must match one another</p>) : null}
                <input type="submit" value="Create User"/>
                {/* two-way data binding */}
            </form>
            <hr />
            <div>
            <h2 style={{color:"rebeccaPurple"}}>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>

    );
};
    
export default Form;