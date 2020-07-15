import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {

  // setTimeout(() => {
  //   props.history.push('/contact');
  // }, 2000);

  return (
    <div className="navbar">
      <ul className="navbar__item-list">
        <li className="navbar__item"><NavLink exact to="/"> Home</NavLink></li>
        <li className="navbar__item"><NavLink to="about"> About</NavLink> </li>
        <li className="navbar__item"><NavLink to="/contact"> Contact</NavLink> </li>
        <li className="navbar__item"><NavLink to="/blog"> Blog</NavLink> </li>
      </ul>
    </div>
  );
}

export default withRouter(Navbar);