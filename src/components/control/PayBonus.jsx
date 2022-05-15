import React from 'react'
import './control.css'
import { Button } from 'react-bootstrap'

export default function ReportsList({ name }) {

  return (
    <div className='bonus-list'>
      <h6>Выдать премию сотруднику: @{name}</h6>

      <div className='adding-bonus'>
        <input type="text" placeholder="Введите размер премии" />
        <Button size='sm'>Выдать премию</Button>
      </div>

      <div className='adding-bonus-variants'>
        <Button>Зарплата за 1 день</Button>
        <Button>Зарплата за 2 дня</Button>
        <Button>Зарплата за 3 дня</Button>
      </div>
    </div>
  )
}
