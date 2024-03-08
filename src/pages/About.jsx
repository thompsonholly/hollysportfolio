import '../App.css'
import '../index.css'

function About() {
  return (
    <main>
      <h1>About Me</h1>
      <a href="https://imgur.com/WOQVjgL"><img style={{
        width: '250px',
        height: '300px',
        margin: '30px',

      }}
        src="https://i.imgur.com/WOQVjgL.jpg" title="source: imgur.com" /></a>

      <div className="about-container">
        <p className='about-box'>Holly has been practicing as a full time Licensed Dental Hygienist for the past 16 years. After gaining and perfecting extensive and versatile communication skills, Holly has decided to make a change and dive head first into the tech world. Holly loves challenges and is excited to create more goals for future career growth opportunities. Gaining more and better problem solving skills, she is excited to tackle new and difficult projects to gain more knowledge, to grow and establish herself in the developer community.</p>
        <p>Holly enjoys spending most of her time outdoors, breathing in the fresh Minnesota air during both the cold winters and the hot summers. She is a workout enthusiast and enjoys running, hiking, biking and taking long nature walks. She spends most of her time with her two children and likes to take the occasional vacation to relax and unwind from time to time. Recently she started competing in local jigsaw puzzle competitions and has mangaged to finish in first place every time.  </p>
      </div >

    </main>

  )
}
export default About