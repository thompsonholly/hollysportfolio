import '../App.css'
// import Projectcard from "../components/ProjectCard";
// import CarouselProjectCard, { MyComponent } from '../components/CarouselProjectCard';
import workdayImage from '../assets/workday.png';
import petSpaceImage from '../assets/petspace.png';
import giftyImage from '../assets/gifty.png';
import svgImage from '../assets/svglogo.png';
import CarouselProjectCard  from '../components/ProjectCard';


function carouselProjects() {
  const projects = [
    {
      id: 1,
      title: 'Pet Space',
      description: "An app to search for a cat or dog using the PetFinder API.",
      techused: ['JavaScript', <br></br>,
        'jQuery', <br></br>,
        'Bootstrap', <br></br>, 'Third-Party-API'],
      img: petSpaceImage,
      deployed: "https://nestibry.github.io/pet-space/", //githubio
      gitlink: "https://github.com/nestibry/pet-space" //link to files in gh
    },
    {
      id: 2,
      title: 'Gifty',
      description: "An app created to store a list of friends and relatives containing their respective interests, likes and a list compiled of gift ideas to buy for a special occasion.",
      techused:
        ['MongoDB', <br></br>,
          'React + Vite', <br></br>,
          'Bootstrap', <br></br>,
          'JavaScript', <br></br>,
          'Trello', <br></br>,
          'Canva', <br></br>,'Heroku'],
      img: giftyImage,
      deployed: "https://gifty-gift-idea-tracker-9346ec5c500d.herokuapp.com/", // heroku deployed
      gitlink: "https://github.com/timpyjoe/Gift-idea-tracker" //link to files in gh
    },
    {
      id: 3,
      title: 'Logo Generator',
      description: "A backend app to create an SVG image.",
      techused:
        ['Jest', <br></br>,
          'Node.js', <br></br>,
          'Inquirer package', <br></br>,
          'Object-oriented Programming'],
      img: svgImage,
      deployed: "https://watch.screencastify.com/v/9uZtn4KUSjivNhnKdcXo", //githubio
      gitlink: "https://github.com/thompsonholly/logogenerator" //link to files in gh
    },
    {
      id: 4,
      title: 'Workday Scheduler',
      description: "An app of a simple workday schedule for keeping track of daily tasks.",
      // used <br> to get tech to appear in column list form//
      techused:
        ['HTML', <br></br>,
          'CSS', <br></br>,
          'jQuery', <br></br>,
          'JavaScript', <br></br>,
          'day.js'],
      img: workdayImage,
      deployed: "https://thompsonholly.github.io/workdayscheduler2/", //githubio
      gitlink: "https://github.com/thompsonholly/workdayscheduler2" //link to files in gh
    },

  ]
  return (
    <section>
      <h2 className='my-projects text-center'>My Projects</h2>
      <div className="projectCardContainer">
        {
          projects.map((projectItem) => (
            <CarouselProjectCard key={projectItem.id} {...projectItem} />
          ))
        }
      </div>
    </section>

  )
}
export default carouselProjects
