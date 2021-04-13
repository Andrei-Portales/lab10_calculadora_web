import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './NumbersKeyboard.scss';

const NumbersKeyboard = (props) => {
  const { setValue } = props;

  return (
    <div className="buttons-numbers">
      <Button text="7" setValue={setValue} isOperation={false} />
      <Button text="8" setValue={setValue} isOperation={false} />
      <Button text="9" setValue={setValue} isOperation={false} />
      <Button text="4" setValue={setValue} isOperation={false} />
      <Button text="5" setValue={setValue} isOperation={false} />
      <Button text="6" setValue={setValue} isOperation={false} />
      <Button text="1" setValue={setValue} isOperation={false} />
      <Button text="2" setValue={setValue} isOperation={false} />
      <Button text="3" setValue={setValue} isOperation={false} />
      <Button text="0" setValue={setValue} isOperation={false} />
      <Button text="." setValue={setValue} isOperation={false} />
      <Button text="" setValue={setValue} isOperation={false} />
    </div>
  );
};

export default NumbersKeyboard;

NumbersKeyboard.propTypes = {
  setValue: PropTypes.func.isRequired,
};
