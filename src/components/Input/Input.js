import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const { text } = props;
  return (
    <div className="input-container">
      <input value={text} />
    </div>
  );
};

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
};
