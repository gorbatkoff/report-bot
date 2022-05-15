import React from 'react'
import { Alert, Button } from 'react-bootstrap'

export default function Project({ project, role }) {

    const getStatus = function (project) {
        if (project.status === 'Разрабатывается') return 'primary';
        if (project.status === 'Поддерживается') return 'success';
        if (project.status === 'Заморожен') return 'warning';
        if (project.status === 'Не начат') return 'danger';
    }

    return (
        <div>
            <Alert variant={getStatus(project)} className="project">
                <div>Проект: {project.name}</div>
                <div>Выдал: {project.manager}</div>
                <div>Статус: {project.status}</div>
                <Button variant="dark">Управление</Button>
            </Alert>
        </div>
    )
}
