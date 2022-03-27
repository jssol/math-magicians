import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../scss/Header.scss';

const Header = (props) => {
  const { theme, handleThemeProps } = props;

  return (
    <header className="Header">
      <h1 className="HeaderTitle">Math Magicians</h1>
      <nav className="Nav">
        <NavLink className="NavElement NavLink" to="/">Home</NavLink>
        <NavLink className="NavElement NavLink" to="/calculator">Calculator</NavLink>
        <NavLink className="NavElement NavLink" to="/quote">Quote</NavLink>
        <button className="NavElement" type="button" onClick={handleThemeProps}>
          {(theme === 'Light') ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  handleThemeProps: PropTypes.func.isRequired,
};

export default Header;
