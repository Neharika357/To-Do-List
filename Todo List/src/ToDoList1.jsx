//TODO List using usereducer
import { useReducer,useState } from 'react';
import './ToDoList.css'

let To_Do_List1=()=>{
  const [data,setData]=useState('');
  const reducer=(count,action)=>{
    switch(action.type){
      case 'ADD':
        return [...count,{task:data,done:false}]
      case 'DEL':
        return count.filter((e,index)=>{
          if(action.index!=index) return e;
        })
      case 'CHANGE':
        return count.map((e,index)=>{
          if(action.index==index) return {task:e.task,done:true}
          return e;
        })
     
    }
  }
  const [count,dispatch]=useReducer(reducer,[]);
  const add=()=>{
    dispatch({type:"ADD"});
  }
  const del=(i)=>{
    dispatch({type:"DEL",index:i});
  }

  return(
    <>
    <div className="container">
    <h1>To Do List</h1>
    <span>
      <input type="text" placeholder='Add a new task...'
         value={data}
         onChange={(e)=>setData(e.target.value)}
      />
    </span>
    <button onClick={add}>Add</button>
    <div>
     <ul>
      {
        count.map((e,index)=>{
          return(
            <li key={index}>
            <input type="checkbox" onChange={()=>dispatch({type:"CHANGE",index:index})}/>
            <span className={e.done?"completed":"notcompleted"}>{e.task}</span>
            <button onClick={()=>del(index)}>Delete</button>
          </li>
          )  
        })    
      }
     </ul>
    </div>
    </div>
    </>
   
  )
}

export default To_Do_List1;
