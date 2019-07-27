import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import StopWatch from './StopWatch';

const Header = ({title, players}) => (
  <header>
    <Stats players={players} />
    <h1>{title}</h1>
    <StopWatch />
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Header;