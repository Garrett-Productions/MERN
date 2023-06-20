import React, { useState } from 'react'

const BoxForm = (props) => {
  const [boxColorArray, setboxColorArray] = useState([])
  const [boxColor, setBoxColor] = useState("")

  const createBox = (e) => {
    e.preventDefault();
    setboxColorArray([...boxColorArray, boxColor]);
    // setBoxColor("")
  };

  return (
  
    <div>
      <form onSubmit={createBox}>
        <div>
          <label htmlFor='boxColor'>Color</label>
          <input type='text' name='boxColor' value={boxColor} onChange={(e) => setBoxColor(e.target.value)} />
          </div>
          <button> Submit Box Color</button>
      </form>
      <hr/>
      <div>
      {
        boxColorArray.map((colorVar, ind) => (
          <div key={ind} style={{
              display:"inline-block",
              margin:'10px',
              width:'50px',
              height:'50px',
              backgroundColor: boxColor
        }} />
      ))
      }
      </div>
    </div>
  );
}

export default BoxForm;