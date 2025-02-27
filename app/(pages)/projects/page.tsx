import BreadCrumb from '@/app/components/common/BreadCrumb'
import ProjectList from '@/app/components/projects/ProjectList'
import React from 'react'

export default function ProjectArchive() {
  return (
     <section>
        <BreadCrumb pageTitle="Projects" currentPage="Projects" to="/projects" />
        <ProjectList/>
    </section>
  )
}
