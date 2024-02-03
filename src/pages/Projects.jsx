import "./style.css"
import Projectcard from "../components/ProjectCard"
import workdayImage from '../assets/workday.png';
import Card from 'react-bootstrap/Card';

function projectCard() {
  const projects = [
    {
      id: 1,
      title: 'Workday Scheduler',
      description: "An assignment to make a simple workday schedule for keeping track of daily tasks.",
      techused: ['HTML', 'CSS', 'jQuery', 'JavaScript', 'day.js'],
      img: workdayImage,
      deployed: "https://thompsonholly.github.io/workdayscheduler2/", //githubio
      gitlink: "https://github.com/thompsonholly/workdayscheduler2" //link to files in gh
    },
    {
      id: 2,
      title: 'Gifty',
      description: "An app created to store a list of friends and relatives containing their respective interests, likes and a list compiled of gift ideas to buy them for a special occasion.",
      // techused: [],
      img: "",
      deployed: "https://gifty-gift-idea-tracker-9346ec5c500d.herokuapp.com/", // heroku deployed
      gitlink: "https://github.com/timpyjoe/Gift-idea-tracker" //link to files in gh
    },
    {
      id: 3,
      title: 'Logo Generator',
      description: "A backend app to create an SVG image.",
      // techused: [],
      img: "",
      // deployed: "", //githubio
      gitlink: "https://github.com/thompsonholly/logogenerator" //link to files in gh
    },
    {
      id: 4,
      title: 'Pet Space',
      description: "An app to search for a cat or dog using the PetFinder API.",
      // techused: [],

      deployed: "https://nestibry.github.io/pet-space/", //githubio
      gitlink: "https://github.com/nestibry/pet-space" //link to files in gh
    }
  ]
  return (
    <section>
      <h2>My Projects</h2>
      <div className="projectCardContainer">
        {
          projects.map((projectItem) => (
            <Projectcard  key={projectItem.id} {...projectItem} />
          ))
        }
      </div>
    </section>

  )
}
export default projectCard
// techused = { techused }