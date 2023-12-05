import React from 'react'

export default function Header() {

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
  )
}

import { Link, useLocation } from 'react-router-dom';

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs() {
//   const currentPage = useLocation().pathname;

//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link
//           to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/About"
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Blog"
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
//         >
//           Blog
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/Contact"
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </Link>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;