import React from 'react'
import '../App.css'

function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Me</h1>

      <h3> Email: </h3>
      <a className='active-links align-content-center' href="mailto:hollythompson1518@gmail.com">Click to Email Me</a>

      <h3>LinkedIn Profile:</h3>
      <a className='active-links' href="https://www.linkedin.com/in/holly-thompson1518/" target="_blank">LinkedIn</a>

      <h3>Github Profile:</h3>
      <a className='active-links' href="https://github.com/thompsonholly" target="_blank">Github Link</a>

    </div>

  )
}
export default Contact