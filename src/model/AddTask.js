import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useEffect, useState } from 'react'
import 'axios'
import axios from 'axios';
import {Alert} from 'reactstrap';



function AddTask({ modal, toggle }) {
    const [TaskTitle, setTitle] = useState("");
    const [TaskBody, setBody] = useState("");
    const [visible, setVisible] = useState(false);
    
   
    const saveTask = async () => {
        console.log(TaskTitle, " ", TaskBody);
        toggle()
        const data = { TaskTitle, TaskBody }
        const axiosConfig = {
            // params: {
            //   lng:JSON.stringify(lgn),
            //   ltd:JSON.stringify(lgt)
            // },
            headers: {
                'Content-Type': "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        }

        await axios.post('tasks/addTask', { data }, axiosConfig)
            .then((data) => {
               alert("task added")
              
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })

    }


    const onDismiss = () => setVisible(false);
    return (
        <div>
         <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Task Name</label>
                            <input className='mt-1 form-control' onChange={(e) => { setTitle(e.target.value) }} type="text"></input>
                        </div>
                        <div className='form-group mt-3'>
                            <label>Description</label>
                            <textarea className='mt-1 form-control' onChange={(e) => { setBody(e.target.value) }} rows={7}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={saveTask}>
                        Add task
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddTask
