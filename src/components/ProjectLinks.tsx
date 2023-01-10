import React from 'react'

import { useAdmin } from '../context/AdminContext'
import AddProjectLink from './AddProjectLink'
import AddLinkButton from './AddLinkButton'
import ProjectLink from './ProjectLink'
import { ProjectInt } from '../context/AdminContext'
import { getPossibleProjectLinks } from '../service/projectService'

const ProjectLinks: React.FC<{ project: ProjectInt }> = ({ project }) => {
  const linkOptions = ['WEBSITE', 'GITHUB', 'FIGMA']
  const { adminState } = useAdmin()
  const remaininglinks = getPossibleProjectLinks(project, linkOptions)

  if (adminState.loggedIn && remaininglinks.length !== 0) {
    return (
      <div className='m-2 flex flex-col bg-gray-200 p-2'>
        <div className='flex flex-row-reverse justify-around'>
          <figure className='my-auto lg:hover:cursor-pointer lg:hover:bg-white '>
            <AddLinkButton  />
          </figure>
          {project.links?.map((link) => {
            return <ProjectLink link={link} key={link.name} />
          })}
        </div>
        {adminState.addingLink && <AddProjectLink project={project} linkOptions={linkOptions} />}
      </div>
    )
  }

  return (
    <div className='m-2 flex flex-row-reverse justify-around bg-gray-200  p-2'>
      {project.links ? (
        project.links?.map((link) => {
          return <ProjectLink link={link} key={link.name} />
        })
      ) : (
        <p className='p-4 text-lg font-bold uppercase text-black lg:p-12 lg:text-2xl'>
          links coming soon!
        </p>
      )}
    </div>
  )
}

export default ProjectLinks
