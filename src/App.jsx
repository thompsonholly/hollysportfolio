import './App.css';
import { Outlet } from "react-router-dom"
// import { Route, Switch } from 'react-router-dom';

// import Pages //
// import Skills from "./pages/Skills.jsx";
// import Projects from "./pages/Projects.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import ErrorPage from './pages/ErrorPage.jsx';
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCard from './components/ProjectCard';



function App() {

  return (
    <div className="App .d-block">
      <Header />
      <Outlet />
      <Footer />
    
    </div>
  );
  }
export default App;
  
//   return (
//     <div className='App'>
//       <Navigation />
//       <Switch>
//         <Route exact path='/' pages={About} />
//         <Route path='/contact' pages={Contact} />
//         <Route path='/errorpage' pages={ErrorPage} />
//         <Route path='/projects' pages={Projects} />
//         <Route path='/skills' pages={Skills} />
//       </Switch>
//     </div>
//   );
// }
// export default App;



