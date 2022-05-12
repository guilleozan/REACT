import '../../styles/nav.css'

import React from 'react';
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Nav =(props) => {
    return( 
        <nav className="contiene logo-nav-contiene">
			<nav className="botonera">
				<ul> 
					<li><NavLink activeClassName='activo' exact to= "/"> Home </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/nosotros"> Nosotros </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/servicios"> Servicios </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/galeria"> Galeria </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/novedades"> Novedades </NavLink> </li>
					<li><NavLink activeClassName='activo' exact to= "/contacto"> Contacto </NavLink> </li>
					
					
					
				</ul>
			</nav>
		</nav>
    );
}

export default Nav;