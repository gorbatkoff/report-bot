import React from 'react'
import {Button} from 'react-bootstrap'
import './control.css'

export default function ReportsList({name}) {

  return (
    <div className='add-task'>
      <h6>Выдать задачу отделу: @{name}</h6>

      <div className='adding-task'>
          <input type="text" placeholder="Введите задачу"/>
          <Button size='sm'>Добавить задачу</Button>
      </div>
    </div>
  )
}
