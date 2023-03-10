import React from "react";
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children }) => {
    return <div className="container">{children}</div>
}

Container.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Container;