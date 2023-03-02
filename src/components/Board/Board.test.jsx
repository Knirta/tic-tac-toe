import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Board from './Board';
import userEvent from '@testing-library/user-event';

describe('Board component', () => {
    const onClick=jest.fn();
    const cells = Array(9).fill(null);

    test('render board', () => {
        render(<Board line={null} cells={cells} onClick={onClick} />);
        expect(screen.getAllByRole('button').length).toBe(9);
    });

    test('onClick function called', async () => {
        render(<Board line={null} cells={cells} onClick={onClick} />);
        await userEvent.click(screen.getByTestId('cell-0'));
        await userEvent.click(screen.getByTestId('cell-2'));
        await userEvent.click(screen.getByTestId('cell-7'));
        await userEvent.click(screen.getByTestId('cell-8'));
        await userEvent.click(screen.getByTestId('cell-6'));
        expect(onClick).toHaveBeenCalledTimes(5);
    });
});