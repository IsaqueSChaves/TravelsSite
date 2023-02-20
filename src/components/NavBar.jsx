import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav class="navbar navbar-expand-custom navbar-mainbg">
        <h1 class="navbar-brand navbar-logo">Flights</h1>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-link nav-item"><Link to="/">Home</Link></li>
                <li class="nav-link2 nav-item"><Link to="/passengers">Passengers</Link></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
