import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Calculadora from './Calculadora';

describe('Calculadora', ()=>{

    it('Comprobar que la calculadora se renderizo', ()=>{
        render(<Calculadora />);
        expect(screen.queryByTestId('calculadora-test')).not.toBeNull();
    });

});