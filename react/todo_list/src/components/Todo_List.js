import React, { useState } from 'react';

// psuedo-code = in order to have a checkmark 'true or false' placed one ach to do item, 
// we need to create an object for each to-do item upon on our function callback handleToDoSubmit
// after it prevents default behavior we can create this object, 1 key is equal to our actual todo
// the 2nd key is gonna be equal to a boolean value variable like 'complete', initially set to false until checked

const TaskList = (props) => {
    const [todo, setTodo] = useState("");
    const [toDoList, setToDoList] = useState([]);

    const handleToDoSubmit = (event) =>{
        event.preventDefault();
        if (todo.length === 0) { // this will stop empty string submissions
            console.log("sorry about ya mate!")
            return; 
        }

        const addedToDo = { // because we added this object, lets update our spread operator to push each new addedToDo, instead of just 'todo'
            todoKey: todo,
            complete: false
        }
        setToDoList([...toDoList, addedToDo]);
        setTodo("") // two way data binding by reseting our setter back to an empty string
    }               // both Filter and Map returns a new array, and requires a callback function that needs you to tell it how to filter or how to map
    const handleToDoDelete = (delIdx) => {
        const filteredToDos = toDoList.filter((todo, i ) => { 
            return i !== delIdx;  
        });
        setToDoList(filteredToDos)
    }

    const toDoTrueOrFalse = (idx) => {
        const changedTodos = toDoList.map((todo, i) => {
            if (idx === i){
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setToDoList(changedTodos);
    }
    return (
    <div>
        <form 
            onSubmit={(event)=> {
                handleToDoSubmit(event)
        }}>
            <label>Create a Task!
            <input 
            type='text' 
            value={todo}  // one way data binding with connecting the getter to the value
            onChange={(event)=> 
                setTodo(event.target.value)} 
            />
            </label>
            <div>
                <button style={{margin:5, color:'black'}}> New Task</button>
            </div>
        </form>
        <hr />
        {
            toDoList.map((todo, i) => {
            const todoClasses = []; // the only reason this array is here is to hold any potential styling I want to add or push into this array, that way we can just acces them by position.
            if (todo.complete) {
                todoClasses.push("line-through");
            }

            return (
                <div key={i} style={{display:'flex', justifyContent:'center', margin:5 }}>
                    <input onChange={(event)=> { toDoTrueOrFalse(i);}} 
                        checked={todo.complete} type='checkbox' />
                    <p className={todoClasses.join(" ")}>{todo.todoKey}</p> 
                    <button style={{backgroundColor:'lightgrey', borderRadius: 25, marginLeft: 5}} onClick={(event)=> {
                        handleToDoDelete(i);
                    }}>Delete</button>
                </div>
            )})
        };
    </div>
);}

export default TaskList;