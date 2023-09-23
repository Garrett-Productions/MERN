import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const CreateOne = ({petList, setPetList}) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] =useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    // in some apps people capture errors in state as an object and some capture them in state in an array. But I feel im displaying them the same in each manner

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet', {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
        .then(res=> {
            console.log("Res data here", res.data)
            setName("");
            setType("");
            setDescription("");
            setSkillOne("");
            setSkillTwo("");
            setSkillThree("");
            setPetList([...petList, res.data]);
            console.log(petList);
            navigate('/');
        })
        .catch(err => {
            //! Dig through err to render errors conditionally
            console.log("Errors, Look here", err.response.data.errors)
            setErrors(err.response.data.errors)
        })
    }
  return (
    <div className="md:container md:mx-auto ">
        <div className='flex justify-between'>
            <h1 className='text-6xl'>Pet Shelter</h1>
            <Link to='/' style={{color:"blue"}}className='underline'>Back Home</Link> 
        </div> <br />
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <h2 className='text-left mx-20 text-2xl'>Know a pet needing a home?</h2>
            <h1 className='text-xl mx-20'>Skills: (optional)</h1>
        </div>
        <br />
        <div style={{width:"700px", border: "1px solid black", margin:"0 auto"}}>
        {errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null}
        {errors.type ? <p style={{color:"red"}}>{errors.type.message}</p> : null}
                {errors.description ? <p style={{color:"red"}}>{errors.description.message}</p> : null}
            <form onSubmit={onSubmitHandler} style={{margin:"15px"}}>
            <div style={{display:"flex", justifyContent:"space-evenly", padding:"10px"}}>
                <label>Pet Name:</label><br/>
                <input type='text' value={name} style={{border:"1px solid black"}} onChange={(e) => setName(e.target.value)}/><br />
                <label>Skill One:</label><br/>
                <input type='text' value={skillOne} style={{border:"1px solid black"}} onChange={(e) => setSkillOne(e.target.value)}/><br />
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly", padding:"10px"}}>
                <label>Pet Type:</label><br/>
                <input type='text' value={type} style={{border:"1px solid black"}} onChange={(e) => setType(e.target.value)}/><br />
                <label>Skill Two:</label><br/>
                <input type='text' value={skillTwo} style={{border:"1px solid black"}} onChange={(e) => setSkillTwo(e.target.value)}/><br />
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly", padding:"10px"}}>
                <label>Pet Description:</label><br/>
                <input type='text' value={description} style={{border:"1px solid black", margin:"2px"}} onChange={(e) => setDescription(e.target.value)}/><br />
                <label>Skill Three:</label><br/>
                <input type='text' value={skillThree} style={{border:"1px solid black", margin:"2px"}} onChange={(e) => setSkillThree(e.target.value)}/><br />
            </div><br />
                <button style={{color:"white", backgroundColor:"Blue", padding:"5px", width:"150px", boxShadow:"3px 3px black"}}type='submit'>Add Pet!</button>
            </form>
        </div>
    </div>
    )
}

export default CreateOne;
