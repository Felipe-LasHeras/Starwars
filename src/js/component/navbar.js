import React from "react";
import { Link } from "react-router-dom";
import starwar from "../../img/starwars.png";

function Navbar ()  {
	return (
		<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">
			<img src="starwars.png" alt="Logo de starwars" style={{height: '100px', width: '100px'}}/>
		</a>
		<div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>

  </div>
</nav>
	);
};

export default Navbar;
