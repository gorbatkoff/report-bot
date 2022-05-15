import React from 'react'
import { Nav } from 'react-bootstrap'

import '../css/Header.css'

export default function Header({name}) {
    
    return (
        <header>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">Бот отчётов</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Менеджер отчётов</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Менеджер задач</Nav.Link>
                </Nav.Item>
            </Nav>

            <div>
                Вы вошли как {name}
            </div>
        </header>
    )
}
