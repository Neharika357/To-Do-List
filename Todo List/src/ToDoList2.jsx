//todo list using usestate
import { useState } from 'react';
import './ToDoList.css'

let To_Do_List2=()=>{
  const [task,setTask]=useState('');
  const [id,setId]=useState(0);
  const [tasks,setTasks]=useState([]);
  const add=()=>{
    const newobj={id:id,work:task,done:false};
    setTasks([...tasks,newobj]);
    setId(id+1);
    
  }
  const del=(taskid)=>{
     setTasks(tasks.filter((b)=>{
        if(taskid!==b.id) return b;
     }))
  }
  const workdone=(taskid)=>{
     setTasks(tasks.map((b)=>{
      console.log(taskid,b.id);
      if(taskid===b.id){
        console.log("enter");
        //  const newobj={id:b.id,work:b.work,done:true};
        // b.done=(b.done?false:true); //working with filter
        return {...b,done:!b.done};
      }
      return b;
     }))
     console.log(tasks);
  }
  
    return(
      <>
      <div className='container'>
      <h1>To Do List</h1>

      <div className="box">
      <input type="text" placeholder='Add a new task...'
      value={task}
      onChange={(e)=>setTask(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <ul>
         {
        tasks.map((e)=>{
          return(
            <li key={e.id}>
              <input type="checkbox"
              onChange={()=>workdone(e.id)} />
               <span className={e.done?"completed":"notcompleted"}>{e.work}</span>
               <button className='del' onClick={()=>{del(e.id)}}>Delete</button>
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
export default To_Do_List2;


