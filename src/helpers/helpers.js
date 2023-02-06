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
    for (let i = 0; i < lines.length; i += 1) {
        const [a, b, c] = lines[i];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return ({
                cell: cells[a],
                line: lines[i]
            });
        }
    }
    return null;
}

export function calculateCurrentPosition(i) {
    const col = i % 3; 
    const row = Math.floor(i / 3);
    return (`(${col}, ${row})`);
}