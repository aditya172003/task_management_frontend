import React, {useState} from 'react';
import EditTask from '../model/EditTask'
import axios from 'axios';
import {Alert} from 'reactstrap';
// deleteTask, updateListArray
const Card = ({taskObj, index}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
      //  updateListArray(obj, index)
      console.log("callled");
      console.log(obj._id);
    }

    const handleDelete =async () => {
      
      const axiosConfig = {
        params: {
          id:taskObj._id
        }
     
    }

    await axios.delete('https://taskmanagement-5dws.onrender.com/tasks/deleteTask', axiosConfig)
        .then((data) => {
            window.location.reload();
            alert("task deleted");
           
        })
        .catch((err) => {
            console.log(err);
        })

    }

    return (
        <div class = "card-wrapper mr-5">
           
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.TaskTitle}</span>
                <p className = "mt-3">{taskObj.TaskBody}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt mx-3" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;