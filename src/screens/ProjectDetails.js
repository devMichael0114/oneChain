import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectDetails as ProjectDetailsController } from '../components/ProjectDetails'

const ProjectDetails = (props) => {
  const { projectId } = useParams()
  const projectDetailsProps = {
    ...props,
    projectId
  }
  return (
    <ProjectDetailsController {...projectDetailsProps} />
  )
}

export default ProjectDetails