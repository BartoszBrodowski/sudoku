import { useState } from 'react';
import styles from './cell.module.scss';

const _ = require('lodash');

const Cell = ({ row, column, board, active }) => {
	const [cellValue, setCellValue] = useState(board[row][column]);

	const changeCellValue = (e) => {
		if (active) {
			if (e.target.value === '') {
				setCellValue(e.target.value);
			}
			if (_.inRange(e.target.value, 1, 10)) {
				if (!isInRow(e)) {
					if (!isInColumn(e)) {
						setCellValue(e.target.value);
						board[row][column] = e.target.value;
						// console.log(e.target.value);
						// console.log(e.target);
					}
					// console.log(value);
				}
			}
		}
	};

	const isInRow = (e) => {
		if (board[row].includes(e.target.value)) {
			return true;
		} else {
			return false;
		}
	};

	const isInColumn = (e) => {
		const columnArray = [];
		for (let i = 0; i < board.length; i++) {
			columnArray.push(board[i][column]);
		}
		for (let i = 0; i < columnArray.length; i++) {
			if (e.target.value === columnArray[i]) {
				return true;
			}
		}
		return false;
		// For each row check if the value
		// is included in a column
		// board.forEach((row) => {
		// 	if (row[column] === e.target.value) {
		// 		console.log(row[column]);
		// 		return true;
		// 	}
		// });
	};

	return (
		<div className={styles['sudoku-node-container']}>
			<input
				type='text'
				value={cellValue === '0' ? '' : cellValue}
				onChange={changeCellValue}
				className={styles['sudoku-node']}
			/>
		</div>
	);
};

export default Cell;
