import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const MyComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
  );
};







// import Carousel from 'react-bootstrap/Carousel';
// import '../App.css'
// // import { img } from '../pages/Projects'



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








// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import '../App.css'





// function ProjectCard({ title, img, techused, description, deployed, gitLink }) {

//   return (
//     <Card className='projectCard'>
//       <Card.Title>{title}</Card.Title>
//       <Card.Img variant="top" src={img} />
//       <Card.Body>

//         <Card.Text>
//           {description}

//         </Card.Text>
//         <Card.Text>{techused}</Card.Text>



//       </Card.Body>
//       <button className='deploy-link'><a href={deployed} target='_blank'>Deployed </a></button>
//       <button className='repo-link' variant='secondary'> <a href={gitLink} target='_blank'>Github Repo </a></button>
//     </Card>
//   );
// }

// export default ProjectCard;

