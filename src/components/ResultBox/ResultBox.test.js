import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {

    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    it('should render proper info about conversion when PLN -> USD', () => {

        const testCasesPlnToUsd = [
            { amount: 0.00, from: 'PLN', to: 'USD', result: '0'},
            { amount: 100.00, from: 'PLN', to: 'USD', result: '28.57' },
            { amount: 200.00, from: 'PLN', to: 'USD', result: '57.14'},
            { amount: 345.00, from: 'PLN', to: 'USD', result: '98.57'},
        ];

        for (const testObj of testCasesPlnToUsd) {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const resultField = screen.getByTestId('result');
            expect(resultField).toHaveTextContent(`${testObj.from} ${testObj.amount.toFixed(2)} = $${testObj.result}`);
            cleanup();
        }; 
    });

    it('should render proper info about conversion when USD -> PLN', () => {

        const testCasesUsdToPln = [
            { amount: 0.00, from: 'USD', to: 'PLN', result: '0.00' },
            { amount: 20.00, from: 'USD', to: 'PLN', result: '70.00' },
            { amount: 199.00, from: 'USD', to: 'PLN', result: '696.50' },
            { amount: 345.00, from: 'USD', to: 'PLN', result: '1,207.50' },
        ];

        for (const testObj of testCasesUsdToPln) {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const resultField = screen.getByTestId('result');
            expect(resultField).toHaveTextContent(`$${testObj.amount.toFixed(2)} = ${testObj.to} ${testObj.result}`);
            cleanup();
        };
    });

    it('should render proper info about conversion when PLN -> PLN', () => { 

        const testCasesPlnToPln = [
            { amount: 0.00, from: 'PLN', to: 'PLN', result: '0.00' },
            { amount: 20.00, from: 'PLN', to: 'PLN', result: '20.00' },
            { amount: 199.00, from: 'PLN', to: 'PLN', result: '199.00' },
            { amount: 355.00, from: 'PLN', to: 'PLN', result: '355.00' },
        ];

        for (const testObj of testCasesPlnToPln) {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const resultField = screen.getByTestId('result');
            expect(resultField).toHaveTextContent(`${testObj.from} ${testObj.amount.toFixed(2)} = ${testObj.to} ${testObj.amount.toFixed(2)}`);
            cleanup();
        };
    });

    it('should render proper info about conversion when USD -> USD', () => { 
        const testCasesUsdToUsd = [
            { amount: 0.00, from: 'USD', to: 'USD', result: '0.00' },
            { amount: 20.00, from: 'USD', to: 'USD', result: '20.00' },
            { amount: 199.00, from: 'USD', to: 'USD', result: '199.00' },
            { amount: 355.00, from: 'USD', to: 'USD', result: '355.00' },
        ];

        for (const testObj of testCasesUsdToUsd) {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const resultField = screen.getByTestId('result');
            expect(resultField).toHaveTextContent(`$${testObj.amount.toFixed(2)} = $${testObj.result}`);
            cleanup();
        };
    });

    it('should return "Wrong value" when input is lower than zero', () => { 
        
        const testCasesUsdToUsd = [
            { amount: -1.00, from: 'USD', to: 'PLN' },
            { amount: -20.00, from: 'PLN', to: 'USD' },
            { amount: -199.00, from: 'PLN', to: 'PLN' },
            { amount: -1000.00, from: 'USD', to: 'USD' },

        ];

        for (const testObj of testCasesUsdToUsd) {
            render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
            const resultField = screen.getByTestId('result');
            expect(resultField).toHaveTextContent('Wrong value');
            cleanup();
        };

    });

});