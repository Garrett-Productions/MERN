import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

const EditOne = ({petList, setPetList}) => {
    const {id} = useParams(); //deconstructing from params
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] =useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState([]); // to render errors and cap them in a list and loop through to display
    const navigate = useNavigate() // to navigate our user our form submission

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            console.log('res pet data here', res.data)
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkillOne(res.data.skillOne)
            setSkillTwo(res.data.skillTwo)
            setSkillThree(res.data.skillThree)
            setPetList([...petList, res.data]) //res is an object, key of data
            console.log(petList)
        })
        .catch(err => console.log(err))
    }, [])

    const onUpdate = (e, petId) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/pets/${id}`,
        { // short hand capuring in state
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
        .then(res => {
            console.log("res data on update here",res.data)
            const mappedPets = petList.map((pet) =>
            ( pet._id == petId ) ? res.data : pet)
            setPetList(mappedPets) // returning a filtered or mapped list after  edits
            console.log(mappedPets)
            navigate('/')
        })
        .catch(err => {
            console.log("there must be an error, check it", err.response.data)
            setErrors(err.response.data.errors) // dig into the err.response to find our object
        })
    }
    // I can cond render errors w  ternary
    // link in the return does not need braces unless parsing params i believe
    return (
        <div className="md:container md:mx-auto ">
            <div className='flex justify-between'>
                <h1 className='text-6xl'>Pet Shelter</h1>
                <Link to={'/'} style={{color:"blue"}} className='underline'>Back Home</Link> 
            </div> <br />
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <h2 className='text-left mx-20 text-2xl'>Edit {name} </h2>
                <h1 className='text-xl'>Skills: (optional)</h1>
            </div>
            <br />
            <div style={{width:"700px", border: "1px solid black", margin:"0 auto"}}>
                    {errors.name ? <p style={{color:"red"}}>{errors.name.message}</p> : null} 
                    {errors.type ? <p style={{color:"red"}}>{errors.type.message}</p> : null}
                    {errors.description ? <p style={{color:"red"}}>{errors.description.message}</p> : null}
                <form onSubmit={onUpdate} style={{margin:"15px"}}>
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
                    <button style={{color:"white", backgroundColor:"Blue", padding:"5px", width:"150px", boxShadow:"3px 3px black"}}type='submit'>Edit Pet!</button>
                    
                </form>
            </div>
        </div>
    )
}

export default EditOne;