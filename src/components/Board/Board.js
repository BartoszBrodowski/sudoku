import Cell from './Cell';
import styles from './board.module.scss';


const Board = (props) => {
	return (
		<div className={styles['board-container']}>
			<div className={styles.board}>
				{props.board.map((column, columnIndex) => {
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
										board={props.board}
										active={props.board[rowIndex][columnIndex] === '0'}
										difficulty={props.difficulty}
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
