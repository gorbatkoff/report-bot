import React, { useState } from 'react'
import { Button, Dropdown, SplitButton, ButtonGroup, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../'
import Header from './Header';
import ModalWindow from './supports/ModalWindow';

export default function AdminPage({name}) {

    const data = {
        admins: ['Verif213', "Web_Znahar"],
        managers: ['WhomLZT', "Loner", "Shvedov"],
        departments: [
            {
                nameOfDepartment: "Борьба с конкурентами",
                manager: ["Atom"],
                workers: ['Сотрудник_1', 'Сотрудник_2', 'Сотрудник_3', 'Сотрудник_4']
            },

            {
                nameOfDepartment: "Отдел разработки",
                manager: ["WhomLZT", "Shvedov"],
                workers: ['hubble', 'retaker', 'b4jutsu', 'donate']
            },

            {
                nameOfDepartment: "Отдел 3",
                manager: ["Shvedov"],
                workers: ['Сотрудник_1', 'Сотрудник_2', 'Сотрудник_3', 'Сотрудник_4']
            },

            {
                nameOfDepartment: "Отдел 4",
                manager: ["Shvedov"],
                workers: ['Сотрудник_1', 'Сотрудник_2', 'Сотрудник_3', 'Сотрудник_4']
            },

            {
                nameOfDepartment: "Отдел 5",
                manager: ["Shvedov"],
                workers: ['Сотрудник_1', 'Сотрудник_2', 'Сотрудник_3', 'Сотрудник_4']
            },

            {
                nameOfDepartment: "Отдел 6",
                manager: ["Shvedov"],
                workers: ['Сотрудник_1', 'Сотрудник_2', 'Сотрудник_3', 'Сотрудник_4']
            },

            {
                nameOfDepartment: "Отдел 7",
                manager: ["Shvedov"],
                workers: ['Сотрудник_1', 'Сотрудник_2', 'Сотрудник_3', 'Сотрудник_4']
            },
        ]

    }

    const departments = data.departments.map((department, i) =>
        <div className="department-list">

            <Button variant="primary" onClick={
                () => {
                    setNameOfDepartment(department.nameOfDepartment);
                    setListOfEmployees(department.workers)
                    setManagerOfDepartment(department.manager)
                }}
            >{department.nameOfDepartment}</Button>
        </div>
    );


    const [nameOfDepartment, setNameOfDepartment] = useState('Название отдела');
    const [managerOfDepartment, setManagerOfDepartment] = useState([])
    const [listOfEmployees, setListOfEmployees] = useState(['Список сотрудников']);

    return (
        <div>

            <Header name={name}/>


            <div className="admins">
                <div>Руководитель: Verif213</div>
                <div>Заместитель: Web_Znahar</div>
            </div>

            <div className='department'>
                <div className="departments">
                    {departments}
                </div>

                <div className='department-control'>
                    <div className="department-name">{nameOfDepartment}</div>
                    <div className="department-manager">
                        <div>
                            Менеджер(ы) отдела
                        </div>

                        {
                            managerOfDepartment.map((manager, i) =>
                                <div>
                                    <DropdownButton
                                        key={i}
                                        id={`dropdown-button-drop-end`}
                                        drop="end"
                                        variant="primary"
                                        title={manager}
                                        as={ButtonGroup}
                                    >
                                        <Dropdown.Item eventKey="6"><ModalWindow task="Выдать задачу на отдел" taskId="6" name={manager}></ModalWindow></Dropdown.Item>
                                        <Dropdown.Item eventKey="2"><ModalWindow task="Список задач" taskId="2" name={manager}></ModalWindow></Dropdown.Item>
                                        <Dropdown.Item eventKey="3"><ModalWindow task="Выдать задачу" taskId="3" name={manager}></ModalWindow></Dropdown.Item>
                                    </DropdownButton>
                                </div>

                            )}

                    </div>
                    <div className="department-workers">
                        {listOfEmployees.map((worker, i) =>
                            <div className="department-worker">

                                <DropdownButton
                                    key={i}
                                    id={`dropdown-button-drop-end`}
                                    drop="end"
                                    variant="primary"
                                    title={worker}
                                >
                                    <Dropdown.Item eventKey="1"><ModalWindow task="Посмотреть отчёты" taskId="1" name={worker}></ModalWindow></Dropdown.Item>
                                    <Dropdown.Item eventKey="2"><ModalWindow task="Список задач" taskId="2" name={worker}></ModalWindow></Dropdown.Item>
                                    <Dropdown.Item eventKey="3"><ModalWindow task="Выдать задачу" taskId="3" name={worker}></ModalWindow></Dropdown.Item>
                                    <Dropdown.Item eventKey="4"><ModalWindow task="Выдать премию" taskId="4" name={worker}></ModalWindow></Dropdown.Item>
                                    <Dropdown.Item eventKey="5"><ModalWindow task="Выдать штраф" taskId="5" name={worker}></ModalWindow></Dropdown.Item>
                                </DropdownButton>

                                {/* ModalWindow is a component and get some props. TaskId is a prop */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
