import Projects from '../components/Projects'
import React from 'react'


export default function Portfolio() {
  const projectArr = [
    {
      title: "",
      description: "",
      image: "",
      repo: "",
      deployed: "",
    }
  ]


  return (
    <>
      <h1>Portfolio</h1>
      {projectArr.map((project) => (
        <Projects title={project.title} description={project.description} />
      ))}
    </>
  )
}