import React from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from '../../contexts/ThemeContext';
import './Container.scss';

const Container = ({ children }) => {
  const { theme } = useThemeContext();
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
