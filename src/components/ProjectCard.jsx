import 'animate.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'





function ProjectCard({ title, img, techused, description, deployed, gitLink }) {

  return (

    <Card className='project-card'>
      <Card.Title><h1 className='card-title'>{title}</h1></Card.Title>
      <Card.Img variant="top" src={img} />
      <Card.Body>

        <Card.Text>
          {description}

        </Card.Text>
        <Card.Text>

          <p className='tech'>{techused}</p></Card.Text>



      </Card.Body>
      <button className='deploy-link'><a className='text-decoration-none text-black' href={deployed} target='_blank'>Deployed </a></button>
      <button className='repo-link' variant='secondary'> <a href={gitLink} target='_blank'>Github Repo </a></button>
    </Card>

  );
}

export default ProjectCard;







// import Carousel from 'react-bootstrap/Carousel';
// import '../App.css'




// function CarouselProjectCard({ title, img, techused, description, deployed, gitLink }) {
//   return (
//     <div className='row tu-world'>
//     <Carousel fade interval={1000}>
//       <Carousel.Item>
//         <img
//           className='d-block w-100'
//           src={img}
//         />
//         <Carousel.Caption>
//           <h3>{title}</h3>
//           <p>{description}</p>
//           <p>{techused}</p>
//         </Carousel.Caption>
//         <button className='deploy-link'><a href={deployed} target='_blank'>Deployed </a></button>
//         <button className='repo-link' variant='secondary'> <a href={gitLink} target='_blank'>Github Repo </a></button>
//       </Carousel.Item>
//       </Carousel>
//     </div>
//   )
// };

// export default CarouselProjectCard










