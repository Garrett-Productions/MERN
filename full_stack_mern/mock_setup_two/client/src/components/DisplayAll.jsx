import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayAll = ({mockList, setMockList}) => {

    useEffect(() => {
      axios.get("http://localhost:8000/api/mock")
      .then((res) => {
        console.log("data of res here",res.data)
        setMockList(res.data)
      })
    }, [])

    return (
      <div >
            <h1 style={{fontWeight:"bold"}}>Favorite Mock products</h1>
            <div style={{width:"500px", margin:"0 auto"}}>
                <div style={{display:"flex", margin:"0 auto", justifyContent:"space-between", margin:"5"}}> 
                    <Link to={'/'}>Add an Mock product</Link>  
                    
                </div>
                <table className ="table table-striped" style={{border: "2px solid black"}}>
                    <thead>
                        <tr>
                            <th>Mock Products | Actions Available</th>
                        </tr>
                    </thead>
                    {
                      mockList.map((mock, i) => {
                        return (
                          <tbody>
                            <div key ={i} style={{width:"500px"}}>
                                <tr style={{display:"flex", justifyContent:"space-between"}}>
                                    <td>{mock.title}</td>
                                </tr>
                            </div>
                        </tbody>
                    )}
                    )}
            </table>
        </div>
    </div>
    )
  }
  export default DisplayAll;






  // const deleteMock = (mockId) => {
  //     axios.delete(`http://localhost:8000/api/authors/${mockId}`)
  //     .then(res => {
  //         removeAuthor(authorId)
  //         navigate('/')
  //     })
  // }