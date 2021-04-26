import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import OperationKeyboard from './OperationKeyboard';


describe('OperationKeyboard', ()=>{

    it('Contenedor existe', ()=>{
        render(<OperationKeyboard setValue={()=>{}}/>);
        expect(screen.queryByTestId('oprational-test')).not.toBeNull();
    });

    it('Debe tener textos de botones', ()=>{
        render(<OperationKeyboard setValue={()=>{}}/>);
        expect(screen.getByText('^')).toBeInTheDocument();
        expect(screen.getByText('Del')).toBeInTheDocument();
        expect(screen.getByText('Ac')).toBeInTheDocument();
        expect(screen.getByText('(')).toBeInTheDocument();
        expect(screen.getByText(')')).toBeInTheDocument();
        expect(screen.getByText('%')).toBeInTheDocument();
        expect(screen.getByText('/')).toBeInTheDocument();
        expect(screen.getByText('*')).toBeInTheDocument();
        expect(screen.getByText('-')).toBeInTheDocument();
        expect(screen.getByText('+')).toBeInTheDocument();
        expect(screen.getByText('pi')).toBeInTheDocument();
        expect(screen.getByText('=')).toBeInTheDocument();
    });

    it('Contenedor existe', ()=>{
        render(<OperationKeyboard setValue={()=>{}}/>);
        expect(screen.queryByTestId('oprational-test')).not.toBeNull();
    });

});