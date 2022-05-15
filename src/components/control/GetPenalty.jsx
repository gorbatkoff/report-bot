import React from 'react'
import './control.css'
import { Button } from 'react-bootstrap'

export default function ReportsList({ name }) {

  return (
    <div className='bonus-list'>
      <h6>Выдать штраф сотруднику: @{name}</h6>

      <div className='adding-bonus'>
        <input type="text" placeholder="Введите сумму штрафа" />
        <Button size='sm' variant='danger'>Выдать штраф</Button>
      </div>

      <div className='adding-bonus-variants'>
        <Button variant='danger'>Зарплата за 1 день</Button>
        <Button variant='danger'>Зарплата за 2 дня</Button>
        <Button variant='danger'>Зарплата за 3 дня</Button>
      </div>
    </div>
  )
}
