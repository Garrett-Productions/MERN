import {useEffect} from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

const DisplayAll = ({productList, setProductList}) => {

  useEffect(()=> {
    axios.get("http://localhost:8000/api/mock")
    .then((res) => {
      console.log("res data here", res.data)
      setProductList(res.data)
    })
  }, [])

  return (
    <div>
      <h1>Products here</h1>
      <Link to={'/'}>Back to Form</Link>
      {
        productList.map((product, i) => {
          return (
            <div key ={i}>
              <p>{product.title}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayAll;