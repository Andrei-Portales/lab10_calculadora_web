import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from './Input';


describe('Input', () => {
  const inputText = '00.2256';

  it('Que el contenedor este definido', () => {
    render(<Input text={inputText} />);
    expect(screen.queryByTestId('div-test')).not.toBeNull();
  });

  it('Que el boton este definido', () => {
    render(<Input text={inputText} />);
    expect(screen.queryByTestId('input-test')).not.toBeNull();
  });

  it('Mi input debe tener un texto', () => {
    render(<Input text={inputText} />);
    expect(screen.queryByTestId('input-test').value).toEqual(inputText);
  });
});
