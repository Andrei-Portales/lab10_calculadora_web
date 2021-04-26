import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = (props) => {
  const { text } = props;
  return (
    <div className="input-container" data-testid="div-test">
      <input value={text} onChange={()=>{}} data-testid="input-test"/>
    </div>
  );
};

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
};
