import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { text, setValue, color, isOperation } = props;

  return (
    <div
      className={!isOperation ? 'button' : 'button-operation'}
      style={{ backgroundColor: color }}
      onClick={() => setValue(text)}
    >
      <div>{text}</div>
    </div>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  isOperation: PropTypes.bool.isRequired,
};
