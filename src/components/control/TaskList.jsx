import React from 'react'
import './control.css'

export default function ReportsList({name}) {

  const data = {
    tasks: [
      {task: "Сделать бота отчётов", director: "Verif213", time: "25.05.22"},
      {task: "Сделать бота для вебкам студии", director: "R4z", time: "25.05.22"},
      {task: "Сделать сайт для вебкам студии", director: "Web_Znahar", time: "25.05.22"},
      {task: "Пофиксить ошибки при отправке запроса", director: "WhomLZT", time: "25.05.22"},
      {task: "Исправить 312 строчку на сайте фармацевтической компании", director: "WhomLZT", time: "25.05.22"},
    ]
  }

  const reports = data.tasks.map((task, i) => <div key={i} className="task">
    <div>Выдал задачу: {task.director}</div>
    <div>Срок задачи {task.time}</div>
    <div>{task.task}</div>
    </div>
  )

  return (
    <div className='task-list'>
      <h6>Список задач сотрудника: @{name}</h6>
      {reports}
    </div>
  )
}
