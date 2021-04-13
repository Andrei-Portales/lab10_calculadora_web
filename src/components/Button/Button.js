import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { text, setValue, isOperation } = props;

  return (
    <div
      className={!isOperation ? 'button' : 'button-operation'}
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
  isOperation: PropTypes.bool.isRequired,
};
