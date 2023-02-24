// function calculateWinner return object: cell - 'X' or 'O' value and line - indexes of winner cells

export function calculateWinner(cells) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const arr = [];
    for (let i = 0; i < lines.length; i += 1) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            arr.push({
                cell: cells[a],
                line: lines[i]
            });
        }
    }
    if (arr.length === 0) {
        return null;
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        const winLine = arr.map(el => el.line).flat().filter((el, idx, arr) => arr.indexOf(el) === idx);
        return ({
            cell: arr[0].cell,
            line: winLine,
        });
    }
}

export function calculateCurrentPosition(i) {
    const row = Math.floor(i / 3) + 1;
    const col = i % 3 + 1; 
    return (`(${row}, ${col})`);
}