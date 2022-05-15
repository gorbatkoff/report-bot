import React from 'react'
import Header from './Header'
import '../css/Head.css'
import { Button, Dropdown, SplitButton, ButtonGroup, DropdownButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalWindow from './supports/ModalWindow';
import Projects from './projects/Projects';

export default function ManagerPage({ name, department, role, employees, projects}) {

  const departments = department.map((department, i) => <div key={i} className="departments-name">
    <DropdownButton
      key={i}
      id={`dropdown-button-drop-end`}
      drop="end"
      variant="primary"
      title={department}
    >
      <Dropdown.Item eventKey="1"><ModalWindow task="Выдать задачу на отдел" taskId="6" name={department}></ModalWindow></Dropdown.Item>
    </DropdownButton>
  </div>)


  const listOfEmployees = employees.map((employee, i) => <div key={i} className="">
    <div className="department-worker">

      <DropdownButton
        key={i}
        id={`dropdown-button-drop-end`}
        drop="end"
        variant="primary"
        title={employee}
      >
        <Dropdown.Item eventKey="1"><ModalWindow task="Посмотреть отчёты" taskId="1" name={employee}></ModalWindow></Dropdown.Item>
        <Dropdown.Item eventKey="2"><ModalWindow task="Список задач" taskId="2" name={employee}></ModalWindow></Dropdown.Item>
        <Dropdown.Item eventKey="3"><ModalWindow task="Выдать задачу" taskId="3" name={employee}></ModalWindow></Dropdown.Item>
      </DropdownButton>

    </div>
  </div>);
  return (
    <div>

      <Header name={name} />

      <div className="admins">
        <div>Руководитель: Verif213</div>
        <div>Заместитель: Web_Znahar</div>
      </div>

      <div className="manager-wrapper">

        <div>
          <div className="head-of">Ваши отделы:</div>
          {departments}
        </div>

        <div>
          <div className="head-of">Ваши сотрудники:</div>
          {listOfEmployees}
        </div>

      </div>

      <Projects projects={projects} role={role}/>

    </div>
  )
}
