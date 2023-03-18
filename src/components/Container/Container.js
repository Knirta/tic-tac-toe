import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../App';
import './Container.scss';

const Container = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container" data-theme={theme}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Container;
