import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import Skills from "./pages/Skills.jsx";
import Works from "./pages/Works.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from './pages/ErrorPage.jsx';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'works',
        element: <Works />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);



