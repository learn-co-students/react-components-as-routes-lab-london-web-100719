import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
	background: 'lightblue'
}

const NavBar = () => {
	return (
		<div className='navbar'>
			< NavLink
				to='/'
				exact
				style={link}
				activeStyle={{background: 'blue'}}
			>Home</NavLink>
			< NavLink
				to='/actors'
				exact
				style={link}
				activeStyle={{background: 'blue'}}
			>Actors</NavLink>
			< NavLink
				to='/directors'
				exact
				style={link}
				activeStyle={{background: 'blue'}}
			>Directors</NavLink>

			< NavLink
				to='/movies'
				exact
				style={link}
				activeStyle={{background: 'blue'}}
			>Movies</NavLink>
		</div>
	);
};

export default NavBar;
