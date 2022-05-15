import React from 'react';
import Header from './Header';
import Projects from './projects/Projects';
import CreateReport from './supports/CreateReport';

export default function EmployeePage({ user, projects }) {

    const managers = user.managers.map((manager, i) => <div key={i}>Ваш менеджер: {manager}</div>)

    return (
        <div>
            <Header name={user.name} />
            <CreateReport />
            <div className="admins">
                <div>Руководитель: Verif213</div>
                <div>Заместитель: Web_Znahar</div>
            </div>
            <div className="admins">
                {managers}
            </div>
            <Projects projects={projects} role={user.role} />
        </div>
    )
}
