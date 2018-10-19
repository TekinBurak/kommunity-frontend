import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '4rem',
    backgroundColor: 'white',
  },
  logo: {
    display: 'inline-block',
    lineHeight: 'inherit',
    color: '#637381',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  ul: {
    listStyle: 'none',
  },
  li: {
    display: 'flex',
    textAlign: '-webkit-match-parent',
  },
  link: {
    color: '#637381',
    textDecoration: 'none',
    display: 'block',
    padding: '.5rem 1rem',
  },
  ulLeft: {
    marginLeft: 'auto !important',
  },
  input: {
    position: 'relative',
    border: '1px solid #ced4da',
    padding: '.375rem .75rem',
    borderRadius: '.25rem',
    fontSize: '1rem',
    color: '#637381',
  },
  signup: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#637381',
    padding: '.375rem .75rem',
    border: '1px solid transparent',
    borderColor: '#637381',
    borderRadius: '.25rem',
  },
};

class Header extends Component {
  render() {
    return (
      <header style={styles.navbar}>
        <NavLink to="/" style={styles.logo}>Kommunity.App</NavLink>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <NavLink to="/" style={styles.link}>Features</NavLink>
            <NavLink to="/" style={styles.link}>Solutions</NavLink>
            <NavLink to="/" style={styles.link}>Communities</NavLink>
          </li>
        </ul>
        <ul style={styles.ulLeft}>
          <li style={styles.li}>
            <input style={styles.input} placeholder="Search Communities"/>
            <NavLink to="/login" style={styles.link}>Login</NavLink>
            <NavLink to="/" style={styles.signup}>Sign Up</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
