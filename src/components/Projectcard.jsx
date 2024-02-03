import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function ProjectCard({ title, img, techused, description, deployed, gitLink }) {

  return (
    <Card className='projectCard'>
      <Card.Title>{title}</Card.Title>
      <Card.Img variant="top" src={img} />
      <Card.Body>

        <Card.Text>
          {description}

        </Card.Text>
        <Card.Text>{techused}</Card.Text>



      </Card.Body>
      <button className='deploy-link'><a href={deployed} target='_blank'>Deployed </a></button>
      <button className='repo-link' variant='secondary'> <a href={gitLink} target='_blank'>Github Repo </a></button>
    </Card>
  );
}

export default ProjectCard;

