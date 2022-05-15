import React from 'react'
import Project from './Project'

export default function Projects({ projects, role }) {

  return (
    <div className="projects-list">
      <h3>Список проектов</h3>

      {projects.map((project) => <Project project={project} role={role}/>)}
    </div>
  )
}
