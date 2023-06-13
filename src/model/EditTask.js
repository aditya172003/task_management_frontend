import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import axios
 from 'axios';


const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [TaskTitle, setTitle] = useState("");
    const [TaskBody, setBody] = useState("");

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTitle(value)
        }else{
            setBody(value)
        }


    }

   

    const handleUpdate = async (e) => {
        e.preventDefault();

        const data = { TaskTitle, TaskBody }
        const axiosConfig = {
             params: {
                id:taskObj._id

        },  
            headers: {
                'Content-Type': "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }

        await axios.patch('https://taskmanagement-5dws.onrender.com/tasks/update', { data }, axiosConfig)
            .then((data) => {
                alert('task Updated');
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
       
       
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {TaskTitle} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {TaskBody} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;