import BreadCrumb from '@/app/components/common/BreadCrumb'
import ProjectList from '@/app/components/projects/ProjectList'
import React from 'react'
import getPageMeta from '@/app/utils/getPageMeta'
import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return getPageMeta('/projects');
}

export default function ProjectArchive() {
  return (
     <section>
        <BreadCrumb pageTitle="Projects" currentPage="Projects" to="/projects" />
        <ProjectList/>
    </section>
  )
}
