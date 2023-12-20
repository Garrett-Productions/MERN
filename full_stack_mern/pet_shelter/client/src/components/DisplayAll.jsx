import {Link} from 'react-router-dom';
import React, { useEffect} from 'react';
import axios from 'axios';

const DisplayAll = ({petList, setPetList}) => {

    useEffect(()=> {
        axios.get('http://localhost:8000/api/pet')
        .then((res) => {
            console.log("Res data to sort here", res.data)
            setPetList(res.data.sort((petA, petB) => petB.type.localeCompare(petA.type)))
        })
        .catch(err => console.log(err))
        }, [])

    return (
        <div className="md:container md:mx-auto ">
            <div className='flex justify-between'>
                <h1 className='text-6xl'>Pet Shelter</h1>
                <Link to={'/pets/new'} className='underline' style={{color:"blue"}}>Add a new pet to the shelter</Link> 
            </div><br />
            <h2 className='text-left mx-20 text-2xl'>These pets are looking for a good home.</h2><br />
            <table className="table-auto border mx-20">
                <thead>
                    <tr style={{display:'flex', justifyContent:"space-between"}}>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {
                petList.map((pet, i) => {
                    return (
                            <tbody>
                                <div key={i} style={{width:"600px"}}>
                                <tr className='bg-gray-200' style={{display:'flex', justifyContent:"space-between"}}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td> 
                                        <Link to={`/pets/${pet._id}`} style={{color:"blue"}} className='underline'>Details |</Link>
                                        <Link to={`/pet/${pet._id}`} style={{color:"blue"}} className='underline'>Edit One</Link>
                                    </td>
                                </tr>
                                </div>
                            </tbody>
                            )
                        })  
                    }
            </table>
        </div>
    )
}

export default DisplayAll