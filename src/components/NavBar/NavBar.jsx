import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      { props.user && <><Link to="/posts/new">Add a post</Link> &nbsp; | &nbsp;</> }
      <Link to="/">Ali Selim</Link>
      &nbsp; | &nbsp;
      <Link to="/spoken">This</Link>
      &nbsp; | &nbsp;
      <Link to="/written">That</Link>
      &nbsp; | &nbsp;
      <Link to="/visual">The Other Thing</Link>
      &nbsp; | &nbsp;
      <Link to="/contact">Where am I?</Link>
      { props.user && <>&nbsp; | &nbsp; <Link to="" onClick={handleLogOut}>Logout</Link></> }
    </nav>
  );
}