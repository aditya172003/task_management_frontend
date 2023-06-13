import React from 'react'
import AddTask from '../model/AddTask';
import { useState ,useEffect} from 'react';
// import { Card, ModalHeader } from 'reactstrap';
import Card from './Card';
import axios from 'axios';

function TaskList() {
    const [modal, setModal] = useState(false);
    const [Tasks,setTasks]    = useState([]);
    const toggle = () => setModal(!modal);

    const getTask = async()=>{
    
        await axios.get('/tasks/todays')
        .then((data)=>{
            
            const task = data.data;
            setTasks(task)
        })
    }
    useEffect(()=>{
        getTask();
    },[]);


  return (
    <div>
      <div className='header text-center'>
            <h1>MyTask</h1>
            <button className='btn btn-primary mt-3' onClick={()=>{
                setModal(true);
            }} >Add</button>
      </div>
      <div className = "task-container ">
        {
            Tasks.map((i,index)=>(
             
                (i.TaskStatus==false)?<Card taskObj={i} index={index}/>:<></>
              
            ))
        }
      </div>
      <AddTask toggle={toggle} modal={modal}/>
    </div>
  )
}

export default TaskList
