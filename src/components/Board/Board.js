import Cell from './Cell';
import styles from './board.module.scss';

const board = [
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '2', '0', '0', '0'],
	['0', '0', '1', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
	['0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

const Board = () => {
	return (
		<div className={styles['board-container']}>
			<div className={styles.board}>
				{board.map((column, columnIndex) => {
					return (
						<div key={columnIndex}>
							{column.map((node, rowIndex) => {
								return (
									<Cell
										// Indexes from 1 to 81
										key={
											columnIndex === 0
												? rowIndex * 9 + 1 + columnIndex
												: (rowIndex + 1) * 9 + columnIndex + 1
										}
										row={rowIndex}
										column={columnIndex}
										board={board}
										active={board[rowIndex][columnIndex] === '0'}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Board;
