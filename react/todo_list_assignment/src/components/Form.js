import React, { useState } from 'react';

const Form = (props) => {
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const handleToDoSubmit = (event) => {
        event.preventDefault();
        if (toDo.length === 0) {
            return;
        }
        const trackedToDo = {
            toDoKey: toDo,
            done: false
        }
        setToDoList([...toDoList, trackedToDo]); //updated getter of string from toDo to trackedToDo to reflect our dictionary update when our checkbox was added
        setToDo("")
    }

    const handleToDoDelete = (indexToDelete) => {
        const remainingToDos = toDoList.filter((toDo,i) => {
            return i !== indexToDelete;
        });
        setToDoList(remainingToDos)
    }

    const handleTrueOrFalse = (index) => {
        const updatedToDos = toDoList.map((toDo, i) =>{
        if (index === i) {
            toDo.done =! toDo.done;
        }
        return toDo;
    });
        setToDoList(updatedToDos);
    }
    return (
        <div>
            <form onSubmit={(event) => {
                handleToDoSubmit(event)
            }}>
                <input type='text' onChange={(event) => setToDo(event.target.value)} value={toDo}>
                </input>
                <button>Add todo</button>
            </form>
            <hr />
            {
                toDoList.map((toDo, i) => {
                    const toDoStyles = [];
                    if (toDo.done){
                        toDoStyles.push('class_crossed-out');
                    }
                    return (
                        <div key={i}>
                            <input onChange={(event) => {
                                handleTrueOrFalse(i);
                            }} type='checkbox' checked={toDo.done} 
                            />
                            <span className={toDoStyles.join(" ")}>{toDo.toDoKey}</span>
                        <button onClick={(event) => {handleToDoDelete(i);
                        }}>Delete</button>
                        </div>
                    )})
            }
        </div>
    );}

export default Form;