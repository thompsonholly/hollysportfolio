import "./style.css"
import Projectcard from "../components/Projectcard"
// import workdayImage from '../assets/workday.png';
import Card from 'react-bootstrap/Card';

function Works() {
  const projects = [
    {
      id: 1,
      title: 'Workday Scheduler',
      description: "",
      // techused: ['HTML', 'CSS', 'jQuery', 'JavaScript', 'day.js'],
      img: ""
      // deployed: "", //githubio
      // gitlink: "" //link to files in gh
    },
    {
      id: 2,
      title: 'project2',
      description: "",
      // techused: [],
      img: "",
      // deployed: "", //githubio
      // gitlink: "" //link to files in gh
    },
    {
      id: 3,
      title: 'project3',
      description: "",
      // techused: [],
      img: "",
      // deployed: "", //githubio
      // gitlink: "" //link to files in gh
    },
    {
      id: 4,
      title: 'project4',
      description: "",
      // techused: [],

      // deployed: "", //githubio
      // gitlink: "" //link to files in gh
    }
  ]
  return (
    <section>
      <h2>My Works</h2>
      <div className="workCardContainer">
        {
          projects.map(({ id, title, img }) => (
            <Projectcard key={id} title={title} img={img} />
          ))
        }
      </div>
    </section>

  )
}
export default Works
// techused = { techused }