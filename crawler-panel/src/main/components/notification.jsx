import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ handleClick, show, text }) => (
  <div className="notification" hidden={!show} >
    <button className="delete" onClick={() => handleClick(false)} />
    {text}
  </div>
);

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Notification;
