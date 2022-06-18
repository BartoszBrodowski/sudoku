import { useState } from 'react';
import styles from './cell.module.scss';

const _ = require('lodash');

const Cell = ({ row, column, board, active }) => {
	const [cellValue, setCellValue] = useState(board[row][column]);

	const changeCellValue = (e) => {
		let input = e.target.value;
		if (active) {
			if (input === '') {
				setCellValue('0');
				board[row][column] = input;
			}
			if (_.inRange(input, 1, 10)) {
				if (!isInRow(input)) {
					if (!isInColumn(input)) {
						setCellValue(input);
						board[row][column] = input;
						// console.log(e.target.value);
						// console.log(e.target);
					}
					// console.log(value);
				}
			}
			// isInSquare()
		}
	};

	const isInRow = (num) => {
		return board[row].includes(num);
	};

	const isInColumn = (num) => {
		let columnArray = [];
		for (let i = 0; i < board.length; i++) {
			columnArray.push(board[i][column]);
		}
		return columnArray.indexOf(num) > -1;
	};
	// Checks if the number provided is already in a 3x3 square
	// (the board consists of 9 3x3 squares)
	const isInSquare = (num) => {
		if (column % 3 === 0) {
			if (row % 3 === 0) {
				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						if (board[row + i][column + j] === num) {
						}
					}
				}
			}
		}
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
