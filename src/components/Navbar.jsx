import { Link } from 'react-router-dom';
import Nav from "./Nav";
import '../App.css'

function Navbar() {
  
  
    return (
        <div className='nav-link-container'>
        <Nav className='nav justify-content-end' bg="transparent" variant="dark" sticky="top"
          links={[
              <Link key={1} className="nav-link text-dark" to="/">
                Home
              </Link>,
              <Link key={2} className="nav-link text-dark" to="/projects">
                Projects
              </Link>,
              <Link key={3} className="nav-link text-dark" to="/skills">
                Skills
              </Link>,
              <Link key={4} className="nav-link text-dark" to="/contact">
                Contact
              </Link>,
            ]}
          />
          </div>
        )
      };
      
      export default Navbar;
      
      // import { Navbar, Container, Nav } from "react-bootstrap";
      // import { useState, useEffect } from "react";
      // import { Link } from "react-router-dom";
      
      // function NavBar() {
        
        //   const [activeLink, setActiveLink] = useState('home');
        //   const [scrolled, setScrolled] = useState(false);
        
        //   useEffect(() => {
          //     const onScroll = () => {
            //       if (window.scrollY > 50) {
              //         setScrolled(true);
              //       } else {
                //         setScrolled(false);
                //       }
                //     }
                //     window.addEventListener("scroll", onScroll)
                
                //     return () => window.removeEventListener("scroll", onScroll)
                //   }, [])
                
                //   const onUpdateActiveLink = (value) => {
                  //     setActiveLink(value);
                  //   }
                  
                  //   return (
                    
                    //     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                    //       <Container className="navbar-container">
                    //         <Navbar.Brand href="#home">
                    //           {/* <img src={''} alt="Logo" /> */}
                    //         </Navbar.Brand>
                    //         <Navbar.Toggle aria-controls="basic-navbar-nav">
                    //           <span className="navbar-toggler-icon"></span>
                    //         </Navbar.Toggle>
                    //         <Navbar.Collapse id="basic-navbar-nav">
                    //           <Nav className="me-auto">
                    //               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    
                    
                    //             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    //             <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    //             <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    //           </Nav>
                    //           {/* <span className="navbar-text">
                    //             <div className="social-icon">
                    //               <a href="#"><img src={''} alt="" /> </a>
                    //               <a href="#"><img src={''} alt="" /> </a>
                    //               <a href="#"><img src={''} alt="" /> </a>
                  //             </div> */}
                  //           <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                  //           {/* </span> */}
                  //         </Navbar.Collapse>
                  //       </Container>
                  //     </Navbar>
                  //   )
                  // };
// export default NavBar;
                  
// trying hamburger menu //
                  
                  // import { Nav, Navbar, Container } from 'react-bootstrap';
                  
                  // const Navigation = () => {
                  //   return (
                  //     <>
                  //       <Navbar collapseOnSelect fixed='top' expand='sm' bg='transparent' variant='light'>
                  //         <Container>
                  //           <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                  //           <Navbar.Collapse id='responsive-navbar-nav'>
                  //             <Nav>
                  //               <Nav.Link href='/'>Home</Nav.Link>
                  //               <Nav.Link href='/contact'>Contact Me</Nav.Link>
                  //               {/* <Nav.Link href='/errorpage'>Error Page</Nav.Link> */}
                  //               <Nav.Link href='/skills'>Skills</Nav.Link>
                  //               <Nav.Link href='/projects'>Projects</Nav.Link>
                  
                  //             </Nav>
                  //           </Navbar.Collapse>
                  //         </Container>
                  //       </Navbar>
                  //     </>
                  //   )
                  // }
                  
                  // export default Navigation;
                  
                  
                  
                  
                  

