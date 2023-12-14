import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function Projectcard({ id, title, img }) {
  // const workday = workdayImage;
  return (
    <Card key={id} className='workCard'>
      <Card.Img key={img} variant="top" src="../assets/workday.png" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          A simple calendar app to help the user to schedule each workday per hour of the day.
          : HTML, CSS, JavaScript, jQuery, day.js
        </Card.Text>

      </Card.Body>
      <button className='deploy-link'><a href="https://thompsonholly.github.io/workdayscheduler2/" target='_blank'>Deployed </a></button>
      <button className='repo-link' variant='secondary'> <a href="https://github.com/thompsonholly/workdayscheduler2" target='_blank'>Github Repo </a></button>
    </Card>
  );
}

export default Projectcard;

