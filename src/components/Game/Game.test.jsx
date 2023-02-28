import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Game from './Game';

describe('Game component', () => {

    test('render game start', () => {
        render(<Game />);
        expect(screen.getByText('Next player: X')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /go to game start/i})).toBeInTheDocument();
    });

    test('should win player X', async () => {
        render(<Game />);
        await userEvent.click(screen.getByTestId('cell-0'));
        await userEvent.click(screen.getByTestId('cell-1'));
        await userEvent.click(screen.getByTestId('cell-4'));
        await userEvent.click(screen.getByTestId('cell-3'));
        await userEvent.click(screen.getByTestId('cell-8'));
        expect(screen.getByText('Winner: X')).toBeInTheDocument();
    });

    test('should win player O', async () => {
        render(<Game />);
        await userEvent.click(screen.getByTestId('cell-0'));
        await userEvent.click(screen.getByTestId('cell-1'));
        await userEvent.click(screen.getByTestId('cell-2'));
        await userEvent.click(screen.getByTestId('cell-4'));
        await userEvent.click(screen.getByTestId('cell-3'));
        await userEvent.click(screen.getByTestId('cell-7'));
        expect(screen.getByText('Winner: O')).toBeInTheDocument();
    });

    test('should play a draw', async () => {
        render(<Game />);
        await userEvent.click(screen.getByTestId('cell-0'));
        await userEvent.click(screen.getByTestId('cell-1'));
        await userEvent.click(screen.getByTestId('cell-3'));
        await userEvent.click(screen.getByTestId('cell-6'));
        await userEvent.click(screen.getByTestId('cell-5'));
        await userEvent.click(screen.getByTestId('cell-4'));
        await userEvent.click(screen.getByTestId('cell-7'));
        await userEvent.click(screen.getByTestId('cell-8'));
        await userEvent.click(screen.getByTestId('cell-2'));
        expect(screen.getByText('Played a draw')).toBeInTheDocument();
        expect(screen.getAllByTestId(/btn-*/).length).toBe(10);
    });

});