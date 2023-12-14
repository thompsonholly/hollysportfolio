
import { Link } from 'react-router-dom';
import Nav from "./Nav";

function Navbar() {


  return (

    <Nav
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/works">
          Works
        </Link>,
        <Link key={3} className="nav-link text-light" to="/skills">
          Skills
        </Link>,
        <Link key={4} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
      ]}
    />

  )
};

export default Navbar;