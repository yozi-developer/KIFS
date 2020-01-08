function print(board_) {
    process.stdout.write("Print board \n");
    for(const row of board) {
        for(const col of row) {
            process.stdout.write(col ? "[x]" : "[ ]");
        }
        process.stdout.write("\n")
    }
}



function fillBoard(board_) {
    const BOARD_SIZE = 7;
    for(let r=0; r<BOARD_SIZE; r++) {
        const row = [];
        board_.push(row);
        for(let c=0; c< BOARD_SIZE; c++) {
            let cell;
            if (r===Math.floor(BOARD_SIZE/2) ||c===BOARD_SIZE/2) {

                cell = true;

            } else if (r===BOARD_SIZE/2-1||c===BOARD_SIZE/2-1){cell = true; }
            else {
               cell = false;
            }

            row.push(cell);
        }
    }
}

const board = [
];
fillBoard(board);
print(board);


