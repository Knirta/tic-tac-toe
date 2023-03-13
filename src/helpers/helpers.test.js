import { calculateWinner, calculateCurrentPosition } from './helpers';

describe('Function calculateWinner', () => {
  it('is defined', () => {
    expect(calculateWinner).toBeDefined();
  });

  describe('return winner', () => {
    it('for "X" if diagonal is full', () => {
      const cells = ['X', 'O', null, 'O', 'X', null, null, null, 'X'];
      expect(calculateWinner(cells)).toEqual({
        cell: 'X',
        line: [0, 4, 8],
      });
    });

    it('for "O" if horizontal is full', () => {
      const cells = ['X', null, null, 'O', 'O', 'O', 'X', null, 'X'];
      expect(calculateWinner(cells)).toEqual({
        cell: 'O',
        line: [3, 4, 5],
      });
    });

    it('for "O" if vertical is full', () => {
      const cells = ['X', null, 'O', 'X', 'X', 'O', null, null, 'O'];
      expect(calculateWinner(cells)).toEqual({
        cell: 'O',
        line: [2, 5, 8],
      });
    });

    it('for "X" if 2 lines - vertical and horizontal - are full', () => {
      const cells = ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'X'];
      expect(calculateWinner(cells)).toEqual({
        cell: 'X',
        line: expect.arrayContaining([0, 3, 6, 7, 8]),
      });
      expect(calculateWinner(cells)).toEqual({
        cell: 'X',
        line: [6, 7, 8, 0, 3],
      });
    });

    it('for "X" if 2 diagonal lines are full', () => {
      const cells = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
      expect(calculateWinner(cells)).toEqual({
        cell: 'X',
        line: expect.arrayContaining([0, 2, 4, 6, 8]),
      });
      expect(calculateWinner(cells)).toEqual({
        cell: 'X',
        line: [0, 4, 8, 2, 6],
      });
    });
  });

  describe('does not return winner', () => {
    it('because there is no winner line', () => {
      const cells = ['X', null, null, 'O', 'X', null, 'O', 'X', 'O'];
      expect(calculateWinner(cells)).toBe(null);
      expect(calculateWinner(cells)).toBeNull();
    });

    it('because it has been played a draw', () => {
      const cells = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
      expect(calculateWinner(cells)).toBeNull();
    });
  });
});

describe('Function calculate current position', () => {
  it('is defined', () => {
    expect(calculateCurrentPosition).toBeDefined();
  });

  it('return string of row and column', () => {
    expect(calculateCurrentPosition(2)).toEqual({
      row: 'row 1',
      col: 'col 3',
    });
    expect(calculateCurrentPosition(4)).toEqual({
      row: 'row 2',
      col: 'col 2',
    });
    expect(calculateCurrentPosition(8)).toEqual({
      row: 'row 3',
      col: 'col 3',
    });
  });

  it('does not return null', () => {});
  expect(calculateCurrentPosition(3)).not.toBeNull();
  expect(calculateCurrentPosition(5)).toBeTruthy();
});
