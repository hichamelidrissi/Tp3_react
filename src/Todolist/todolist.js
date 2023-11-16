import React, { useState } from 'react'

export default function ToDoList() {
    const [todolist,setTodolist] = useState([]) 
    const [textinput,setTextinput] = useState("") 
    function modify(){}
  return (
    <>
    <input type="text" onChange={(evt)=>{setTextinput(evt.target.value)}}/>
    <button onClick={()=>{setTodolist([...todolist,{id:todolist.length,text:textinput}])}}> ajouter </button>
    <table>
        <thead>
            <tr>
            <th>todos</th>
            <th>action</th>
            </tr>
        </thead>
        <tbody>
        {
            todolist.map(
                todo => {
                    return(
                        <tr>
                            <td >{todo.text}</td>
                            <td><button onClick={()=>{setTodolist(todolist.filter((val)=>val.id!==todo.id))}}>supprimer</button><button onClick={(evt)=>{evt.target.parentNode.previousElementSibling.style.textDecoration='line-through'}}>complet</button></td>
                        </tr>
                    )
                }
            )
        }
        
        </tbody>
        <tfoot></tfoot>
    </table>
    
    </>
  )
}
