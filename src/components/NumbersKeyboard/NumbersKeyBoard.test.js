import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import NumbersKeyBoard from './NumbersKeyboard';


describe('NumbersKeyBoard', ()=>{

    it('Contenedor existe', ()=>{
        render(<NumbersKeyBoard setValue={()=>{}}/>);
        expect(screen.queryByTestId('numbers-test')).not.toBeNull();
    });

    it('Debe tener textos de botones', ()=>{
        render(<NumbersKeyBoard setValue={()=>{}}/>);
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.getByText('6')).toBeInTheDocument();
        expect(screen.getByText('7')).toBeInTheDocument();
        expect(screen.getByText('8')).toBeInTheDocument();
        expect(screen.getByText('9')).toBeInTheDocument();
        expect(screen.getByText('.')).toBeInTheDocument();
    });
});