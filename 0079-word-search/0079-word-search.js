/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    const rows = board.length;
    const cols = board[0].length;

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    function bt(row, col, index) {

        if (index === word.length) {
            return true;
        }

        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // 👣 mark current cell as visited
        const original = board[row][col];
        board[row][col] = '#';

        // 🧭 explore 4 directions
        for (const [dr, dc] of directions) {

            const newRow = row + dr;
            const newCol = col + dc;

            if (bt(newRow, newCol, index + 1)) {
                return true;
            }
        }

        // 🔙 undo
        board[row][col] = original;

        return false;
    }

    // Try every cell as a starting point
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (bt(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};