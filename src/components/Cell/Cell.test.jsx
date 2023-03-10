import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cell from './Cell';

const onClick = jest.fn();

describe('Component Cell', () => {
  test('renders button with X', () => {
    render(<Cell value={'X'} highlight={false} onClick={onClick} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('X')).toBeInTheDocument();
  });

  test('render button with O', () => {
    render(<Cell value={'O'} highlight={true} onClick={onClick} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('O')).toBeInTheDocument();
  });

  test('render button with value null', () => {
    render(<Cell value={null} highlight={false} onClick={onClick} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByText('X')).not.toBeInTheDocument();
    expect(screen.queryByText('O')).not.toBeInTheDocument();
    // expect(
    //   screen.getByRole('button').querySelector('span'),
    // ).toBeEmptyDOMElement();
  });

  test('render button with "highlight" class', () => {
    render(
      <Cell value="X" highlight={true} testId="cell-4" onClick={onClick} />,
      {},
    );
    expect(screen.getByTestId('cell-4')).toHaveClass('highlight');
    //screen.logTestingPlaygroundURL()
  });

  test('Cell snapshot', async () => {
    const view = await render(
      <Cell value={'X'} highlight={true} onClick={onClick} />,
    );
    expect(view).toMatchSnapshot();
  });
});
