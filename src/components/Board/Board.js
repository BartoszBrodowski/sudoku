import Cell from './Cell';
import styles from './board.module.scss';

const initialBoard = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const Board = () => {
	return (
		<div className={styles['board-container']}>
			<div className={styles.board}>
				{initialBoard.map((row, rowIndex) => {
					return (
						<div key={rowIndex}>
							{row.map((nod, columnIndex) => {
								return (
									<Cell key={columnIndex} row={rowIndex} column={columnIndex} />
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
