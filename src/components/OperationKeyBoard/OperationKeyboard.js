import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './OperationKeyboard.scss';

const OperationKeyboard = (props) => {
  const { setValue } = props;

  return (
    <div className="buttons-operations" data-testid="oprational-test">
      <Button text="^" setValue={setValue} isOperation />
      <Button text="Del" setValue={setValue} isOperation />
      <Button text="Ac" setValue={setValue} isOperation />

      <Button text="(" setValue={setValue} isOperation />
      <Button text=")" setValue={setValue} isOperation />
      <Button text="%" setValue={setValue} isOperation />

      <Button text="/" setValue={setValue} isOperation />
      <Button text="*" setValue={setValue} isOperation />
      <Button text="-" setValue={setValue} isOperation />

      <Button text="+" setValue={setValue} isOperation />
      <Button text="pi" setValue={setValue} isOperation />
      <Button text="=" setValue={setValue} isOperation />
    </div>
  );
};

export default OperationKeyboard;

OperationKeyboard.propTypes = {
  setValue: PropTypes.func.isRequired,
};
