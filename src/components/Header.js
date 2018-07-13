import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
  return(
    <nav>
      <ul>
        <li><button><NavLink to="/sandwich" activeClassName="selected">Sandwiches</NavLink></button></li>
        <li><button><NavLink to="/beer" activeClassName="selected">Beers</NavLink></button></li>
        <li><button><NavLink to="/taco" activeClassName="selected">Tacos</NavLink></button></li>
      </ul>
    </nav>
  );
}

export default Header;
