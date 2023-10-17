import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Form = ({productList, setProductList}) => {

    const [title, setTitle] = useState('')
    const navigate = useNavigate();

    // on submit handler here
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/mock', {
      title
    })
    .then(res => {
      console.log("Check out Your data!", res.data)
      setTitle('')
      setProductList([...productList, res.data]);
      navigate('/dashboard')
    })
    .catch(err => {
      console.log("error here", err.response)
      // setErrors()
    })
  }

    // capture errors in form
  return (
    <div style={{margin:"0 auto"}}>
      <h1 style={{fontWeight:"bold"}}>Products</h1>
      <p>Add new here</p>
      <Link to={'/dashboard'}>Dashboard</Link>
      <form onSubmit={submitHandler} style={{ width:"250px", border:"1px solid black", margin:"0px auto"}}>
        <label>Title:</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type='submit' style={{color:"white", backgroundColor:"blue"}}>Add new</button>
      </form>
    </div>
  )
}

export default Form;