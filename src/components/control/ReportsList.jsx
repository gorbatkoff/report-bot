import React from 'react'
import './control.css'

export default function ReportsList({name}) {

  const data = {
    reports: [
      {text: "Сегодня я сделал модальное окно, а также пофиксил некоторые баги", date: new Date()},
      {text: "Сделать возможность добавления задачи на отдел (Это к менеджерам)", date: new Date()},
      {text: "Менеджеры некоторых отделов работаю посменно, значит нужно проработать момент с заместителями и двумя начальниками отделов", date: new Date()},
      {text: "Реализовать логику добавления задач, выдачи премий и штрафов -- следовательно надо продумать какие будут данные с сервера для пользователя", date: new Date()},
    ]
  }

  const reports = data.reports.map((report, i) => <div key={i} className="report">
    <div>{report.date.toLocaleDateString()}</div>
    <div>{report.text}</div>
    </div>
  )

  return (
    <div className='reports-list'>
      <h6>Отчёты о работе сотрудника: @{name}</h6>
      {reports}
    </div>
  )
}
