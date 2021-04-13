import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './OperationKeyboard.scss';

const OperationKeyboard = (props) => {
  const { setValue } = props;

  return (
    <div className="buttons-operations">
      <Button text="^" setValue={setValue} color="#202125" isOperation />
      <Button text="Del" setValue={setValue} color="#202125" isOperation />
      <Button text="Ac" setValue={setValue} color="#202125" isOperation />

      <Button text="(" setValue={setValue} color="#202125" isOperation />
      <Button text=")" setValue={setValue} color="#202125" isOperation />
      <Button text="%" setValue={setValue} color="#202125" isOperation />

      <Button text="/" setValue={setValue} color="#202125" isOperation />
      <Button text="*" setValue={setValue} color="#202125" isOperation />
      <Button text="-" setValue={setValue} color="#202125" isOperation />

      <Button text="+" setValue={setValue} color="#202125" isOperation />
      <Button text="pi" setValue={setValue} color="#202125" isOperation />
      <Button text="=" setValue={setValue} color="#202125" isOperation />
    </div>
  );
};

export default OperationKeyboard;

OperationKeyboard.propTypes = {
  setValue: PropTypes.func.isRequired,
};
