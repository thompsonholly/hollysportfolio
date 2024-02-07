import '../App.css'
import { BrowserRouter as Router } from 'react-router-dom';


export default function Nav({ links }) {
  return (
    <div className='nav-container'>
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}