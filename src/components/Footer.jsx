import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-light p-4">
      <div id="footer">
        <div className="container text-center mb-5">
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3"
              onClick={() => navigate(-1)}
            >
              &larr; Go Back
            </button>
          )}
          <h4>&copy; {new Date().getFullYear()} - Holly Thompson</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
