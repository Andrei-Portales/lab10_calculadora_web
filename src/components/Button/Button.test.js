import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';


describe('Button', () => {
  let buttonId;
  const buttonText = '+';

  beforeAll(() => {
    render(
      <Button text={buttonText} setValue={(value) => {}} isOperation={false} />
    );
    buttonId = screen.getByTestId('button-test');

  });

  it('Mi button debe tener un texto', () => {
    const tbn1 = screen.getByText(buttonText);
    expect(tbn1).toBeInTheDocument();
  });

  it('Que el boton este definido', () => {
    expect(buttonId).toBeDefined();
  });


  it('Presionar el boton', ()=>{
    const mockFunction = jest.fn();
    render(
        <Button text={buttonText} setValue={mockFunction} isOperation={false} />
      );
    fireEvent.click(screen.getByTestId("button-test"));
    expect(mockFunction.mock.calls.length).toEqual(1);
  });

});
