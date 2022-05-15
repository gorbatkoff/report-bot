import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import ReportList from '../control/ReportsList'; // Посмотреть список отчётов
import TaskList from '../control/TaskList'; // Посмотреть список задач
import AddTask from '../control/AddTask'; // Добавить задачу
import PayBonus from '../control/PayBonus'; // Выдать премию
import GetPenalty from '../control/GetPenalty'; // Выдать штраф
import AddDepartmentTask from '../control/AddDepartmentTask'; // Добавить задачу на отдел

export default function ModalWindow({task, taskId, name}) {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    function renderTaskMenu(taskId){
        if(taskId === "1") return <ReportList name={name}/>
        if(taskId === "2") return <TaskList name={name}/>
        if(taskId === "3") return <AddTask name={name}/>
        if(taskId === "4") return <PayBonus name={name}/>
        if(taskId === "5") return <GetPenalty name={name}/>
        if(taskId === "6") return <AddDepartmentTask name={name}/>
    }

    return (
        <div>
            <Button className="me-2 mb-2" onClick={() => handleShow('xxl-down')} variant="success">
                {task}
            </Button>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{task}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {renderTaskMenu(taskId)}
                </Modal.Body>
            </Modal>
        </div>
    );
}
