import React from 'react';
import { useParams } from 'react-router-dom';

const Error = (props) => {
    // const {hasError, hasSetError} = props;
    const { err } = useParams();
    return (
    <div>
        <p style={{textAlign:'center'}}>{err}</p>
        <img src={require('./obiwan.jpeg')} alt='Picture of Obi Wan' ></img> 
        <h1 style={{textAlign:'center'}}>THESE AREN'T DROIDS YOU'RE LOOKING FOR!</h1>
        </div>
    )
}
export default Error;