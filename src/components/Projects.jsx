import React from 'react'
import Portfolio from "../pages/Portfolio"

export default function Projects({ title, description, image, repo, deployed }) {


  return (
    <>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">title={project.title}</h5>
              <p class="card-desc">description={project.description}</p>

              <p class="card-repo"><small class="text-body-secondary">repo={project.repo}</small></p>
              <p class="card-deploy"><small class="text-body-secondary">deployed={project.deployed}</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

///card